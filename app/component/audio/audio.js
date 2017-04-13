import React, {Component} from 'react';
import {
    Text,
    View,
    ListView,
    ScrollView,
    Image,
    TouchableHighlight,
    ActivityIndicator
}from 'react-native';

var styles = require('./audio_style');
import Slider from 'react-native-slider';
import Video from 'react-native-video';
var Global = require('../../common/global');
class Audio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            shuffle: false,
            sliding: false,
            currentTime: 0,
            audioPath: "",
            loading: false,
            content: ""
        }
    }

    propTypes: {
        content:React.PropTypes.string,
        isReadFile: React.PropTypes.bool,
        onClickOpen: React.PropTypes.func,
    }

    _onPressSpeak() {
        let loading = false;
        if(this.state.content!=this.props.content){
            loading = true;
        }
        let content = encodeURIComponent(this.props.content);
        let audioPath = "http://192.168.1.110:59125/process?INPUT_TEXT=" + content + "&INPUT_TYPE=TEXT&OUTPUT_TYPE=AUDIO&LOCALE=vi&AUDIO=WAVE_FILE";
        this.setState({
            audioPath: audioPath+"1",
            currentTime: 0,
            loading: loading,
            content: this.props.content,
        })
    }

    render() {
        let songPercentage;
        if (this.state.songDuration !== undefined) {
            songPercentage = this.state.currentTime / this.state.songDuration;
        } else {
            songPercentage = 0;
        }
        let playImage = this.state.playing ? require('../../images/pause.png') : require('../../images/play.png');

        return (
            <View>
                <View style={{height: 60, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flex: 1, flexDirection: 'row', padding: 5, alignItems: 'center'}}>
                        <View style={{flex: 0.15, alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableHighlight onPress={this.togglePlay.bind(this)} underlayColor="transparent"
                                                style={{width: 30, height: 30}}>
                                <Image style={{width: 30, height: 30}} source={playImage}></Image>
                            </TouchableHighlight>
                        </View>
                        <View style={{flex: 0.85,}}>
                            <Video source={{uri: this.state.audioPath}}
                                   ref="audio"
                                   volume={ this.state.muted ? 0 : 1.0}
                                   muted={false}
                                   paused={!this.state.playing}
                                   onLoad={ this.onLoad.bind(this) }
                                   onProgress={ this.setTime.bind(this) }
                                   onEnd={ this.onEnd.bind(this) }
                                   resizeMode="cover"
                                   repeat={false}/>
                            <View style={{flex: 1, height: 20, justifyContent: 'center'}}><Text
                                style={{fontSize: 16, color: 'black'}}>{this.props.name}</Text></View>
                            <View style={ styles.sliderContainer }>

                                <Slider
                                    onSlidingStart={ this.onSlidingStart.bind(this) }
                                    onSlidingComplete={ this.onSlidingComplete.bind(this) }
                                    onValueChange={ this.onSlidingChange.bind(this) }
                                    minimumTrackTintColor='#851c44'
                                    style={ styles.slider }
                                    trackStyle={ styles.sliderTrack }
                                    thumbStyle={ styles.sliderThumb }
                                    value={ songPercentage }/>
                                <View style={ styles.timeInfo }>
                                    <Text
                                        style={ styles.time }>{ Global.Utils.secondsToHms(this.state.currentTime)  }</Text>
                                    <Text
                                        style={ styles.timeRight }>- { Global.Utils.secondsToHms(this.state.songDuration - this.state.currentTime) }</Text>
                                </View>
                            </View>
                        </View>

                    </View>

                </View>
                <View style={{
                    height: Global.Constants.HEIGHT_HEADER,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    {this.props.isReadFile &&
                    <TouchableHighlight onPress={this.props.onClickOpen} underlayColor={"#EC407A"} style={styles.button}>
                        <View>
                            <Text style={{color:'white'}}>MỞ TẬP TIN</Text>
                        </View>
                    </TouchableHighlight>}
                    <TouchableHighlight onPress={this._onPressSpeak.bind(this)} underlayColor={"#EC407A"} style={styles.button}>
                        <View>
                            <Text style={{color:'white'}}>ĐỌC</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                {this.state.loading&&<View style={styles.centering}>
                    <ActivityIndicator
                        animating = {true}
                        size="large"
                    />
                </View>}
            </View>
        )
    }

    togglePlay() {
        this.setState({playing: !this.state.playing});
    }

    onLoad(params) {
        this.setState({
            loading:false,
            songDuration: params.duration
        });
    }

    onEnd() {
        this.refs.audio.seek(0);
        this.setState({playing: false, currentTime: 0, sliding: false, shuffle: false});
    }

    onSlidingStart() {
        this.setState({sliding: true});
    }

    onSlidingChange(value) {
        let newPosition = value * this.state.songDuration;
        this.setState({currentTime: newPosition});
    }

    onSlidingComplete() {
        this.refs.audio.seek(this.state.currentTime);
        this.setState({sliding: false});
    }

    setTime(params) {
        if (!this.state.sliding) {
            this.setState({
                currentTime: params.currentTime});
        }
    }

}
module.exports = Audio;
