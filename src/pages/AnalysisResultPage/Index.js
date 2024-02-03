import { StyleSheet, ImageBackground } from 'react-native'
import React, { Component } from 'react'
//Components
import Header from '../../components/Header/Index';
import GoBack from '../../components/GoBack/Index';
import TransparentBox from '../../components/TransparentBox/Index';
import Analyzes from '../../components/TransparentBox/components/AnalysisResults/Index';

export default class Index extends Component {
  render() {
    return (
      <ImageBackground style={styles.Container}  source={require('../../assets/global/bg.png')}>
        <Header />
        <GoBack title='Analiz Sonucu'/>
        <TransparentBox />
        <Analyzes navigation={this.props.navigation}/>
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