import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {useNavigation} from '@react-navigation/native'
import {View, ActivityIndicator, StyleSheet, Text, Image, SafeAreaView,ScrollView,TouchableOpacity, KeyboardAvoidingView, Button } from "react-native";



const InformationsE = () => {

    const navigation = useNavigation()

  return (
    <>
<ScrollView>
 <SafeAreaView style={{alignItems: 'center', backgroundColor: '#F5F6F7'}}>
        <KeyboardAvoidingView behavior='padding'>
            <View1>
                <View>
                    <Text1>Informations</Text1>
                    <Input placeholder="Nom"/>
                    <Input placeholder="Prenom"/>
                    <View3>
                        <Touch onPress={() => {
                            navigation.navigate('Products')
                        }}>    
                            <Text2>Suivant</Text2>
                        </Touch>
                    </View3>
                </View>
            </View1>
        </KeyboardAvoidingView>
    </SafeAreaView>
    </ScrollView>

    </>
    )
}
export const Input = styled.TextInput`
    justify-content: center;
    width: 330px;
    font-size: 12px;
    border: 0.5px #2b2b2b;
    margin-Bottom:10px;
`


export const View1 = styled.View`
    marginTop: 80px;
    backgroundColor: #F5F6F7;
    `
export const View3 = styled.View`
    justifyContent: center;
    alignItems: center;
    marginTop: 20px;
    `
export const Text1 = styled.Text`
    textAlign: center;
    padding: 20px;
    fontSize: 26px;
    fontFamily: arial;
    fontWeight: 100;
    letterSpacing: 5px;
    color: #636363;
    `
export const Text2 = styled.Text`
    color: #FFF;
    fontWeight: bold;
    fontSize: 16px;
    `
export const Touch = styled.TouchableOpacity`
    width: 100%;
    padding: 18px;
    backgroundColor: blue;
    borderRadius: 50px;
    justifyContent: center;
    alignItems:  center;
    shadowColor: #129793;
    shadowOpacity: 0.36;
    shadowRadius: 6.68px;
    elevation: 13;
    margin-Bottom:30px;
        `


InformationsE.propTypes = {}

export default InformationsE
