import { useNavigation } from '@react-navigation/core';
import React,{useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Image,
    TouchableWithoutFeedback,
    BackHandler,
    Alert
  } from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';
  
  const charwidth = Dimensions.get('window').width
  const charheight = Dimensions.get('window').height

  const onboard1 = require('../img/onboard1.png')
  const onboard2 = require('../img/onboard2.png')
  const onboard3 = require('../img/onboard3.png')
  const onboard4 = require('../img/onboard4.png')
  const onboard5 = require('../img/onboard5.png')


  const IntroView = () =>{
    const navigation = useNavigation()

    useEffect(() => {
      const backAction = () => {
        Alert.alert("잠시만요!", "다음에 배우실 건가요?", [
          {
            text: "아니요! 조금 더 배울래요!",
            onPress: () => null,
            style: "cancel"
          },
          {text: "네, 다음에 올게요!", onPress: () => BackHandler.exitApp()}
        ]);
        return true;
      };
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
      return () => backHandler.remove();
    }, []);


    const storeData = async () => {
      try {
        await AsyncStorage.setItem('@storage_Key', 'nofirst')
      } catch (e) {
        console.log(e)
      }
    }



      return(
        <View>
          <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>

            {/*  */}
            <View style={{width:charwidth,height:charheight}}>
              <View style={{flex:1.5,justifyContent:'flex-end',alignItems:'center'}}>
                <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:40}}>이앱을 처음 쓰는 당신께</Text>
              </View>
              <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                <Image source={onboard5} style={{maxWidth:charwidth-20,maxHeight:charheight/2.2}}></Image>
              </View>

              <View style={{flex:2,alignItems:'center',justifyContent:'flex-start'}}>
              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:25,color:'gray',marginTop:20,margin:10,lineHeight:30}}>안녕하세요? </Text>
              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:25,color:'gray',margin:10,lineHeight:30}}>저희는 이 앱을 만든 배신자컴퍼니 입니다. 앱을 소개해드릴게요.</Text>
              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:25,color:'black',margin:10,lineHeight:30}}>오른쪽으로 넘겨주세요!</Text>
              </View>
            </View>
            {/*  */}


            {/*  */}
            <View style={{width:charwidth,height:charheight}}>
              <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                <Image source={onboard1} style={{maxWidth:charwidth-20,maxHeight:charheight/2.2}}></Image>
              </View>

              <View style={{flex:2,alignItems:'center'}}>

              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:40}}>쉬운 문제로 구성된 커리큘럼</Text>
              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:25,color:'gray',marginTop:20,margin:10,lineHeight:30}}>코딩을 쉽게 접근하기 위해서 매우 간단하고 단단한 기본기를 만들어줄거에요!</Text>
              </View>
            </View>
            {/*  */}

            {/*  */}
            <View style={{width:charwidth,height:charheight}}>
              <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                <Image source={onboard2} style={{maxWidth:charwidth-20,maxHeight:charheight/2.2}}></Image>
              </View>

              <View style={{flex:2,alignItems:'center'}}>

              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:40}}>논리적 사고를 기르게 해주는 문제들</Text>
              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:25,color:'gray',marginTop:20,margin:10,lineHeight:30}}>프로그래밍 언어를 단지 도구라고 생각하게 함으로써 다른 사람의 힘이 아닌 본인의 머릿속에서 창의적인 코드를 만들 수 있 도와줄 거에요!</Text>
              </View>
            </View>
            {/*  */}

            {/*  */}
            <View style={{width:charwidth,height:charheight}}>
              <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                <Image source={onboard3} style={{maxWidth:charwidth-20,maxHeight:charheight/2.2}}></Image>
              </View>

              <View style={{flex:2,alignItems:'center'}}>

              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:40}}>폭넓은 언어 사용 유도</Text>
              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:25,color:'gray',marginTop:20,margin:10,lineHeight:30}}>젓가락질에 익숙해지면 종류에 상관없이 젓가락질을 할 수 있듯 코딩도 익숙해지면 폭넓게 사용할 수 있습니다. 처음은 어렵겠지만 차근차근 따라오면 어느새 여러분도 코딩 마스터!</Text>
              </View>
            </View>
            {/*  */}

            {/*  */}
            <TouchableWithoutFeedback onPress={()=>{navigation.navigate('선택화면'),storeData()}}>
            <View style={{width:charwidth,height:charheight}}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:40}}>앞의 내용은 잘 읽으셨나요?</Text>
              </View>
              <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                <Image source={onboard4} style={{maxWidth:charwidth-20,maxHeight:charheight/2.2}}></Image>
              </View>

              <View style={{flex:2,alignItems:'center'}}>

              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:40,margin:5}}>따라올 준비가 되었다면 눌러주세요!</Text>
              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:25,color:'gray',marginTop:20,margin:10}}>화면을 클릭해주세요</Text>
              </View>
            </View>
            </TouchableWithoutFeedback>
            {/*  */}


          </ScrollView>
            
        </View>
      )
  }

  export default IntroView