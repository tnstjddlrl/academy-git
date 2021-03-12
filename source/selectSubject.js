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

  
const charwidth = Dimensions.get('window').width
const charheight = Dimensions.get('window').height

const selectSubject = require('../img/selectSubject.png')

const SelectSubj = () =>{
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
        <View style={{width:charwidth,height:charheight}}>
        <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
          <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:45}}>원하는 언어를</Text>
          <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:45}}>선택하세요!</Text>
        </View>
        <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
          <Image source={selectSubject} style={{maxWidth:charwidth-20,maxHeight:charheight/2.2}}></Image>
        </View>

        <View style={{flex:2,alignItems:'center',justifyContent:'flex-start'}}>
            <View style={{width:charwidth-40,height:60,backgroundColor:'#CBBCE7',justifyContent:'center',alignItems:'center',borderRadius:20}}>
                <Text style={{fontFamily:'DoHyeon',fontSize:30}}>C언어</Text>
                <Text style={{fontFamily:'DoHyeon',fontSize:20,color:'#888'}}>-지금 수강가능!-</Text>
            </View>

            <View style={{width:charwidth-40,height:60,backgroundColor:'#A083D3',justifyContent:'center',alignItems:'center',borderRadius:20,marginTop:10}}>
                <Text style={{fontFamily:'DoHyeon',fontSize:30}}>자바스크립트</Text>
                <Text style={{fontFamily:'DoHyeon',fontSize:20,color:'#888'}}>-오픈예정!-</Text>
            </View>

            <View style={{width:charwidth-40,height:60,backgroundColor:'#7E57C2',justifyContent:'center',alignItems:'center',borderRadius:20,marginTop:10}}>
                <Text style={{fontFamily:'DoHyeon',fontSize:30}}>파이썬</Text>
                <Text style={{fontFamily:'DoHyeon',fontSize:20,color:'#888'}}>-오픈예정!-</Text>
            </View>

        </View>
      </View>
    )
}

export default SelectSubj