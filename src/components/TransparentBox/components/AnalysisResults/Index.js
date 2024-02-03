import { StyleSheet, View, FlatList, DeviceEventEmitter } from 'react-native'
import React, { Component } from 'react'

import AnalyzesBox from '../../../AnalyzesBox/Index';
const data = [
  {
    id: 1,
    Title: 'Profil',
    Icon:require('../../assets/AnalyzesListIcon/item1.png'),
    FreeOrPremium: [
      {
        id: 1,
        Title: 'Genel Bigiler',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),
      },
      {
        id: 2,
        Title: 'Dikkat Edilmesi Gerekenler',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),
      },
      {
        id: 3,
        Title: 'Sosyal & İş Hayatı',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),
      },
      {
        id: 4,
        Title: 'İlişkiler',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),
      },
    ]
  },
  {
    id: 2,
    Title: 'Tip',
    Icon:require('../../assets/AnalyzesListIcon/item1.png'),
    FreeOrPremium: [
      {
        id: 1,
        Title: 'Genel Bigiler',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

      },
      {
        id: 2,
        Title: 'Dikkat Edilmesi Gerekenler',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

      },
      {
        id: 3,
        Title: 'İlişkiler',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),
      },
      {
        id: 4,
        Title: 'Çocuk',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),
      },
      {
        id: 5,
        Title: 'Sağlık',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),
      },
    ]
  },
  {
    id: 3,
    Title: 'Otorite',
    Icon:require('../../assets/AnalyzesListIcon/item1.png'),
    FreeOrPremium: [
      {
        id: 1,
        Title: 'Güçlü Yönler',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),
      },
      {
        id: 2,
        Title: 'Dikkat Edilmesi Gerekenler',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),
      },
    ]
  },
  {
    id: 4,
    Title: 'Strateji',
    Icon:require('../../assets/AnalyzesListIcon/item1.png'),
    FreeOrPremium: [
      {
        id: 1,
        Title: 'Güçlü Yönler',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),
      },
      {
        id: 2,
        Title: 'Dikkat Edilmesi Gerekenler',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),
      },
    ]
  },
  {
    id: 5,
    Title: 'Merkez',
    Icon:require('../../assets/AnalyzesListIcon/item1.png'),
    FreeOrPremium: [
      {
        id: 1,
        Title: 'Tepe',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),
        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 3,
            Title: 'Karar Alma',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ],
      },
      {
        id: 2,
        Title: 'Zihin',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 3,
            Title: 'Karar Alma',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ],
      },
      {
        id: 3,
        Title: 'İfade',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 3,
            Title: 'Karar Alma',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ],
      },
      {
        id: 4,
        Title: 'Benlik',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 3,
            Title: 'Karar Alma',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ],
      },
      {
        id: 5,
        Title: 'İrade',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 3,
            Title: 'Karar Alma',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ],
      },
      {
        id: 6,
        Title: 'Duygu',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 3,
            Title: 'Karar Alma',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ],
      },
      {
        id: 7,
        Title: 'Sakral',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 3,
            Title: 'Karar Alma',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ],
      },
      {
        id: 8,
        Title: 'Dalak',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 3,
            Title: 'Karar Alma',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ],
      },
      {
        id: 9,
        Title: 'Kök',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 3,
            Title: 'Karar Alma',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ],
      },
    ]
  },
  {
    id: 6,
    Title: 'Kanallar',
    Icon:require('../../assets/AnalyzesListIcon/item1.png'),
    FreeOrPremium: [
      {
        id: 1,
        Title: 'Kendini Bilme',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 2,
        Title: 'Anlama',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 3,
        Title: 'Savunma',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 4,
        Title: 'Bütünleştirme',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 5,
        Title: 'Merkezlenme',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 6,
        Title: 'İrade',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 7,
        Title: 'Hissetme',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
    ]
  },
  {
    id: 7,
    Title: 'Kapılar',
    Icon:require('../../assets/AnalyzesListIcon/item1.png'),
    FreeOrPremium: [
      {
        id: 1,
        Title: 'Tepe',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 2,
        Title: 'Zihin',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 3,
        Title: 'İfade',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 4,
        Title: 'Benlik',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 5,
        Title: 'İrade',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 6,
        Title: 'Duygu',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 7,
        Title: 'Sakral',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 8,
        Title: 'Dalak',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 9,
        Title: 'Kök',
        Icon:require('../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon:require('../../assets/AnalyzesListIcon/item1.png'),

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
        onPress={() => {
          this.props.navigation.navigate('analysisCategoriesPage', { itemId: item.id });
          console.log(`Pressed on AnalyzesBox with id: ${item.id}`);
          DeviceEventEmitter.emit('itemPressed', { itemId: item.id });

        }}
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
            showsVerticalScrollIndicator={false} />
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
