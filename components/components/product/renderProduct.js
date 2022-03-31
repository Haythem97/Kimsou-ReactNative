import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
} from 'react-native';
import { COLOURS, Items } from '../../database/Database';
import styled from 'styled-components';


const renderProduct = ({item, index}) => {
    return (
      <ViewApp>
        <Img
          source={{ uri:`${item}` }}
        />
      </ViewApp>
    );
  };
const ViewApp = styled.View`
          width: 380px;
          height: 240px;
          alignItems: center;
          justifyContent: center;
          `
const Img = styled.Image`
          width: 100%;
          height: 100%;
          resizeMode: contain;
`
export default renderProduct