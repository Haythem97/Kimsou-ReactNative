import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLOURS, Items} from '../database/Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Quantité from '../components/product/quantité';
import styled from 'styled-components'


const MyCart = ({navigation}) => {
  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null);


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  const getDataFromDB = async () => {
    let items = await AsyncStorage.getItem('cartItems');
    items = JSON.parse(items);
    let productData = [];
    if (items) {
      Items.forEach(data => {
        if (items.includes(data.id)) {
          productData.push(data);
          return;
        }
      });
      setProduct(productData);
      getTotal(productData);
    } else {
      setProduct(false);
      getTotal(false);
    }
  };


 

  const getTotal = productData => {
    let total = 0;
    for (let index = 0; index < productData.length; index++) {
      let productPrice = productData[index].productPrice;
      total = total+productPrice;
    }
    setTotal(total);
  };

  const removeItemFromCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      for (let index = 0; index < array.length; index++) {
        if (array[index] == id) {
          array.splice(index, 1);
        }

        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        getDataFromDB();
      }
    }
  };


  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem('cartItems');
    } catch (error) {
      return error;
    }
    ToastAndroid.show('Votre Commande sera livrée dans 30min maximum, Merci pour votre commande à trés bientot.', ToastAndroid.SHORT);
    navigation.navigate('Home');
  };


 
  
  const renderProducts = (data, index) => {
    return (
      <Touchh
        key={data.key}
        onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
      >
        <Viewimage>
          <Images
            source={{ uri:`${data.productImage}` }}
          />
        </Viewimage>
        <Viewa>
          <View>
            <Text4>
              {data.productName}
            </Text4>
            <View5>
              <Text4>
               {data.productPrice}€
              </Text4>
             
            </View5>
          </View>
          <View4>
              <Quantité/>
            <TouchableOpacity onPress={() => removeItemFromCart(data.id)}>
              <Icondelete
                name="delete-outline"
              />
            </TouchableOpacity>
          </View4>
        </Viewa>
      </Touchh>
    );
  };

  return (
    <View1>
      <ScrollView>
        <View3>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon  name="chevron-left" />
          </TouchableOpacity>
          <Text2>
            Order Details
          </Text2>
          <View></View>
        </View3>
        <Text2>
          My Cart
        </Text2>
        <View style={{paddingHorizontal: 16}}>
          {product ? product.map(renderProducts) : null}
        </View>
        <View>
          <Viewc>
            <Textt>
              Delivery Location
            </Textt>
            <View4>
              <View5>
                <View6>
                  <Iconn
                    name="truck-delivery-outline"
                  />
                </View6>
                <View>
                  <Text4>
                    16 Rue Bichat
                  </Text4>
                  <Text>
                   75010, Paris 10
                  </Text>
                </View>
              </View5>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{fontSize: 22, color: COLOURS.black}}
              />
            </View4>
          </Viewc>
          <Viewc>
            <Textt>
              Payment Method
            </Textt>
            <View4>
              <View5>
                <View6>
                  <Textv>
                    VISA
                  </Textv>
                </View6>
                <View>
                  <Text4>
                    Visa Classic
                  </Text4>
                  <Text>
                    ****9092
                  </Text>
                </View>
              </View5>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{fontSize: 22, color: COLOURS.black}}
              />
            </View4>
          </Viewc>
          <Viewc>
            <Textt>
              Order Info
            </Textt>
            <View4>
              <Textt>
                Total
              </Textt>
              <Textt>
                {total}€
              </Textt>
            </View4>
          </Viewc>
        </View>
      </ScrollView>

      <Viewb>
        <Touch onPress={() => (total != 0 ? checkOut() : null)}>
          <Textf>
            CHECKOUT ({total}€ )
          </Textf>
        </Touch>
      </Viewb>
    </View1>
  );
};

export const View1 = styled.View`
        width: 100%;
        height: 100%;
        backgroundColor:white;
        position: relative;
        `
export const Icon = styled(MaterialCommunityIcons)`
        fontSize: 25px;
        padding: 7px;
        backgroundColor: #f2f2f2;
        borderRadius: 10px;
`
export const Icondelete = styled(MaterialCommunityIcons)`
        fontSize: 18px;
        padding: 7px;
        backgroundColor: #f2f2f2;
        borderRadius: 100px;
`
export const Iconn = styled(MaterialCommunityIcons)`
        fontSize: 25px;
        backgroundColor: #f2f2f2;
        color:blue;
`
export const Text2 = styled.Text`
        fontSize: 20px;
        fontWeight: 600;
        letterSpacing: 0.5px;
        marginVertical: 4px;
        color: black;
        padding-Left: 18px;
        maxWidth: 84%;
        `
export const View3 = styled.View`
        width: 100%;
        flexDirection: row;
        justifyContent: space-between;
        paddingTop: 16px;
        paddingLeft: 16px;
        `

export const Viewc = styled.View`
        paddingHorizontal: 16px;
        marginTop: 25px;
        marginVertical: 10px;
        `
export const Textt = styled.Text`
        fontSize: 17px;
        fontWeight: 500;
        color:black;
        margin-Bottom:15px;
`
export const Textf = styled.Text`
        fontSize: 12px;
        fontWeight: 500;
        letterSpacing: 1px;
        color: white;
        textTransform: uppercase;
        `

export const Text4 = styled.Text`
        fontSize: 14px;
        fontWeight: 500;
        color:black;
        
`
export const View4 = styled.View`
        flexDirection: row;
        alignItems: center;
        justifyContent: space-between;
        `
export const View5= styled.View`
          flexDirection: row;
          width: 80%;
          alignItems: center;
          `
export const View6= styled.View`
          color:blue,
          backgroundColor: #f2f2f2;
          alignItems: center;
          justifyContent: center;
          padding: 12px;
          borderRadius: 10px;
          marginRight: 18px;
          `
export const Viewimage= styled.View`
          width: 30%;
          height: 100px;
          padding: 14px;
          justifyContent: center;
          alignItems: center;
          backgroundColor: #f2f2f2;
          borderRadius: 10px;
          marginRight: 22px;
          `
export const Images=styled.Image`
          width: 100%;
          height: 100%;
          resizeMode: contain;
          `
export const Viewa=styled.View`
            flex: 1;
            height: 100%;
            justifyContent: space-around;
            `
    
export const Touch= styled.TouchableOpacity`
          width: 86%;
          height: 90%;
          backgroundColor: blue;
          borderRadius: 20px;
          justifyContent: center;
          alignItems: center;
          `
export const Touchh= styled.TouchableOpacity`
          width: 100%;
          height: 100px;
          marginVertical: 6px;
          flexDirection: row;
          alignItems: center;
          `

export const Viewb= styled.View`
          position: absolute;
          bottom: 10px;
          height: 8%;
          width: 100%;
          justifyContent: center;
          alignItems: center;
`
export const Textv = styled.Text`
          fontSize: 10px;
          fontWeight: 900;
          color:blue;
          letterSpacing: 1px;
          `
export default MyCart;
