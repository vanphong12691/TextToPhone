import React,{
  StyleSheet
}from 'react-native';
var Global = require('../../common/global');
module.exports = StyleSheet.create({
   main_view:{
     paddingLeft: 20,
       paddingRight: 20,
     position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     flex: 1,
     backgroundColor: Global.Constants.HEAD_COLOR,
     height:Global.Constants.HEIGHT_HEADER,
     alignItems:'center',
     justifyContent: 'center'
   },
   text_header:{
     fontSize: 18,
     color: 'white'
   }
});
