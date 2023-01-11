import React, {useEffect, useState} from 'react';
import {Alert, Image, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setFavList} from '../../redux/fav-list/action';
import {styles} from './FavButton.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
const FavButton = ({movieObject, setModalVisible}) => {
  const [addedFav, setAddedFav] = useState(false);
  const dispatch = useDispatch();
  const favList = useSelector(state => state.favList);
  useEffect(() => {
    const getItem = async () => {
      try {
        const favList = await AsyncStorage.getItem('@FavList');
        const parsedValue = JSON.parse(favList);
        setAddedFav(parsedValue.find(item => item?.id === movieObject?.id));
      } catch (e) {
        console.log(e);
      }
    };
    if (movieObject) getItem();
  }, []);
  const handlePress = async () => {
    setAddedFav(!addedFav);
    if (!addedFav) {
      if (favList.length !== 100) {
        //listeye 100 taneden fazla film kaydetmemeyi sağlar
        //add item
        try {
          const value = await AsyncStorage.getItem('@FavList');
          let parsedValue = JSON.parse(value);
          if (parsedValue === null) {
            parsedValue = [movieObject];
          } else {
            parsedValue.push(movieObject);
          }
          await AsyncStorage.setItem('@FavList', JSON.stringify(parsedValue));
          dispatch(setFavList(parsedValue));
        } catch (e) {
          console.log(e);
        }
      } else {
        setModalVisible(true);
        setAddedFav(false);
      }
    } else {
      //remove item
      try {
        const value = await AsyncStorage.getItem('@FavList');
        let parsedValue = JSON.parse(value);
        await AsyncStorage.setItem(
          '@FavList',
          JSON.stringify(
            parsedValue.filter(
              item => item?.original_title !== movieObject?.original_title,
            ),
          ),
        );
        dispatch(
          setFavList(
            parsedValue.filter(
              item => item?.original_title !== movieObject?.original_title,
            ),
          ),
        );
      } catch (e) {
        // error reading value
        console.log(e);
      }
    }
  };
  return (
    <TouchableOpacity
      style={{
        width: 45,
        height: 45,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
      }}
      onPress={handlePress}>
      <Image
        style={styles.image}
        source={
          !addedFav
            ? require('../../assets/favourite.png')
            : require('../../assets/favourite-active.png')
        }
      />
    </TouchableOpacity>
  );
};

export default FavButton;
