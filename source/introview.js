import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Image,
  } from 'react-native';
  
  const charwidth = Dimensions.get('window').width
  const charheight = Dimensions.get('window').height

  const onboard1 = require('../img/onboard1.png')
  const onboard2 = require('../img/onboard2.png')
  const onboard3 = require('../img/onboard3.png')
  const onboard4 = require('../img/onboard4.png')


  const IntroView = () =>{
      return(
        <View>
          <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>

            {/*  */}
            <View style={{width:charwidth,height:charheight}}>
              <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                <Image source={onboard1} style={{maxWidth:charwidth-20,maxHeight:charheight/2.2}}></Image>
              </View>

              <View style={{flex:2,alignItems:'center'}}>

              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:40}}>쉬운 문제로 구성된 커리큘럼</Text>
              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:25,color:'gray',marginTop:20,margin:10}}>코딩을 쉽게 접근하기 위해서 매우 간단하고 단단한 기본기를 만들어줄거에요!</Text>
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
              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:25,color:'gray',marginTop:20,margin:10}}>프로그래밍 언어를 단지 도구라고 생각하게 함으로써 다른 사람의 힘이 아닌 본인의 머릿속에서 창의적인 코드를 만들 수 있 도와줄 거에요!</Text>
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
              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:25,color:'gray',marginTop:20,margin:10}}>젓가락질에 익숙해지면 종류에 상관없이 젓가락질을 할 수 있듯 코딩도 익숙해지면 폭넓게 사용할 수 있습니다. 처음은 어렵겠지만 차근차근 따라오면 어느새 여러분도 코딩 마스터!</Text>
              </View>
            </View>
            {/*  */}

            {/*  */}
            <View style={{width:charwidth,height:charheight}}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:40}}>앞의 내용은 잘 읽으셨나요?</Text>
              </View>
              <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                <Image source={onboard4} style={{maxWidth:charwidth-20,maxHeight:charheight/2.2}}></Image>
              </View>

              <View style={{flex:2,alignItems:'center'}}>

              <Text style={{fontFamily:'DoHyeon',textAlign:'center',fontSize:40,margin:5}}>따라올 준비가 되었다면 눌러주세요!</Text>
              
              </View>
            </View>
            {/*  */}


            <View style={{width:charwidth,height:charheight,backgroundColor:'yellow'}}>
              <Text>마지막페이지</Text>
              <View style={{alignContent:'flex-end',flex:1}}>
                <View style={{width:charwidth,height:50,backgroundColor:'red'}}><Text>시작!</Text></View>
              </View>


            </View>


            <Text>인트로 바뀜</Text>
          </ScrollView>
            
        </View>
      )
  }

  export default IntroView