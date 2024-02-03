import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Index extends Component {
    render() {
        const { borderColor, color, tintColor } = this.props;
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.ContentItemContainer}>
                <View style={[styles.ContentItem, { borderColor: borderColor }]}>
                    <Image style={{ marginRight: 10, tintColor: tintColor, }} source={this.props.source} />
                    <View style={{width:'50%',}}>
                        <Text style={[styles.ContentItemText, { color: color, }]}>{this.props.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    ContentItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 110,
        height: 80,
        marginBottom: 10,
        marginRight: 10,
        opacity: 0.8,
    },
    ContentItem: {
        flex: 1,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    ContentItemText: {
        fontSize: 13,
        fontFamily: 'Asap-SemiBold',
    },
})
