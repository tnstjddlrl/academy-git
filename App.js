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

const App = ()=>{
  return(
    <View>
      <Text>안녕</Text>
      <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,}}  />
    </View>
  )
}

export default App;
