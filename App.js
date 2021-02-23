import { InterstitialAd, RewardedAd, BannerAdSize, BannerAd, TestIds } from '@react-native-firebase/admob';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import Banner from './source/banner'


const charwidth = Dimensions.get('window').width
const charheight = Dimensions.get('window').height

const codeimg = require('./img/code.png')


const App = () => {
  return (
    <View>
      <LinearGradient colors={['#FFB484', '#ffbf80', '#ffd9b3']} style={{ width: charwidth, height: charheight }}>
        <View>
          <Image source={codeimg} style={{position:'absolute',maxWidth:300,maxHeight:300,marginTop:200}}></Image>
          <View style={{ justifyContent: 'center', alignItems: 'center', height: charheight }}>
            <Text style={{ fontSize: 70, textAlign: 'center', marginRight: 50,color:'white' }}>C & sCript</Text>
            <Text style={{ fontSize: 50, textAlign: 'center', marginLeft: 100,color:'white' }}>aCademy</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

export default App;
