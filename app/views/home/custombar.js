import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
var Global = require('../../common/global');
const FacebookTabBar = React.createClass({
    tabIcons: [],

    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
    },

    componentDidMount() {
        this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
    },

    setAnimationValue({ value, }) {
        this.tabIcons.forEach((icon, i) => {
            const progress = Math.min(1, Math.abs(value - i))
            icon.setNativeProps({
                style: {
                    color: this.iconColor(progress),
                },
            });
        });
    },

    //color between rgb(59,89,152) and rgb(204,204,204)
    iconColor(progress) {
        const red = 2 + (204 - 2) * progress;
        const green = 136 + (204 - 136) * progress;
        const blue = 209 + (204 - 209) * progress;
        return `rgb(${red}, ${green}, ${blue})`;
    },

    render() {
        return <View style={[styles.tabs, this.props.style, ]}>
            {this.props.tabs.map((tab, i) => {
                return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
                    <Icon
                        name={tab}
                        size={35}
                        color={this.props.activeTab === i ? 'rgb(2,136,209)' : 'rgb(204,204,204)'}
                        ref={(icon) => { this.tabIcons[i] = icon; }}
                    />
                </TouchableOpacity>;
            })}
        </View>;
    },
});

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      

    },
    tabs: {
        height: Global.Constants.HEIGHT_HEADER,
        flexDirection: 'row',
        paddingTop: 5,
        borderWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopColor: 'rgba(0,0,0,0.05)',
    },
});

export default FacebookTabBar;
