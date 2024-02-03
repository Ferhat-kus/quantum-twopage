import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Router from './src/router/Index';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1,}}>
        <Router />
      </View>
    )
  }
}

const styles = StyleSheet.create({})