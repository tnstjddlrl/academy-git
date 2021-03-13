import React, { useState, useEffect } from 'react';
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

const cselect = require('../img/cselect.png')

const CSelect = () => {
    const navigation = useNavigation()

    return (
        <View style={{ width: charwidth, height: charheight }}>
            <View style={{ flex: 3, justifyContent: 'flex-start', alignItems: 'center', marginTop: 20 }}>
                <Image source={cselect} style={{ maxWidth: charwidth - 20, maxHeight: charheight / 2.2 }}></Image>
            </View>

            <View style={{ flex: 3 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ width: charwidth - 60, height: 80, borderRadius: 10, backgroundColor: '#e6e6e6', marginLeft: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'DoHyeon', textAlign: 'center', fontSize: 23 }}>처음부터시작!</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <View style={{ width: charwidth / 2 - 35, height: 80, borderRadius: 10, backgroundColor: '#e6e6e6', marginLeft: 30, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'DoHyeon', textAlign: 'center', fontSize: 23 }}>1. c언어소개</Text>
                        </View>
                        <View style={{ width: charwidth / 2 - 35, height: 80, borderRadius: 10, backgroundColor: '#e6e6e6', marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'DoHyeon', textAlign: 'center', fontSize: 23 }}>2. c언어 기초</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <View style={{ width: charwidth / 2 - 35, height: 80, borderRadius: 10, backgroundColor: '#e6e6e6', marginLeft: 30, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'DoHyeon', textAlign: 'center', fontSize: 23 }}>1. c언어소개</Text>
                        </View>
                        <View style={{ width: charwidth / 2 - 35, height: 80, borderRadius: 10, backgroundColor: '#e6e6e6', marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'DoHyeon', textAlign: 'center', fontSize: 23 }}>2. c언어 기초</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <View style={{ width: charwidth / 2 - 35, height: 80, borderRadius: 10, backgroundColor: '#e6e6e6', marginLeft: 30, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'DoHyeon', textAlign: 'center', fontSize: 23 }}>1. c언어소개</Text>
                        </View>
                        <View style={{ width: charwidth / 2 - 35, height: 80, borderRadius: 10, backgroundColor: '#e6e6e6', marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'DoHyeon', textAlign: 'center', fontSize: 23 }}>2. c언어 기초</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <View style={{ width: charwidth / 2 - 35, height: 80, borderRadius: 10, backgroundColor: '#e6e6e6', marginLeft: 30, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'DoHyeon', textAlign: 'center', fontSize: 23 }}>1. c언어소개</Text>
                        </View>
                        <View style={{ width: charwidth / 2 - 35, height: 80, borderRadius: 10, backgroundColor: '#e6e6e6', marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'DoHyeon', textAlign: 'center', fontSize: 23 }}>2. c언어 기초</Text>
                        </View>
                    </View>

                    
                </ScrollView>
            </View>
        </View>
    )
}

export default CSelect