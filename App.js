import { InterstitialAd, RewardedAd,BannerAdSize, BannerAd, TestIds } from '@react-native-firebase/admob';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Banner from './banner'

const App = ()=>{
  return(
    <View>
      <Banner></Banner>
      <Text>안녕</Text>
    </View>
  )
}

export default App;
