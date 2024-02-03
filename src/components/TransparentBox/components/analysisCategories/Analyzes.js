import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, ScrollView, } from 'react-native';
import AnalyzesBox from '../../../AnalyzesBox/Index';


const data = [
  {
    id: 1,
    Title: 'Profil',
    Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
    FreeOrPremium: [
      {
        id: 1,
        Title: 'Genel Bigiler',
        Icon: require('../../../../assets/AnalyzesListIcon/item3.png'),
        descriptionTitle: 'Projektör',
        description: 'Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur. Nisi leo pulvinar ornare sollicitudin ut at arcu at augue. Pulvinar faucibus suspendisse tortor eget condimentum. Dignissim ullamcorper quam dictumst ipsum ullamcorper lacinia turpis. In venenatis nulla donec venenatis ut. Lectus in bibendum sagittis diam vitae mauris ipsum ultrices turpis. Ipsum neque turpis tempus cras nisl purus ullamcorper orci ante. Amet ornare diam morbi nec. Ipsum at eu malesuada ultricies velit sollicitudin. Volutpat sapien pellentesque enim scelerisque facilisi ut elementum donec. Proin ut suspendisse commodo risus duis pretium amet. Cursus morbi pretium neque neque varius odio pellentesque at semper. Cursus enim quisque sociis risus massa mollis. Blandit nunc odio nunc varius. amet consectetur. Nisi leo pulvinar ornare sollicitudin ut at arcu at augue. Pulvinar faucibus suspendisse tortor eget condimentum. Dignissim ullamcorper quam dictumst ipsum ullamcorper lacinia turpis. In venenatis nulla donec venenatis ut. Lectus in bibendum sagittis diam vitae mauris ipsum ultrices turpis. Ipsum neque turpis tempus cras nisl purus ullamcorper orci ante. Amet ornare diam morbi nec. Ipsum at eu malesuada ultricies velit sollicitudin. Volutpat sapien pellentesque enim scelerisque facilisi ut elementum donec. Proin ut suspendisse commodo risus duis pretium amet. Cursus morbi pretium neque neque varius odio pellentesque at semper. Cursus enim quisque sociis risus massa mollis. Blandit nunc odio nunc varius.',
      },
      {
        id: 2,
        Title: 'Dikkat Edilmesi Gerekenler',
        Icon: require('../../../../assets/AnalyzesListIcon/item2.png'),
        descriptionTitle: 'Ferhat',
        description: 'Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur. Nisi leo pulvinar ornare sollicitudin ut at arcu at augue. Pulvinar faucibus suspendisse tortor eget condimentum. Dignissim ullamcorper quam dictumst ipsum ullamcorper lacinia turpis. In venenatis nulla donec venenatis ut. Lectus in bibendum sagittis diam vitae mauris ipsum ultrices turpis. Ipsum neque turpis tempus cras nisl purus ullamcorper orci ante. Amet ornare diam morbi nec. Ipsum at eu malesuada ultricies velit sollicitudin. Volutpat sapien pellentesque enim scelerisque facilisi ut elementum donec. Proin ut suspendisse commodo risus duis pretium amet. Cursus morbi pretium neque neque varius odio pellentesque at semper. Cursus enim quisque sociis risus massa mollis. Blandit nunc odio nunc varius. amet consectetur. Nisi leo pulvinar ornare sollicitudin ut at arcu at augue. Pulvinar faucibus suspendisse tortor eget condimentum. Dignissim ullamcorper quam dictumst ipsum ullamcorper lacinia turpis. In venenatis nulla donec venenatis ut. Lectus in bibendum sagittis diam vitae mauris ipsum ultrices turpis. Ipsum neque turpis tempus cras nisl purus ullamcorper orci ante. Amet ornare diam morbi nec. Ipsum at eu malesuada ultricies velit sollicitudin. Volutpat sapien pellentesque enim scelerisque facilisi ut elementum donec. Proin ut suspendisse commodo risus duis pretium amet. Cursus morbi pretium neque neque varius odio pellentesque at semper. Cursus enim quisque sociis risus massa mollis. Blandit nunc odio nunc varius.',
      
      },
      {
        id: 3,
        Title: 'Sosyal & İş Hayatı',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
        descriptionTitle: 'EFE',
        description: 'Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur. Nisi leo pulvinar ornare sollicitudin ut at arcu at augue. Pulvinar faucibus suspendisse tortor eget condimentum. Dignissim ullamcorper quam dictumst ipsum ullamcorper lacinia turpis. In venenatis nulla donec venenatis ut. Lectus in bibendum sagittis diam vitae mauris ipsum ultrices turpis. Ipsum neque turpis tempus cras nisl purus ullamcorper orci ante. Amet ornare diam morbi nec. Ipsum at eu malesuada ultricies velit sollicitudin. Volutpat sapien pellentesque enim scelerisque facilisi ut elementum donec. Proin ut suspendisse commodo risus duis pretium amet. Cursus morbi pretium neque neque varius odio pellentesque at semper. Cursus enim quisque sociis risus massa mollis. Blandit nunc odio nunc varius. amet consectetur. Nisi leo pulvinar ornare sollicitudin ut at arcu at augue. Pulvinar faucibus suspendisse tortor eget condimentum. Dignissim ullamcorper quam dictumst ipsum ullamcorper lacinia turpis. In venenatis nulla donec venenatis ut. Lectus in bibendum sagittis diam vitae mauris ipsum ultrices turpis. Ipsum neque turpis tempus cras nisl purus ullamcorper orci ante. Amet ornare diam morbi nec. Ipsum at eu malesuada ultricies velit sollicitudin. Volutpat sapien pellentesque enim scelerisque facilisi ut elementum donec. Proin ut suspendisse commodo risus duis pretium amet. Cursus morbi pretium neque neque varius odio pellentesque at semper. Cursus enim quisque sociis risus massa mollis. Blandit nunc odio nunc varius.',
      
      },
      {
        id: 4,
        Title: 'İlişkiler',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
        descriptionTitle: 'AHMET',
        description: 'Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur. Nisi leo pulvinar ornare sollicitudin ut at arcu at augue. Pulvinar faucibus suspendisse tortor eget condimentum. Dignissim ullamcorper quam dictumst ipsum ullamcorper lacinia turpis. In venenatis nulla donec venenatis ut. Lectus in bibendum sagittis diam vitae mauris ipsum ultrices turpis. Ipsum neque turpis tempus cras nisl purus ullamcorper orci ante. Amet ornare diam morbi nec. Ipsum at eu malesuada ultricies velit sollicitudin. Volutpat sapien pellentesque enim scelerisque facilisi ut elementum donec. Proin ut suspendisse commodo risus duis pretium amet. Cursus morbi pretium neque neque varius odio pellentesque at semper. Cursus enim quisque sociis risus massa mollis. Blandit nunc odio nunc varius. amet consectetur. Nisi leo pulvinar ornare sollicitudin ut at arcu at augue. Pulvinar faucibus suspendisse tortor eget condimentum. Dignissim ullamcorper quam dictumst ipsum ullamcorper lacinia turpis. In venenatis nulla donec venenatis ut. Lectus in bibendum sagittis diam vitae mauris ipsum ultrices turpis. Ipsum neque turpis tempus cras nisl purus ullamcorper orci ante. Amet ornare diam morbi nec. Ipsum at eu malesuada ultricies velit sollicitudin. Volutpat sapien pellentesque enim scelerisque facilisi ut elementum donec. Proin ut suspendisse commodo risus duis pretium amet. Cursus morbi pretium neque neque varius odio pellentesque at semper. Cursus enim quisque sociis risus massa mollis. Blandit nunc odio nunc varius.',
      
      },
    ]
  },
  {
    id: 2,
    Title: 'Tip',
    Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
    FreeOrPremium: [
      {
        id: 1,
        Title: 'Genel Bigiler',
        descriptionTitle: 'AHMET',
        description: 'Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur. Nisi leo pulvinar ornare sollicitudin ut at arcu at augue. Pulvinar faucibus suspendisse tortor eget condimentum. Dignissim ullamcorper quam dictumst ipsum ullamcorper lacinia turpis. In venenatis nulla donec venenatis ut. Lectus in bibendum sagittis diam vitae mauris ipsum ultrices turpis. Ipsum neque turpis tempus cras nisl purus ullamcorper orci ante. Amet ornare diam morbi nec. Ipsum at eu malesuada ultricies velit sollicitudin. Volutpat sapien pellentesque enim scelerisque facilisi ut elementum donec. Proin ut suspendisse commodo risus duis pretium amet. Cursus morbi pretium neque neque varius odio pellentesque at semper. Cursus enim quisque sociis risus massa mollis. Blandit nunc odio nunc varius. amet consectetur. Nisi leo pulvinar ornare sollicitudin ut at arcu at augue. Pulvinar faucibus suspendisse tortor eget condimentum. Dignissim ullamcorper quam dictumst ipsum ullamcorper lacinia turpis. In venenatis nulla donec venenatis ut. Lectus in bibendum sagittis diam vitae mauris ipsum ultrices turpis. Ipsum neque turpis tempus cras nisl purus ullamcorper orci ante. Amet ornare diam morbi nec. Ipsum at eu malesuada ultricies velit sollicitudin. Volutpat sapien pellentesque enim scelerisque facilisi ut elementum donec. Proin ut suspendisse commodo risus duis pretium amet. Cursus morbi pretium neque neque varius odio pellentesque at semper. Cursus enim quisque sociis risus massa mollis. Blandit nunc odio nunc varius.',
      
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

      },
      {
        id: 2,
        Title: 'Dikkat Edilmesi Gerekenler',
        descriptionTitle: 'AHMET',
        description: 'Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur. Nisi leo pulvinar ornare sollicitudin ut at arcu at augue. Pulvinar faucibus suspendisse tortor eget condimentum. Dignissim ullamcorper quam dictumst ipsum ullamcorper lacinia turpis. In venenatis nulla donec venenatis ut. Lectus in bibendum sagittis diam vitae mauris ipsum ultrices turpis. Ipsum neque turpis tempus cras nisl purus ullamcorper orci ante. Amet ornare diam morbi nec. Ipsum at eu malesuada ultricies velit sollicitudin. Volutpat sapien pellentesque enim scelerisque facilisi ut elementum donec. Proin ut suspendisse commodo risus duis pretium amet. Cursus morbi pretium neque neque varius odio pellentesque at semper. Cursus enim quisque sociis risus massa mollis. Blandit nunc odio nunc varius. amet consectetur. Nisi leo pulvinar ornare sollicitudin ut at arcu at augue. Pulvinar faucibus suspendisse tortor eget condimentum. Dignissim ullamcorper quam dictumst ipsum ullamcorper lacinia turpis. In venenatis nulla donec venenatis ut. Lectus in bibendum sagittis diam vitae mauris ipsum ultrices turpis. Ipsum neque turpis tempus cras nisl purus ullamcorper orci ante. Amet ornare diam morbi nec. Ipsum at eu malesuada ultricies velit sollicitudin. Volutpat sapien pellentesque enim scelerisque facilisi ut elementum donec. Proin ut suspendisse commodo risus duis pretium amet. Cursus morbi pretium neque neque varius odio pellentesque at semper. Cursus enim quisque sociis risus massa mollis. Blandit nunc odio nunc varius.',
      
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

      },
      {
        id: 3,
        Title: 'İlişkiler',
        descriptionTitle: 'dfsddgf',
        description: 'Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur. Nisi leo pulvinar ornare sollicitudin ut at arcu at augue. Pulvinar faucibus suspendisse tortor eget condimentum. Dignissim ullamcorper quam dictumst ipsum ullamcorper lacinia turpis. In venenatis nulla donec venenatis ut. Lectus in bibendum sagittis diam vitae mauris ipsum ultrices turpis. Ipsum neque turpis tempus cras nisl purus ullamcorper orci ante. Amet ornare diam morbi nec. Ipsum at eu malesuada ultricies velit sollicitudin. Volutpat sapien pellentesque enim scelerisque facilisi ut elementum donec. Proin ut suspendisse commodo risus duis pretium amet. Cursus morbi pretium neque neque varius odio pellentesque at semper. Cursus enim quisque sociis risus massa mollis. Blandit nunc odio nunc varius. amet consectetur. Nisi leo pulvinar ornare sollicitudin ut at arcu at augue. Pulvinar faucibus suspendisse tortor eget condimentum. Dignissim ullamcorper quam dictumst ipsum ullamcorper lacinia turpis. In venenatis nulla donec venenatis ut. Lectus in bibendum sagittis diam vitae mauris ipsum ultrices turpis. Ipsum neque turpis tempus cras nisl purus ullamcorper orci ante. Amet ornare diam morbi nec. Ipsum at eu malesuada ultricies velit sollicitudin. Volutpat sapien pellentesque enim scelerisque facilisi ut elementum donec. Proin ut suspendisse commodo risus duis pretium amet. Cursus morbi pretium neque neque varius odio pellentesque at semper. Cursus enim quisque sociis risus massa mollis. Blandit nunc odio nunc varius.',
      
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
      },
      {
        id: 4,
        Title: 'Çocuk',
        descriptionTitle: 'EFE',
        description: 'Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur. Nisi leo pulvinar ornare sollicitudin ut at arcu at augue. Pulvinar faucibus suspendisse tortor eget condimentum. Dignissim ullamcorper quam dictumst ipsum ullamcorper lacinia turpis. In venenatis nulla donec venenatis ut. Lectus in bibendum sagittis diam vitae mauris ipsum ultrices turpis. Ipsum neque turpis tempus cras nisl purus ullamcorper orci ante. Amet ornare diam morbi nec. Ipsum at eu malesuada ultricies velit sollicitudin. Volutpat sapien pellentesque enim scelerisque facilisi ut elementum donec. Proin ut suspendisse commodo risus duis pretium amet. Cursus morbi pretium neque neque varius odio pellentesque at semper. Cursus enim quisque sociis risus massa mollis. Blandit nunc odio nunc varius. amet consectetur. Nisi leo pulvinar ornare sollicitudin ut at arcu at augue. Pulvinar faucibus suspendisse tortor eget condimentum. Dignissim ullamcorper quam dictumst ipsum ullamcorper lacinia turpis. In venenatis nulla donec venenatis ut. Lectus in bibendum sagittis diam vitae mauris ipsum ultrices turpis. Ipsum neque turpis tempus cras nisl purus ullamcorper orci ante. Amet ornare diam morbi nec. Ipsum at eu malesuada ultricies velit sollicitudin. Volutpat sapien pellentesque enim scelerisque facilisi ut elementum donec. Proin ut suspendisse commodo risus duis pretium amet. Cursus morbi pretium neque neque varius odio pellentesque at semper. Cursus enim quisque sociis risus massa mollis. Blandit nunc odio nunc varius.',
      
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
      },
      {
        id: 5,
        Title: 'Sağlık',
        descriptionTitle: 'fgdaggsggggsdg',
        description: 'Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur. Nisi leo pulvinar ornare sollicitudin ut at arcu at augue. Pulvinar faucibus suspendisse tortor eget condimentum. Dignissim ullamcorper quam dictumst ipsum ullamcorper lacinia turpis. In venenatis nulla donec venenatis ut. Lectus in bibendum sagittis diam vitae mauris ipsum ultrices turpis. Ipsum neque turpis tempus cras nisl purus ullamcorper orci ante. Amet ornare diam morbi nec. Ipsum at eu malesuada ultricies velit sollicitudin. Volutpat sapien pellentesque enim scelerisque facilisi ut elementum donec. Proin ut suspendisse commodo risus duis pretium amet. Cursus morbi pretium neque neque varius odio pellentesque at semper. Cursus enim quisque sociis risus massa mollis. Blandit nunc odio nunc varius. amet consectetur. Nisi leo pulvinar ornare sollicitudin ut at arcu at augue. Pulvinar faucibus suspendisse tortor eget condimentum. Dignissim ullamcorper quam dictumst ipsum ullamcorper lacinia turpis. In venenatis nulla donec venenatis ut. Lectus in bibendum sagittis diam vitae mauris ipsum ultrices turpis. Ipsum neque turpis tempus cras nisl purus ullamcorper orci ante. Amet ornare diam morbi nec. Ipsum at eu malesuada ultricies velit sollicitudin. Volutpat sapien pellentesque enim scelerisque facilisi ut elementum donec. Proin ut suspendisse commodo risus duis pretium amet. Cursus morbi pretium neque neque varius odio pellentesque at semper. Cursus enim quisque sociis risus massa mollis. Blandit nunc odio nunc varius.',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
      },
    ]
  },
  {
    id: 3,
    Title: 'Otorite',
    Icon: require('../../../assets/AnalyzesListIcon/item1.png'),
    FreeOrPremium: [
      {
        id: 1,
        Title: 'Güçlü Yönler',
        Icon: require('../../../assets/AnalyzesListIcon/item1.png'),
      },
      {
        id: 2,
        Title: 'Dikkat Edilmesi Gerekenler',
        Icon: require('../../../assets/AnalyzesListIcon/item1.png'),
      },
    ]
  },
  {
    id: 4,
    Title: 'Strateji',
    Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
    FreeOrPremium: [
      {
        id: 1,
        Title: 'Güçlü Yönler',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
      },
      {
        id: 2,
        Title: 'Dikkat Edilmesi Gerekenler',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
      },
    ]
  },
  {
    id: 5,
    Title: 'Merkez',
    Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
    FreeOrPremium: [
      {
        id: 1,
        Title: 'Tepe',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 3,
            Title: 'Karar Alma',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ],
      },
      {
        id: 2,
        Title: 'Zihin',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 3,
            Title: 'Karar Alma',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ],
      },
      {
        id: 3,
        Title: 'İfade',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 3,
            Title: 'Karar Alma',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ],
      },
      {
        id: 4,
        Title: 'Benlik',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 3,
            Title: 'Karar Alma',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ],
      },
      {
        id: 5,
        Title: 'İrade',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 3,
            Title: 'Karar Alma',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ],
      },
      {
        id: 6,
        Title: 'Duygu',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 3,
            Title: 'Karar Alma',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ],
      },
      {
        id: 7,
        Title: 'Sakral',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 3,
            Title: 'Karar Alma',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ],
      },
      {
        id: 8,
        Title: 'Dalak',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 3,
            Title: 'Karar Alma',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ],
      },
      {
        id: 9,
        Title: 'Kök',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 3,
            Title: 'Karar Alma',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ],
      },
    ]
  },
  {
    id: 6,
    Title: 'Kanallar',
    Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),
    FreeOrPremium: [
      {
        id: 1,
        Title: 'Kendini Bilme',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 2,
        Title: 'Anlama',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 3,
        Title: 'Savunma',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 4,
        Title: 'Bütünleştirme',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 5,
        Title: 'Merkezlenme',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 6,
        Title: 'İrade',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 7,
        Title: 'Hissetme',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
    ]
  },
  {
    id: 7,
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
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 2,
        Title: 'Zihin',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 3,
        Title: 'İfade',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 4,
        Title: 'Benlik',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 5,
        Title: 'İrade',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 6,
        Title: 'Duygu',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 7,
        Title: 'Sakral',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 8,
        Title: 'Dalak',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
      {
        id: 9,
        Title: 'Kök',
        Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

        AnalyzesDescriptions: [
          {
            id: 1,
            Title: 'Güçlü Yönler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
          {
            id: 2,
            Title: 'Dikkat Edilmesi Gerekenler',
            Icon: require('../../../../assets/AnalyzesListIcon/item1.png'),

          },
        ]
      },
    ]
  },
]
export default class Analyzes extends Component {
  state = {
    selectedBox: data[0],
    selectedBoxTitle: 1,
  };

