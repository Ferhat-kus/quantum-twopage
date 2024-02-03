import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

import GoBack from '../../components/GoBack/Index';
import Analyzes from './components/analysisCategories/Analyzes';
export default class Index extends Component {
  render() {
    const { isFlat } = this.props;
    if (!isFlat) {
      return (
        <View style={styles.Container}>
          <Image style={{ width: '85%', flex: 1, }} source={require('../../assets/chakras.png')} />
        </View>
      )
    } else if (isFlat) {
      return (
        <View style={styles.ContainerS}>
          <View style={styles.BoxHeader}>
            <Text style={styles.Title}>Kategoriler</Text>
            <GoBack onPress={()=>this.props.navigation.goBack()} isFlat={true} />
          </View>
          <Analyzes navigation={this.props.navigation}/>
        </View>
      )
    }
  }
}


const styles = StyleSheet.create({
  Container: {
    flex: 0.4,
    width: '90%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(210,224,231,0.3)',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'white',
  },
  ContainerS: {
    flex: 0.75,
    width: '90%',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(210,224,231,0.3)',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'white',
    paddingHorizontal: 20,
    paddingBottom:10,
  },
  BoxHeader: {
    // backgroundColor: 'red',
    width: '71%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  Title: {
    fontSize: 30,
    fontFamily: 'Asap-Bold',
    color: 'white',
  },
 
})