#!/Users/elliotelias/miniconda2/bin/python
from flask import Flask, make_response
from flask_restful import Resource, Api, abort, reqparse
import StringIO
from opendrift.readers import reader_basemap_landmask
from opendrift.readers import reader_netCDF_CF_generic
from opendrift.models.leeway import Leeway

app = Flask(__name__)
api = Api(app)

class DrifterApi(Resource):
    def get(self):

        parser = reqparse.RequestParser()
        parser.add_argument('latitude', type=float, help='Latitude of object')
        parser.add_argument('longitude', type=float, help='Longitude of object')
        args = parser.parse_args(strict=True)
        if args['latitude'] is not None and args['longitude'] is not None:
            if abs(args['latitude']) > 90 :
                abort(404, message="latitude is out of range of -90 <= latitude <= 90")
            
            if abs(args['longitude']) > 180:
                abort(404, message='longitude is out of range of -180 <= longitude <= 180')
            
            latitude = args['latitude']
            longitude = args['longitude']
            lw = Leeway()  # Set loglevel to 0 for debug information

            # Arome
            #reader_arome = reader_netCDF_CF_generic.Reader('http://thredds.met.no/thredds/dodsC/arome25/arome_metcoop_default2_5km_latest.nc')
            reader_arome = reader_netCDF_CF_generic.Reader(lw.test_data_folder() + 
                '16Nov2015_NorKyst_z_surface/arome_subset_16Nov2015.nc')

            # Norkyst
            #reader_norkyst = reader_netCDF_CF_generic.Reader('http://thredds.met.no/thredds/dodsC/sea/norkyst800m/1h/aggregate_be')
            reader_norkyst = reader_netCDF_CF_generic.Reader('http://tds.hycom.org/thredds/dodsC/GLBu0.08/expt_91.2/uv3z')

            # Landmask (Basemap)
            reader_basemap = reader_basemap_landmask.Reader(
                                llcrnrlon=longitude-2, llcrnrlat=latitude-2,
                                urcrnrlon=longitude+2, urcrnrlat=latitude+2, resolution='h',
                                projection='merc')
            
            #lw.add_reader([reader_norkyst, reader_arome, reader_basemap])
            # Adding readers succesively, and specifying which variables they 
            # shall provide. This way, order of adding readers does not matter,
            # except for small rounding differences due to different projection
            lw.add_reader(reader_norkyst,
                        variables=['x_sea_water_velocity', 'y_sea_water_velocity'])
            lw.add_reader(reader_arome,
                        variables=['x_wind', 'y_wind'])
            lw.add_reader(reader_basemap,
                        variables=['land_binary_mask'])

            # Seed leeway elements at defined position and time
            objType = 26  # 26 = Life-raft, no ballast
            lw.seed_elements(longitude, latitude, radius=100, number=30,
                            time=reader_arome.start_time, objectType=objType)

            lw.set_projection('+proj=merc')

            lw.run(steps=60*4, time_step=900)
            
            lp = lw.plot(show=False)
            img = StringIO.StringIO()
            lp[1].savefig(img,format='png')
            img.seek(0)
            response=make_response(img.buf)
            response.headers['Content-Type'] = 'image/png'
            return response
        else:
            abort(404, message="Requires latitude and longitude but none were given.")
        
        

api.add_resource(DrifterApi, '/')

if __name__ == '__main__':
    app.run(debug=True)
