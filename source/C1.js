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
  Alert,
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const charwidth = Dimensions.get('window').width
const charheight = Dimensions.get('window').height

const smallLaugh = require('../img/face/smallLaugh.jpg')
const chat = require('../img/chat.png')

const C1 = () =>{
    const navigation = useNavigation()

    useEffect(() => {
      const backAction = () => {
        Alert.alert("잠시만요!", "목차로 나가실 건가요?", [
          {
            text: "아니요! 조금 더 배울래요!",
            onPress: () => null,
            style: "cancel"
          },
          { text: "네!", onPress: () => navigation.navigate('c언어선택') }
        ]);
        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
  
      return () => backHandler.remove();
    }, []);

    const [onclick,setOnclick] = useState(0)

    return(
        <SafeAreaView style={{backgroundColor:'white',}}>
            <TouchableWithoutFeedback onPress={()=>{setOnclick(onclick+1)}}>
            <View style={{width:charwidth,height:charheight}}>
                <View style={{flex:4.5}}>
                    {onclick == 0 && 
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:25,color:'gray',margin:10,lineHeight:30}}>화면을 터치해주세요.</Text>
                        <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:25,color:'gray',lineHeight:30}}>터치할 때마다 학습이 진행됩니다.</Text>
                    </View>
                    }
                    
                </View>
                <View style={{flex:3}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <ImageBackground source={chat} style={{width:150,height:150,marginBottom:-30,marginLeft:10}}></ImageBackground>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image source={smallLaugh} style={{height:150,width:150,marginLeft:60}}></Image>
                        
                    </View>
                </View>
            </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default C1