  renderContentItem(item) {
    return (
      <AnalyzesBox
        borderColor={this.state.selectedBox.id === item.id ? '#AD00FF' : 'white'} // Update border color for selected box
        color={this.state.selectedBox.id === item.id ? '#AD00FF' : 'white'}
        tintColor={this.state.selectedBox.id === item.id ? '#AD00FF' : 'white'}
        source={item.Icon}
        title={item.Title}
        onPress={() => {
          console.log("Box id:", item.id);
          this.setState({ selectedBox: item }); // Seçili kutu değiştiğinde başlık id'sini sıfırla
        }}
      />
    );
  }
  renderAnalysisTitles(item, selectedBoxTitle) {
    return (
      <View style={styles.boxContainer}>
        {item.FreeOrPremium.map((boxItem) => (
          <AnalyzesBox
            key={boxItem.id.toString()}
            borderColor={this.state.selectedBoxTitle === boxItem.id ? '#AD00FF' : 'white'}
            color={this.state.selectedBoxTitle === boxItem.id ? '#AD00FF' : 'white'}
            tintColor={this.state.selectedBoxTitle === boxItem.id ? '#AD00FF' : 'white'}
            source={boxItem.Icon}
            title={boxItem.Title}
            onPress={() => {
              console.log("Title id:", boxItem.id);
              this.setState({ selectedBoxTitle: boxItem.id });
            }}
          />
        ))}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.ContainerS}>
        <View style={styles.Container}>
          <FlatList
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => this.renderContentItem(item)}
            data={data}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.Container}>
          <FlatList
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => this.renderAnalysisTitles(this.state.selectedBox, this.state.selectedBoxTitle)}
            data={this.state.selectedBox.FreeOrPremium}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ width: '100%', height: 2, backgroundColor: 'white', marginBottom: 10, }} />
        <View style={{ width: '100%', flex: 1,}}>
          <Text style={styles.Title}>{this.state.selectedBox.FreeOrPremium.find(item => item.id === this.state.selectedBoxTitle)?.Title}</Text>
          <ScrollView>
          <Text style={styles.description}>{this.state.selectedBox.FreeOrPremium.find(item => item.id === this.state.selectedBoxTitle)?.description}</Text>
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
