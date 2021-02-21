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

 const mybannerid = 'ca-app-pub-8664195159890176/8498097032'

const App = ()=>{
  return(
    <View>
      <Text>안녕</Text>
      <BannerAd unitId={mybannerid} size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,}}  />
    </View>
  )
}

export default App;
