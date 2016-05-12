'use strict'
import React from 'React';
import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  Navigator,
  ScrollView,
} from 'react-native';


var NavMenu = require('./NavMenu');
var NavigatorBarRN = require('./NavigatorBarRN');
var textModule = require('./test.android');

const styles = StyleSheet.create({
   container: {
    flex: 1,
   },
   messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  messageTextNav:{
    paddingTop:100,
    fontSize:16,
  },
  scene:{
    alignItems:'center',
  },
  colorTemp:{
    color: 'gray',
  }
});

class  NavigatorDemo extends React.Component  {
  render() {
    var componentScene = (
      <ScrollView contentContainerStyle={styles.scene}>
        <Text style={styles.messageTextNav}>{'这是一个自定义NavigatorBar组件'}</Text>
      </ScrollView>
    );
    return(
      <NavigatorBarRN
        rnTitle="TitleRN-EAST"
        componentScene={componentScene}
        rnPushComponent = {NavMenu}
        rnStyle={styles.colorTemp}
        />
    );
  }
}


AppRegistry.registerComponent('NavigatorDemo', () => NavigatorDemo);
