import {Dimensions} from 'react-native';
var Localization = require('./localization');
//define common
exports.WIDTH_SCREEN = Dimensions.get('window').width;
exports.HEIGHT_SCREEN = Dimensions.get('window').height;
exports.HEIGHT_KEYBOARD_IOS = 216;
exports.HEIGHT_HEADER = 50;
exports.HEIGHT_FOOTER = 120;
exports.IMAGE_MESSAGE_HEIGHT = 150;
exports.IMAGE_MESSAGE_WIDTH = 150;
exports.HEAD_COLOR = '#00B0FF';
exports.HEAD_BLU_COLOR = '#80D8FF';
exports.BACKGROUND_COLOR = '#E1F5FE';
exports.BUTTON_COLOR = "#B3E5FC";
exports.FONT_COLOR = "#01579B";

//define key store
exports.SETTING_STORE_KEY = 'SETTING_STORE_KEY';
exports.SEEN_STORE_KEY = 'SEEN_STORE_KEY';
exports.LIKE_STORE_KEY = 'LIKE_STORE_KEY';

//define route id
exports.HOME_ID = 1;
