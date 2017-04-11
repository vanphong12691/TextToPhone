
import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    ListView,
    ScrollView,
    Image,
    TextInput,
    TouchableHighlight,
    RefreshControl,
    ViewPagerAndroid,
    ActivityIndicator
}from 'react-native';

var Global = require('../../common/global');

class AutoExpandingTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. The focus of React Native is on developer efficiency across all the platforms you care about — learn once, write anywhere. Facebook uses React Native in multiple production apps and will continue investing in React Native.',
            height: 0,
        };
    }
    render() {
        return (
            <TextInput
                {...this.props}
                multiline={true}
                onContentSizeChange={(event) => {
                    this.setState({height: event.nativeEvent.contentSize.height});
                }}
                onChangeText={(text) => {
                    this.setState({text});
                }}
                style={[styles.default, {height: Math.max(35, this.state.height)}]}
                value={this.state.text}
            />
        );
    }
}
class Home extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            text: 'Useless Multiline Placeholder',
        };
    }
    render(){

        return (
               <View>
                   <View>
                       <Text>TEXT TO PHONE</Text>
                   </View>
                   <View>
                       <AutoExpandingTextInput
                           placeholder="height increases with content"
                           enablesReturnKeyAutomatically={true}
                           returnKeyType="default"
                       />
                   </View>
               </View>
        )
    }
}

var styles = StyleSheet.create({
    centering:{
        alignItems: 'center',
        justifyContent: 'center',
        top: 40,
        right: 0,
        bottom: 0,
        left: 0,
        position: 'absolute',
        height: Global.Constants.HEIGHT_SCREEN-40,
        backgroundColor: '#CFD8DC'
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: 50
    },
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    card:{
        backgroundColor: '#263238'
    }

});
module.exports = Home;
