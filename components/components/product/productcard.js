import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { COLOURS, Items } from '../../database/Database';
import {useNavigation} from '@react-navigation/native';


const ProductCard = ({data}) => {
    const navigation = useNavigation()

    return (
      <Touch onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}>
        <View1>
          {data.isOff ? (
            <View2>
              <Textt>
                {data.offPercentage}%
              </Textt>
            </View2>
          ) : null}
          <Img
          source={{ uri:`${data.productImage}` }}
          />
        </View1>
        <Textt2>
          {data.productName}
        </Textt2>
        <Text>{data.productPrice} €</Text>
      </Touch>
    );
  };

  const Textt = styled.Text`
      fontSize: 12px;
      color: white;
      fontWeight: 600;
      marginBottom: 2px;
`
const Textt2 = styled.Text`
      fontSize: 12px;
      color: black;
      fontWeight: bold;
      letterSpacing: 1;
`
const Img = styled.Image`
      width: 100%;
      height: 100%;
      resizeMode: contain;
`
const Touch = styled.TouchableOpacity`
      width: 48%;
      marginVertical: 14px;
`
const View1 = styled.View`
      width: 100%;
      height: 100PX.
      borderRadius: 10px;
      backgroundColor: #f2f2f2;
      position: relative;
      justifyContent: center;
      alignItems: center;
      marginBottom: 8px;
`
const View2 = styled.View`
      position: absolute;
      width: 20%;
      height: 24%;
      backgroundColor: green;
      top: 0px;
      left: 0px;
      borderTopLeftRadius: 10px;
      borderBottomRightRadius: 10px;
      alignItems: center;
      justifyContent: center;
`
  export default ProductCard