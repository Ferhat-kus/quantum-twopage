import { StyleSheet, View, FlatList } from 'react-native'
import React, { Component } from 'react'

import AnalyzesBox from '../../../AnalyzesBox/Index';
const data = [
  {
    id: 1,
    Title: 'FERHAT1',
    Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
    FreeOrPremium: [
      {
        id: 1,
        Title: 'FERHAT2',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'FERHAT3',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
          },
          {
            id: 2,
            Title: 'Fırat',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
          },
        ]
      },
      {
        id: 2,
        Title: 'Fırat',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'FERHAT3',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
          },
          {
            id: 2,
            Title: 'Fırat',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
          },
        ]
      },
    ]
  },
]

export default class Index extends Component {
  renderContentItem(item) {
    return (
      <AnalyzesBox
        borderColor='white'
        color='white'
        tintColor='white'
        source={item.Icon}
        title={item.Title}
        onPress={() => { this.props.navigation.navigate('analysisCategoriesPage', { itemId: item.id }); }}
      />
    );
  }

  render() {
    return (
      <View style={styles.ContainerS}>
        <View style={styles.Container}>
          <FlatList
            horizontal
            keyExtractor={item => item.id}
            renderItem={({ item }) => this.renderContentItem(item)}
            data={data}
            showsVerticalScrollIndicator={true} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ContainerS: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 0.3,
  },
  Container: {
    flex: 0.4,
    width: '95%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
