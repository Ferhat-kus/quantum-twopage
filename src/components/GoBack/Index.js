import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Index extends Component {
    render() {
        const { isFlat, title } = this.props;
        if (!isFlat) {
            return (
                <View style={styles.Container}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image style={{ marginRight: 30, }} source={require('../../assets/Icons/left-arrow.png')} />
                        <Text style={styles.Title}>{title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/Icons/share.png')} />
                    </TouchableOpacity>
                </View>
            )
        } else if (isFlat) {
            return (
                <View style={styles.ContainerS}>
                    <TouchableOpacity onPress={this.props.onPress}>
                        <Image source={require('../../assets/Icons/X.png')} />
                    </TouchableOpacity>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 0.06,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: 20,
    },
    Title: {
        fontSize: 30,
        fontFamily: 'Asap-Bold',
        color: 'white',
    },
    ContainerS: {
        flex: 0.06,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
})