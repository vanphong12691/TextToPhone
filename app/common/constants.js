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
exports.HEAD_COLOR = '#F50057';
exports.HEAD_BLU_COLOR = '#FF80AB';
exports.BACKGROUND_COLOR = '#F8BBD0';
exports.BUTTON_COLOR = "#FF4081";

//define key store
exports.SETTING_STORE_KEY = 'SETTING_STORE_KEY';
exports.SEEN_STORE_KEY = 'SEEN_STORE_KEY';
exports.LIKE_STORE_KEY = 'LIKE_STORE_KEY';

//define route id
exports.HOME_ID = 1;
