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
              message:     '向右拖拽关闭页面',
              name:        'NavigatorBarRNComponent',

            });}
          }
          btnText="从右边向左切入页面(带有透明度变化)"
          />
      </ScrollView>
  );
  }
}

module.exports = NavMenu;
