
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
    ActivityIndicator,
    TouchableOpacity
}from 'react-native';

var Global = require('../../common/global');
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen'
import ScrollableTabView, {ScrollableTabBar } from 'react-native-scrollable-tab-view';
import CustomTabBar from './CustomTabBar';
import Header from '../../component/header/index';
import Audio from '../../component/audio/audio';
var RNFS = require('react-native-fs');
const FilePickerManager = require('NativeModules').FilePickerManager;
class Home extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            text: 'Đây là chương trình đọc Tiếng Việt.',
            content: 'Chọn "MỞ TỆP TIN" để thực hiện đọc tập tin.',
            pages: [],
            audioPath: '',
            playing: false,
            loading: false,
            readText: true,
            currentPage: 0,
        };
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    _changeTab(item){
        if(item.i==1){
        }
    }

    onClickOpen(){
        FilePickerManager.showFilePicker(null, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                this.setState({
                    content: 'Chọn "MỞ TỆP TIN" để thực hiện đọc tập tin.'
                });
            }
            else if (response.error) {
                this.setState({
                    content: "Có lỗi trong quá trình đọc tập tin."
                });
            }
            else {

                RNFS.readFile(response.path) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
                    .then((result) => {

                        let pages = Global.Utils.convertContentToPages(result);

                        this.setState({
                            content: pages[0],
                            pages: pages
                        });
                    })
            }
        });
    }

    onClickNext(){

        let current = this.state.currentPage;
        let pages = this.state.pages;
        if(current < pages.length-1){
            this.setState({
                content: pages[current+1],
                currentPage: current+1
            })
        }


    }

    onClickBack(){
        let current = this.state.currentPage;
        let pages = this.state.pages;
        if(current > 0){
            this.setState({
                content: pages[current-1],
                currentPage: current-1
            })
        }

    }
    render(){
        let next_back = false;
        if(this.state.pages.length > 1){
            next_back = true;
        }
        let next = false;
        if(this.state.currentPage < this.state.pages.length-1){
            next = true;
        }

        let back = false;
        if(this.state.currentPage >0){
            back = true;
        }

        return (
            <ScrollableTabView
                initialPage={1}
                removeClippedSubviews={false}
                style={{ backgroundColor: 'white' }}
                tabBarPosition={'bottom'}
                locked={true}
                onChangeTab={(item) => this._changeTab(item)}
                renderTabBar={() => <CustomTabBar />}>
                <View tabLabel="ios-home" style={styles.tabView}>
                   <Header title="ĐỌC ĐOẠN VĂN"/>
                   <View style={[styles.marginHeader, {flex: 1}]}>
                       <TextInput
                           style={styles.textInput}
                           onChangeText={(text) => this.setState({text})}
                           value={this.state.text}
                           editable = {true}
                           multiline = {true}
                           numberOfLines = {100}
                           underlineColorAndroid={'transparent'}
                       />
                   </View>
                    <View style={{height: 110}}>
                        <Audio isReadFile = {false} content={this.state.text} onClickOpen={this.onClickOpen.bind(this)}/>
                    </View>
                </View>


                <View tabLabel="ios-document" style={styles.tabView}>
                    <View style={{height: Global.Constants.HEIGHT_HEADER}}>
                        <Header title="ĐỌC TẬP TIN"/>
                    </View>
                    <View style={{flex:1}}>
                        <ScrollView><Text style={styles.textInput}>
                            {this.state.content}
                        </Text>
                        </ScrollView>
                    </View>
                    <View style={{height: 110}}>
                        <Audio isReadFile = {true} content={this.state.content} onClickOpen={this.onClickOpen.bind(this)}/>
                    </View>
                    {next_back&&<View style={{
                        flexDirection:'row',
                        justifyContent: 'space-between',
                        position: 'absolute',
                        left: 0,
                        right:0,
                        top: Global.Constants.HEIGHT_SCREEN/3,
                    }}>
                        {back&&<TouchableOpacity onPress={this.onClickBack.bind(this)}>
                            <Icon
                                name={"ios-arrow-back"}
                                size={40}
                                color={Global.Constants.HEAD_COLOR}
                            />
                            </TouchableOpacity>}
                        {!back&&<View></View>}
                        {next&&<TouchableOpacity onPress={this.onClickNext.bind(this)}>
                            <Icon
                                name={"ios-arrow-forward"}
                                size={40}
                                color={Global.Constants.HEAD_COLOR}
                            />
                            </TouchableOpacity>}
                    </View>}
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
    textInput:{
        textAlignVertical: 'top',
        color: Global.Constants.FONT_COLOR,
        padding: 8,
        fontSize: 14
    }
});
module.exports = Home;
