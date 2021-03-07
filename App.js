
import 'react-native-gesture-handler' ; 
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
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import IntroView from './source/introview';

const Stack = createStackNavigator();
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const charwidth = Dimensions.get('window').width
const charheight = Dimensions.get('window').height

const codeimg = require('./img/code.png')



const App = () => {
  const navigation = useNavigation()

  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('인트로')
    }, 1000);
  })

  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('인트로')  }>
      <LinearGradient colors={['#FFB484', '#ffbf80', '#ffd9b3']} style={{ width: charwidth, height: charheight }}>
        <View>
          <Image source={codeimg} style={{position:'absolute',maxWidth:300,maxHeight:300,marginTop:200}}></Image>
          <View style={{ justifyContent: 'center', alignItems: 'center', height: charheight }}>
            <Text style={{ fontSize: 70, textAlign: 'center', marginRight: 50,color:'white' }}>C & sCript</Text>
            <Text style={{ fontSize: 50, textAlign: 'center', marginLeft: 100,color:'white' }}>aCademy</Text>
          </View>
        </View>
      </LinearGradient>
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
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navi;
