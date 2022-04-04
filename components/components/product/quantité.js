import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { COLOURS } from '../../database/Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';




const Quantité = () => {
    const [qty, setqty] = useState(1);

    const decrement = () => {
      setqty(qty - 1)
    }
  
    const increment = () => {
      setqty(qty + 1)
    }
  
    return (
      <Vieww>
     
          <TouchableOpacity onPress={decrement}>
          <View1>
                <MaterialCommunityIcons
                  name="minus"/>
              </View1>
          </TouchableOpacity>
          <Text>{qty}</Text>
          <TouchableOpacity onPress={increment}>
          <View1>
                <MaterialCommunityIcons
                  name="plus"
                />
              </View1>
          </TouchableOpacity>
        </Vieww>
    )
  }
export const Vieww = styled.View`
        flexDirection: row;
        alignItems: center;
        `
export const View1 = styled.View`
        borderRadius: 100px;
        margin: 8px;
        padding: 5px;
        borderWidth: 1px;
        borderColor: #D3D3D3;
        opacity: 0.5;
  `

  export default Quantité