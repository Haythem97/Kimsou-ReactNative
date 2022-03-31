import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CommonText } from '../components/texts'
import {useNavigation} from '@react-navigation/native'
import { ImageBackground, StyleSheet, Text, View , Image, Button, TouchableOpacity} from "react-native";

const image = { uri: "https://images.rtl.fr/~c/770v513/rtl/www/1460953-un-hamburger-image-d-illustration.jpg" };

const Home = () => {
  const navigation = useNavigation()

  return (
    <>
     <ViewApp>
 
    <ImageBackgroundd imageStyle={{opacity:0.7}} source={image} resizeMode="cover">
      <Images source={{
          uri: 'https://makseb.fr/makseb/wp-content/uploads/2019/12/logo-clients-09-1024x1024.png',}}/>
      <Textt>COMMANDER</Textt>
      
      <TouchableOpacity onPress={() => navigation.navigate('InformationsE')}>
      <Textt >Emporter</Textt>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('InformationsL')}>
      <Textt >Livraison</Textt>
      </TouchableOpacity>

      <Textt >30 Av. de Flandre, 75019 Paris</Textt>

    </ImageBackgroundd>
  </ViewApp>
    </>
  )
}

const ViewApp = styled.View`
flex: 1;
`
const Buttonn = styled.Button`
space-between: 50px;
marginBottom:50px;
`
const Images = styled.Image`
height: 100px;
width: 150px;
alignSelf: center;
margin-Top:35px`
const Textt = styled.Text`
alignSelf: center;
color: white;
fontWeight:800;
fontSize:25px;
paddingBottom:40px;
color:white;
`
const ImageBackgroundd =styled.ImageBackground`
resizeMode:cover;
width: 100%;
height: 100%;
`

Home.propTypes = {}

export default Home
