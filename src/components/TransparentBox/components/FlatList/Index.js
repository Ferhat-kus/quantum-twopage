import { FlatList, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Index extends Component {
    render() {
        const { keyExtractor, renderItem, data } = this.props
        return (
            <View style={styles.Container}>
                <FlatList
                    horizontal
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                    data={data}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})