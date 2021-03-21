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
import { InterstitialAd, RewardedAd,BannerAdSize, BannerAd, TestIds } from '@react-native-firebase/admob';

const charwidth = Dimensions.get('window').width
const charheight = Dimensions.get('window').height

const smallLaugh = require('../img/face/smallLaugh.jpg')
const enbiChat = require('../img/enbiChat.png')
const backbtn = require('../img/backbtn.png')
const backbtn3 = require('../img/backbtn3.png')

const cscript1 = require('../img/script/cscript1.png')

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
          <BannerAd unitId={'ca-app-pub-8664195159890176/8498097032'} size={BannerAdSize.FULL_BANNER}
                  requestOptions={{
                    requestNonPersonalizedAdsOnly: true,}}  />
            <TouchableWithoutFeedback onPress={()=>{setOnclick(onclick+1)}}>
            <View style={{width:charwidth,height:charheight}}>
                <View style={{flex:3.2}}>

                
                

                    {onclick == 0 && 
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:25,color:'gray',margin:10,lineHeight:30}}>화면을 터치해주세요.</Text>
                        <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:25,color:'gray',lineHeight:30}}>터치할 때마다 학습이 진행됩니다.</Text>
                    </View>
                    }

                    {(onclick == 4 || onclick == 5) && 
                    <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                        <Image source={cscript1} style={{width:370,height:140}}></Image>
                    </View>
                    }

                    
                

                    
                </View>
                <View style={{flex:3}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <ImageBackground source={enbiChat} style={{width:230,height:170,marginBottom:-20,marginLeft:10}}>
                          {onclick == 1 &&
                            <View>
                              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:40,marginTop:30}}>안녕하세요!</Text>
                            </View>
                          }

                          {onclick == 2 &&
                            <View>
                              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:20,marginTop:30,marginLeft:15,marginRight:15}}>제가 C언어를 담당하게 되었네요! 여러분과 만날 수 있어 영광입니다!</Text>
                            </View>
                          }

                          {onclick == 3 &&
                            <View>
                              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:20,marginTop:30,marginLeft:15,marginRight:15}}>그럼 바로 시작하겠습니다. 차근차근 천천히 가봅시다.</Text>
                            </View>
                          }

                          {onclick == 4 &&
                            <View>
                              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:20,marginTop:30,marginLeft:15,marginRight:15}}>위의 코드를 봐주세요.</Text>
                            </View>
                          }

                          {onclick == 5 &&
                            <View>
                              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:20,marginTop:30,marginLeft:15,marginRight:15}}>이 코드는 C언어의 기초 printf를 잘 나타냄과 동시에 기본이 되는 코드입니다.</Text>
                            </View>
                          }

                        </ImageBackground>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image source={smallLaugh} style={{height:150,width:150,marginLeft:150,marginTop:-20}}></Image>
                        
                    </View>
                </View>
            </View>
            </TouchableWithoutFeedback>
            
              <TouchableWithoutFeedback onPress={()=>setOnclick(onclick+1)}>
                <Image source={backbtn} style={{position:'absolute',right:10,bottom:100,width:30,height:30}}></Image>
              </TouchableWithoutFeedback>

            {
              onclick != 0 &&
              
              <TouchableWithoutFeedback onPress={()=>setOnclick(onclick-1)}>
                <Image source={backbtn3} style={{position:'absolute',left:10,bottom:100,width:30,height:30}}></Image>
              </TouchableWithoutFeedback>

            }
            
        </SafeAreaView>
    )
}

export default C1