import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './components/config/Routes';

const App = () => {

  return (
    <Routes />
  );
};

export default App;
