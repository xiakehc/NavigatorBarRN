'use strict'
import React from 'React';
import {
  StyleSheet,
  TouchableOpacity,
  Navigator,
  Text,
  Image,
  View,
  Alert,
  ScrollView
} from 'react-native';

var navBarBackImg = require('./app/img/navbar_back.png');

var styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#ff6633',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: 'white',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarImageView:{
    flexDirection:'row',
    alignItems:'center',
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarTextColor:{
    color:'white'
  },
  thumbImg:{
    width:16,
    height:16,
  }
});

var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        return (
            <TouchableOpacity
                onPress={() => navigator.pop()}
                style={styles.navBarLeftButton}>
                <View style={styles.navBarImageView}>
                  <Image source = {navBarBackImg} style={styles.thumbImg}/>
                  <Text style={[styles.navBarText,styles.navBarTextColor, route.rnStyle]}>
                      Back
                  </Text>
                </View>
            </TouchableOpacity>
        );
    },

    RightButton(route, navigator, index, navState) {
        return (
            <TouchableOpacity
                onPress={() => Alert.alert(
                  'Alert',
                  'index: '+index+',object: '+route.rnPushComponent,
                  [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                    {text: 'OK', onPress: () => {
                      navigator.push({
                        title: 'rnPushComponentTitle',
                        name : 'rnPushComponent',
                      });
                    }},
                  ]
                )}
                style={styles.navBarRightButton}>
                <Text style={[styles.navBarText,styles.navBarTextColor, route.rnStyle]}>
                    Done
                </Text>
            </TouchableOpacity>
        );
    },

    Title(route, navigator, index, navState) {
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText]}>
                {route.message}
            </Text>
        );
    },

};

class NavigatorBarRN extends React.Component{
  constructor(props)  {  
      super(props);  
      this.state  =   {    
          navBarTitle:     this.props.rnTitle,
          componentScene:  this.props.componentScene,
          rnPushComponent: this.props.rnPushComponent,
          rnStyle:         this.props.rnStyle,
      };
  }

  componentDidMount(){
    if(!this.state.navBarTitle){
      this.setState({
        navBarTitle:    'Default-NavTitle',
      });
    }
  }

  render() {
    var navigatorBar = (
      <Navigator.NavigationBar
        routeMapper={NavigationBarRouteMapper}
        style={styles.navBar}
        />)

    return(
      <Navigator style={styles.container}
        initialRoute={{
          message:         this.state.navBarTitle,
          index:           0,
          name:            "NavigatorBarRNComponent",
          rnPushComponent: this.state.rnPushComponent,
          rnStyle:         this.state.rnStyle
          }}
        renderScene={(route,navigator)=>{
          console.log('|||||||||'+navigator.getCurrentRoutes());
          switch (route.name) {
            case 'NavigatorBarRNComponent':
              return this.state.componentScene
              break;
            case 'rnPushComponent':
              route.message = route.title;
              return (<this.state.rnPushComponent navigator={navigator} />)
              break;
            default:
              break;
          }
          }
        }
        navigationBar={navigatorBar}
      />
    );
  }
}

module.exports = NavigatorBarRN;
