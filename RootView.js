/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  NetInfo
} from 'react-native';
var HomeView = require('./app/views/home/home');
var Global = require('./app/common/global');

class RootView extends Component {

  render() {
    return (
      <Navigator
        ref='navigator'
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
        initialRoute={{id: Global.Constants.HOME_ID}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }

  renderScene(route,navigator){
     Global.navigator = navigator;
    if(this.props.onRouteChange){
      this.props.onRouteChange(route.id);
    }
    switch (route.id) {
      case Global.Constants.HOME_ID:
        return (<HomeView navigator={navigator}/>);
      default:
    }
  }
}

module.exports=RootView;
