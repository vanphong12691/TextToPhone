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
        backgroundColor: '#F8BBD0',
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
    },
    timeInfo: {
        flexDirection: 'row',
    },
    time: {
        flex: 1,
        fontSize: 12,
        marginTop: -6,
    },
    timeRight: {
        marginTop: -6,
        textAlign: 'right',
        flex: 1,
        fontSize: 12,
    },
    slider: {
        marginTop: 12,
        height: 30,
    },
    sliderTrack: {
        height: 2,
        backgroundColor: '#333',
    },
    sliderThumb: {
        width: 10,
        height: 10,
        backgroundColor: '#f62976',
        borderRadius: 10 / 2,
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