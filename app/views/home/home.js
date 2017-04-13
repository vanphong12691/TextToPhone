
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

import SplashScreen from 'react-native-splash-screen'
import ScrollableTabView, {ScrollableTabBar } from 'react-native-scrollable-tab-view';
import CustomTabBar from './CustomTabBar';
import Header from '../../component/header/index';
import Icon from 'react-native-vector-icons/Ionicons';
const FilePickerManager = require('NativeModules').FilePickerManager;
class Home extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            text: 'Đây là chương trình đọc Tiếng Việt.',
            content: 'Nội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdf Nội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdfNội dung tệp tin asdfadfasdfa asdf asdfasdfasdf asdfasdfasdfasdf',
        };
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    _changeTab(item){
        if(item.i==1){

        }
    }

    _onPressOpen(){
        FilePickerManager.showFilePicker(null, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled file picker');
            }
            else if (response.error) {
                console.log('FilePickerManager Error: ', response.error);
            }
            else {
                console.log(response);
                this.setState({
                    content: "Thành công"
                });
            }
        });
    }

    _onPressSpeak(){

    }
    render(){

        return (
            <ScrollableTabView
                removeClippedSubviews={false}
                initialPage = {1}
                style={{ backgroundColor: 'white' }}
                tabBarPosition={'bottom'}
                locked = {true}
                onChangeTab={(item) => this._changeTab(item)}
                renderTabBar={() => <CustomTabBar />}>
                <View tabLabel="ios-mic" style={styles.tabView}>
                   <Header title="ĐỌC ĐOẠN VĂN"/>
                   <View style={styles.marginHeader}>
                       <TextInput
                           style={styles.textInput}
                           onChangeText={(text) => this.setState({text})}
                           value={this.state.text}
                           editable = {true}
                           multiline = {true}
                           numberOfLines = {4}
                           underlineColorAndroid={'transparent'}
                       />
                   </View>
                </View>


                <View tabLabel="ios-folder" style={styles.tabView}>
                    <Header title="ĐỌC TẬP TIN"/>
                    <View style={[{flex: 1}, styles.marginHeader]}>
                           <ScrollView>
                               <Text>{this.state.content}</Text>
                           </ScrollView>
                    </View>
                    <View style={{height: 80, backgroundColor:'blue'}}>

                    </View>
                    <View style={{
                        height:Global.Constants.HEIGHT_HEADER,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        }}>
                        <TouchableHighlight onPress={this._onPressOpen.bind(this)} style={styles.button}>
                           <View>
                               <Text>OPEN</Text>
                           </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._onPressSpeak} style={styles.button}>
                            <View>
                                <Text>SPEAK</Text>
                            </View>
                        </TouchableHighlight>

                    </View>
                 </View>

                <View tabLabel="ios-settings" style={styles.tabView}>

                </View>
            </ScrollableTabView>
        )
    }
}

var styles = StyleSheet.create({
    marginHeader:{
        marginTop: Global.Constants.HEIGHT_HEADER,
    },
    tabView:{
        flexDirection:'column',
        flex: 1,
        backgroundColor: Global.Constants.BACKGROUND_COLOR,
    },
    button:{
        height: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Global.Constants.BUTTON_COLOR,
    },
    textInput:{
        height: Global.Constants.HEIGHT_SCREEN-Global.Constants.HEIGHT_HEADER*2-25,
        textAlignVertical: 'top',
        padding: 10
    }
});
module.exports = Home;
