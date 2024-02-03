import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Index extends Component {
    render() {
        const { isFlat } = this.props;
        if (!isFlat) {
            return (
                <View style={styles.Container}>
                    <TouchableOpacity><Image source={require('../../assets/Icons/notification.png')} /></TouchableOpacity>
                    <Image source={require('../../assets/Icons/logo.png')} />
                    <TouchableOpacity><Image source={require('../../assets/Icons/cash.png')} /></TouchableOpacity>
                </View>
            )
        } else if (isFlat) {
            return (
                <View style={styles.ContainerS}>
                    <TouchableOpacity><Image style={{marginRight:30,}} source={require('../../assets/Icons/notification.png')} /></TouchableOpacity>
                    <Image source={require('../../assets/Icons/logo.png')} />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    ContainerS: {
        width: '100%',
        flex: 0.15,
        alignItems: 'center',
        paddingHorizontal: 50,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
})