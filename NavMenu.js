'use strict'
import React from 'React';
import {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

var NavButton = require('./NavButton');

const styles = StyleSheet.create({
  navButton:{
    paddingTop:100,
  }
});

class NavMenu extends React.Component {
  constructor(props) {
        super(props);
        this.state = {};
    }

  render() {
    const {navigator} = this.props;
    return(
      <ScrollView>
      <NavButton
        style={styles.navButton}
        onPress={
          ()=>{
            navigator.push({
              message:     'Custome-NavigatorScene',
              name:        'NavigatorBarRNComponent',

            });}
          }
          btnText="Click Push Custome NavigatorScene(Text)"
          />
      </ScrollView>
  );
  }
}

module.exports = NavMenu;
