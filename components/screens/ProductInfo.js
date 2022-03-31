import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
} from 'react-native';
import {COLOURS, Items} from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import renderProduct from '../components/product/renderProduct';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components'

const ProductInfo = ({route, navigation}) => {
  const {productID} = route.params;

  const [product, setProduct] = useState({});

  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == productID) {
        await setProduct(Items[index]);
        return;
      }
    }
  };  

  const addToCart = async id => {
  
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);
  
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Produit ajouter au panier',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Products');
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Produit ajouter au panier',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Products');
      } catch (error) {
        return error;
      }
    }
  };
  return (
    <View1>
      <StatusBar
        backgroundColor={COLOURS.backgroundLight}
        barStyle="dark-content"
      />
      <ScrollView>
        <View2>
          <View3>
            <TouchableOpacity onPress={() => navigation.goBack('Home')}>
              <Entypoo name="chevron-left"/>
            </TouchableOpacity>
          </View3>
          <FlatList
            data={product.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
          />
          <Viewtext>
            {product.productImageList
              ? product.productImageList.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: 'clamp',
                  });
                  return (
                    <Viewanim key={index}></Viewanim>
                  );
                })
              : null}
          </Viewtext>
        </View2>
        <Viewc>
          <View6>
            <Entypoo name="shopping-cart"/>
            <Text>
              KISMOU
            </Text>
          </View6>
          <View>
            <Text2>
              {product.productName}
            </Text2>
          </View>
          <Text1>
            {product.description}
          </Text1>
          <View>
            <View6>
              <View>
                <Entypoo name="location-pin"/>
              </View>
              <Text> 30 Avenue de Flandre , 75019 Paris</Text>
            </View6>
           
          </View>
        </Viewc>
      </ScrollView>

      <View5>
        <Touch
          onPress={() => (product.isAvailable ? addToCart(product.id) : null)}>
          <Textt>
            {product.isAvailable ? 'Add to cart' : 'Not Avialable'}
          </Textt>
        </Touch>
      </View5>
    </View1>
  );
}; 

export const View1 = styled.View`
        width: 100%;
        height: 100%;
        backgroundColor:white;
        position: relative;
        `
export const View2 = styled.View`
        width: 100%;
        backgroundColor: backgroundLight;
        borderBottomRightRadius: 20px;
        borderBottomLeftRadius: 20px;
        position: relative;
        justifyContent: center;
        alignItems: center;
        marginBottom: 4px;
        `
export const View3 = styled.View`
        width: 100%;
        flexDirection: row;
        justifyContent: space-between;
        paddingTop: 16px;
        paddingLeft: 16px;
        `
export const Entypoo = styled(Entypo)`
        fontSize: 25px;
        color: blue;
        `
export const Touch = styled.TouchableOpacity`
        width: 86%;
        height: 90%;
        backgroundColor:blue;
        borderRadius: 20px;
        justifyContent: center;
        alignItems: center;
        `
export const Textt = styled.Text`
        fontSize: 15px;
        fontWeight: 500;
        letterSpacing: 1px;
        color:white;
        textTransform: uppercase;
`
export const Text1 = styled.Text`
        fontSize: 12px;
        color: black;
        fontWeight: 400;
        letterSpacing: 1px;
        opacity: 0.5;
        lineHeight: 20px;
        maxWidth: 85%;
        maxHeight: 44px;
        marginBottom: 18px;
`
export const Text2 = styled.Text`
        fontSize: 24px;
        fontWeight: 600;
        letterSpacing: 0.5px;
        marginVertical: 4px;
        color: black;
        maxWidth: 84%;
        `
export const View5 = styled.View`
        position: absolute;
        bottom: 10px;
        height: 8%;
        width: 100%;
        justifyContent: center;
        alignItems: center;
        `
export const View6 = styled.View`
        flexDirection: row;
        width: 80%;
        alignItems: center;
        marginBottom:28px;
        `
export const Viewc = styled.View`
        paddingHorizontal: 16px;
        marginTop: 6px;
        `
export const Viewanim = styled.View`
        width: 16%;
        height: 2.4px;
        backgroundColor: black;
        marginHorizontal: 4px;
        borderRadius: 100px;
        `
export const Viewtext = styled.View`
        width: 100%;
        flexDirection: row;
        alignItems: center;
        justifyContent: center;
        marginBottom: 16px;
        marginTop: 32px;
`
export default ProductInfo;
