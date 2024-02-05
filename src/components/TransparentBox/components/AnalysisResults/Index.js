import { StyleSheet, View, FlatList } from 'react-native'
import React, { Component } from 'react'
import AnalyzesBox from '../../../AnalyzesBox/Index';
const data = [
  {
    id: 1,
    Title: 'FERHAT1',//ilk sayfada secilicek yer
    Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
    FreeOrPremium: [
      {
        id: 1,
        Title: 'FERHAT2',//2. sayfadaki üst slider da gösterilicek başlık
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'FERHAT3',//içeriklerin yazıldıgı en son slider da gösterilicek başlık
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
          },
        ]
      },
      //Diğer buttonlar
      {
        id: 2,
        Title: 'Fırat2',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Fırat3',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
          },
        ]
      },
    ]
  },
  {
    id: 2,
    Title: 'hfhgfdhdfgh',//ilk sayfada secilicek yer
    Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
    FreeOrPremium: [
      {
        id: 1,
        Title: 'uetyruerturty',//2. sayfadaki üst slider da gösterilicek başlık
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'FERHAT3',//içeriklerin yazıldıgı en son slider da gösterilicek başlık
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
          },
        ]
      },
      //Diğer buttonlar
      {
        id: 2,
        Title: 'Fırat2',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Fırat3',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
          },
        ]
      },
    ]
  },
]

export default class Index extends Component {
  handlePress = (itemId) => {
    const { navigation } = this.props;
    console.log("ilk sayfa id si",itemId);
    navigation.navigate('analysisCategoriesPage', { itemId: itemId });
  };

  renderContentItem(item) {
    const { navigation } = this.props;
    return (
      <AnalyzesBox
        borderColor='white'
        color='white'
        tintColor='white'
        source={item.Icon}
        title={item.Title}
        onPress={() => this.handlePress(item.id)}  // item.id'yi onPress fonksiyonuna iletiyoruz
      />
    );
  }

  render() {
    return (
      <View style={styles.ContainerS}>
        <View style={styles.Container}>
          <FlatList
            horizontal
            keyExtractor={item => item.id.toString()}  // keyExtractor'a string bir değer döndürülmeli
            renderItem={({ item }) => this.renderContentItem(item)}
            data={data}
            showsVerticalScrollIndicator={true} />
        </View>
      </View>
    );
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
    justifyContent: 'center',
  },
});
