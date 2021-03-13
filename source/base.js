import React, { useState,useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  BackHandler,
  Alert
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const charwidth = Dimensions.get('window').width
const charheight = Dimensions.get('window').height


const SelectSubj = () =>{
    const navigation = useNavigation()

    useEffect(() => {
      const backAction = () => {
        Alert.alert("잠시만요!", "다음에 배우실 건가요?", [
          {
            text: "아니요! 조금 더 배울래요!",
            onPress: () => null,
            style: "cancel"
          },
          { text: "네, 다음에 올게요!", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
  
      return () => backHandler.remove();
    }, []);



    return(
        <View>
            <Text>선택화면</Text>
        </View>
    )
}

export default SelectSubj