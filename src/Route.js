import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Fav} from './pages/Fav/index';
import {Dice} from './pages/Dice/index';
import {Discover} from './pages/Discover/index';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {PortalProvider} from '@gorhom/portal';
import {useDispatch} from 'react-redux';
import {setFavList} from './redux/fav-list/action';
const Tab = createBottomTabNavigator();

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

export default function App() {
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
    <PortalProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Dice"
          screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarStyle: {
              position: 'absolute',
              bottom: 15,
              left: 20,
              right: 20,
              elevation: 0,
              backgroundColor: '#621ef4',
              borderRadius: 15,
              height: 70,
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
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      resizeMode="contain"
                      style={{
                        width: 30,
                        height: 30,
                        bottom: 2,
                        tintColor: 'pink',
                      }}
                      source={
                        focused
                          ? require('./assets/compass-active.png')
                          : require('./assets/compass.png')
                      }
                    />
                    <Text style={{color: 'pink', fontSize: 12}}>Discover</Text>
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
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      resizeMode="contain"
                      style={{
                        width: 75,
                        height: 75,
                        bottom: 2,
                        tintColor: 'pink',
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
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      resizeMode="contain"
                      style={{
                        width: 40,
                        height: 40,
                        bottom: 2,
                        tintColor: 'pink',
                      }}
                      source={
                        focused
                          ? require('./assets/favourite-active.png')
                          : require('./assets/favourite.png')
                      }
                    />
                    <Text style={{color: 'pink', fontSize: 12}}>Saved</Text>
                  </View>
                );
              },
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PortalProvider>
  );
}

export {App};

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
