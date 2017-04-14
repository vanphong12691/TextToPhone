/**
*
* Header Chat
*
* @author  Minh Huy
* @version 1.0
* @since   14-11-2016
*/
import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  Platform
}from 'react-native';

var Global = require('../../common/global');
var styles = require('./index_style');
import Icon from 'react-native-vector-icons/Ionicons';
class Header extends Component
{
  propTypes:{
    title:React.Props.string,
    icon: React.Props.string,
  }

  render(){
    let icon = this.props.icon ? this.props.icon :"ios-menu";

    return(
      <View style={styles.main_view}>
        <View style={styles.pIcon}>
          <Icon
              name={icon}
              size={30}
              color={"white"}
          />
        </View>
           <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.text_header}>{this.props.title}</Text>
        <View style={styles.pIcon}>

        </View>
      </View>
    );
  }
}
module.exports = Header;
