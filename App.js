
import 'react-native-gesture-handler';
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
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import IntroView from './source/introview';

const Stack = createStackNavigator();
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SelectSubj from './source/selectSubject';
import CSelect from './source/cSelect';

import AsyncStorage from '@react-native-async-storage/async-storage';

const charwidth = Dimensions.get('window').width
const charheight = Dimensions.get('window').height

const codeimg = require('./img/code.png')
// const first = require('../img/first.png')


const App = () => {
  const navigation = useNavigation()

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      return value
    } catch(e) {
      console.log(e)
    }
  }
  

  useEffect(() => {
   getData().then((res)=>{
     if(res!=null){
      setTimeout(() => {
        navigation.navigate('선택화면')
      }, 1000);
     }else{
      setTimeout(() => {
        navigation.navigate('인트로')
      }, 1000);
     }
   })
  },[])

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('인트로')}>
        <View style={{ width: charwidth, height: charheight }}>
          <View style={{ flex: 1, alignItems: 'center',justifyContent:'flex-end' }}>
          <Text style={{ fontFamily: 'DoHyeon', textAlign: 'center', fontSize: 50 }}>C&Script</Text>
          <Text style={{ fontFamily: 'DoHyeon', textAlign: 'center', fontSize: 50 }}>Academy</Text>
          </View>
          <View style={{ flex: 2, justifyContent:'flex-start', alignItems: 'center' }}>
            <Image source={codeimg} style={{ maxWidth: charwidth - 20, maxHeight: charheight / 2.2 }}></Image>
          </View>
          <View style={{ flex: 1, justifyContent:'flex-start', alignItems: 'center' }}>
          </View>

        </View>
      </TouchableOpacity>
    </View>
  )
}

const Navi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="인트로" component={IntroView} />
        <Stack.Screen name="선택화면" component={SelectSubj} />
        <Stack.Screen name="c언어선택" component={CSelect} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navi;
