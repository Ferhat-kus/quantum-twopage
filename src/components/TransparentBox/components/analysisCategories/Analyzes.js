import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, ScrollView, } from 'react-native';
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
]
export default class Analyzes extends Component {
  state = {
    selectedBox: data[0].FreeOrPremium[0],
    selectedBoxData: data[0].FreeOrPremium[0].AnalyzesDescriptions,
    selectedBoxTitle: 1,
  };

  renderContentItem(item) {
    const { selectedBox } = this.state;
    return (
      <AnalyzesBox
        borderColor={selectedBox.id === item.id ? '#AD00FF' : 'white'} // Update border color for selected box
        color={selectedBox.id === item.id ? '#AD00FF' : 'white'}
        tintColor={selectedBox.id === item.id ? '#AD00FF' : 'white'}
        source={item.Icon}
        title={item.Title}
        onPress={() => {
          console.log("Box id:", item.id);
          this.setState({ selectedBox: item }); // Seçili kutu değiştiğinde başlık id'sini sıfırla
        }}
      />
    );
  }
  renderAnalysisTitles(item) {
    const { selectedBoxTitle } = this.state;
    return (
      <View style={styles.boxContainer}>
        {item.AnalyzesDescriptions.map((boxItem) => (
          <AnalyzesBox
            key={boxItem.id.toString()}
            borderColor={selectedBoxTitle === boxItem.id ? '#AD00FF' : 'white'}
            color={selectedBoxTitle === boxItem.id ? '#AD00FF' : 'white'}
            tintColor={selectedBoxTitle === boxItem.id ? '#AD00FF' : 'white'}
            source={boxItem.Icon}
            title={boxItem.Title}
            onPress={() => { this.setState({ selectedBoxTitle: boxItem.id }); }}
          />
        ))}
      </View>
    );
  }

  render() {
    const { selectedBoxData, selectedBox, selectedBoxTitle } = this.state;
    return (
      <View style={styles.ContainerS}>
        <View style={styles.Container}>
          <FlatList
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => this.renderContentItem(item)}
            data={data[0].FreeOrPremium}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.Container}>
          <FlatList
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => this.renderAnalysisTitles(selectedBox)}
            data={selectedBoxData}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.line} />
        <View style={{ width: '100%', flex: 1, }}>
          <Text style={styles.Title}>{selectedBox.AnalyzesDescriptions.find(item => item.id === selectedBoxTitle)?.Title}</Text>
          <ScrollView>
            <Text style={styles.description}>{selectedBox.AnalyzesDescriptions.find(item => item.id === selectedBoxTitle)?.description}</Text>
          </ScrollView>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  ContainerS: {
    width: '100%',
    flex: 1,
  },
  Container: {
    width: '100%',
  },
  boxContainer: {
    flexDirection: 'row',
  },
  line:{ 
    width: '100%', 
    height: 2, 
    backgroundColor: 'white', 
    marginBottom: 10, 
},
  Title: {
    fontFamily: 'Roboto-Black',
    fontSize: 20,
    color: 'white',
    marginVertical: 10,
  },
  description: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: 'white',
    marginVertical: 10,
  }
});
