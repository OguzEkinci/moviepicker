import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Fav from './pages/Fav/Fav';
import {Dice} from './pages/Dice/index';
import Details from './pages/Details/Details';
import Discover from './pages/Discover/Discover';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setFavList} from './redux/fav-list/action';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './pages/SplashScreen/SplashScreen';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const CustomTabBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        top: -23,
        ...styles.shadow,
      }}
      onPress={onPress}>
      <View style={{width: 75, height: 75}}>{children}</View>
    </TouchableOpacity>
  );
};

const Root = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dice"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#323232',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          height: 90,
          opacity: 0.8,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                elevation={24}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: focused ? '#00f9f9' : '#c7c7c7',
                }}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    bottom: 2,
                    tintColor: focused ? '#00f9f9' : '#c7c7c7',
                  }}
                  source={
                    focused
                      ? require('./assets/compass-active.png')
                      : require('./assets/compass.png')
                  }
                />
              </View>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Dice"
        component={Dice}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                elevation={24}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: focused ? '#00f9f9' : '#c7c7c7',
                }}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 75,
                    height: 75,
                    bottom: 2,
                    tintColor: focused ? '#00f9f9' : '#c7c7c7',
                  }}
                  source={
                    focused
                      ? require('./assets/clapperboard-active.png')
                      : require('./assets/clapperboard.png')
                  }
                />
              </View>
            );
          },
          tabBarButton: props => {
            return <CustomTabBarButton {...props} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Fav"
        component={Fav}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                elevation={24}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: focused ? '#00f9f9' : '#c7c7c7',
                }}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 40,
                    bottom: 2,
                    tintColor: focused ? '#00f9f9' : '#c7c7c7',
                  }}
                  source={
                    focused
                      ? require('./assets/favourite-active.png')
                      : require('./assets/favourite.png')
                  }
                />
              </View>
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  /* SplashScreen */
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000);
  }, []);
  const forFade = ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  /* AsyncStorage get item */
  const dispatch = useDispatch();
  useEffect(() => {
    const getItem = async () => {
      try {
        const favList = await AsyncStorage.getItem('@FavList');
        const parsedValue = JSON.parse(favList);
        dispatch(setFavList(parsedValue));
        console.log(parsedValue);
      } catch (e) {
        console.log(e);
      }
    };
    getItem();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showSplashScreen && (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false, cardStyleInterpolator: forFade}}
          />
        )}
        <Stack.Screen
          name="Root"
          component={Root}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Details"
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
