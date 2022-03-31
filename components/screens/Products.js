import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLOURS, Items} from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProductCard from '../components/product/productcard';
import styled from 'styled-components';


const Products = ({navigation}) => {
  const [Burgers, setBurgers] = useState([]);
  const [Sandwiches, setSandwiches] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);


  const getDataFromDB = () => {
    let BurgersList = [];
    let SandwichesList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'Burgers') {
        BurgersList.push(Items[index]);
      } else if (Items[index].category == 'Sandwichs') {
        SandwichesList.push(Items[index]);
      }
    }

    setBurgers(BurgersList);
    setSandwiches(SandwichesList);
  };
  return (
    <View1>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View2>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
              name="chevron-left"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
            <Icon name="cart"/>
          </TouchableOpacity>
        </View2>
        
        <View3>
          <View2>
            <View>
              <Textt>
                Burgers
              </Textt>
            </View>
          </View2>
          <View4>
            {Burgers.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View4>
        </View3>

        <View3>
          <View2>
            <View>
              <Textt>
                Sandwichs
              </Textt>
            </View>
          </View2>
          <View4>
            {Sandwiches.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View4>
        </View3>
      </ScrollView>
    </View1>
  );
};
export const View1 = styled.View`
        width: 100%;
        height: 100%;
        backgroundColor: white;
        `
export const View2 = styled.View`
        width: 100%;
        flexDirection: row;
        justifyContent: space-between;
        padding: 16px;
        `
export const Entypoo = styled(Entypo)`
        fontSize: 18px;
        color: backgroundMedium;
        padding: 12px;
        borderRadius: 10px;
`
export const Icon = styled(MaterialCommunityIcons)`
        fontSize: 18px;
        padding: 12px;
        borderRadius: 10px;
        backgroundColor: #f2f2f2;

`
export const View3 = styled.View`
        padding: 16px;
        `
export const View4 = styled.View`
        flexDirection: row;
        flexWrap: wrap;
        justifyContent: space-around;
        `
export const Textt = styled.Text`
        fontSize: 25px;
        color: black;
        fontWeight: 500;
        letterSpacing: 1px;
`

export default Products;
