import React,{
    StyleSheet
}from 'react-native';
var Global = require('../../common/global');
module.exports = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    centering:{
        backgroundColor: Global.Constants.BACKGROUND_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        position: 'absolute',
        flex: 1,
    },
    sliderContainer: {
        width: window.width - 40,
        paddingRight: 15
    },
    timeInfo: {
        flexDirection: 'row',
    },
    time: {
        flex: 1,
        fontSize: 12,
        marginTop: -6,
        color: Global.Constants.HEAD_COLOR
    },
    timeRight: {
        marginTop: -6,
        textAlign: 'right',
        flex: 1,
        fontSize: 12,
        color: Global.Constants.HEAD_COLOR
    },
    slider: {
        marginTop: 12,
        height: 30,
    },
    sliderTrack: {
        height: 2,
        backgroundColor: Global.Constants.HEAD_BLU_COLOR,
    },
    sliderThumb: {
        width: 5,
        height: 10,
        backgroundColor: Global.Constants.HEAD_COLOR,
        borderRadius: 0,
        shadowColor: 'red',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 2,
        shadowOpacity: 1,
    },
    button:{
        height: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Global.Constants.BUTTON_COLOR,
    },
});