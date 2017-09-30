

const React = require('react');
const {
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  
} = require('react-native');


class ProfileButton extends React.Component {
  render() {
    return (
      
  


<TouchableOpacity onPress ={this._onPress}>
  <Image style={styles.button}
  source={require('../Img/Img1.gif')}/>
  </TouchableOpacity>
      
    );
  }
}

var styles = StyleSheet.create({
  button: {
    
    width: 150,
    height: 150,
    borderRadius: 45,
    
  },
});

module.exports = ProfileButton;
