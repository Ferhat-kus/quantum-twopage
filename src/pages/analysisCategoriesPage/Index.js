import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import React, { Component } from 'react'

//Components 
import Header from '../../components/Header/Index';
import TransparentBox from '../../components/TransparentBox/Index';

export default class Index extends Component {
  render() {
    return (
      <ImageBackground style={styles.Container} source={require('../../assets/global/bg.png')}>
          <Header isFlat={true}/>
          <TransparentBox navigation={this.props.navigation} isFlat={true}/>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
  },
})