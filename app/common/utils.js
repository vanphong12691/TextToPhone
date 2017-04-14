'use strict'

import React,{
  NetInfo,
  Platform,
  AsyncStorage,
}from 'react-native';
var Constants = require('./constants');
var Domain = require('./domain');
var Global = require('./global');
var RCTUIManager = require('NativeModules').UIManager;
var moment = require('moment');

class Utils
{
  checkNetwork(){
    return new Promise(function(resolve,reject){
      NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) {
          resolve(true);
        }else{
          reject(false);
        }
      });
    });
  }



   convertContentToPages(content){
       let numberLine = 30;
       let pages = [];
       if(content!=null){
           let tempts = content.split(". ");
           if(tempts.length>numberLine){
               let stringTmp = "";
               for(let i=0; i<tempts.length; i++){
                   if(i==tempts.length-1){
                       stringTmp+=tempts[i]
                   }else{
                       stringTmp+=tempts[i]+". ";
                   }
                   if((i)%numberLine==numberLine-1 || i == tempts.length-1){
                       pages.push(stringTmp);
                       stringTmp = "";
                   }
                }

           }else{
               pages.push(content);
           }
       }
       return pages;
   }


    secondsToHms(d) {
      if(isNaN(d)){
        return "0:00";
      }if(d==0){
            return "0:00";
        } else {
        d = Number(d);
        if(d==0) return '';
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
        return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
      }
    }

}
module.exports = Utils;
