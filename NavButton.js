'use strict'
import React from 'React';
import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  button:{
    backgroundColor:'white',
    padding:15,
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderBottomColor:'#CDCDCD'
  },
  buttonText:{
    fontSize:16,
    paddingTop:100,
  },
});

class NavButton extends React.Component {
  render(){
    return(
      <TouchableHighlight underlayColor="#B5B5B5" onPress={this.props.onPress}
        style={styles.button}>
        <Text style={styles.buttonText}>
          {this.props.btnText}
        </Text>
      </TouchableHighlight>
    );
  }
}

module.exports = NavButton;
