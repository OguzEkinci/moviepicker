import React, { Children, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Fav } from "./pages/Fav/index"
import { Dice } from "./pages/Dice/index"
import { Discover } from './pages/Discover/index';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

const CustomTabBarButton = ({ children, onPress }) => {
    return <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', top: -23, ...styles.shadow }} onPress={onPress}>
        <View style={{ width: 75, height: 75}}>
            {children}
        </View>
    </TouchableOpacity>
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Dice'
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: "absolute",
                        bottom: 15,
                        left: 20,
                        right: 20,
                        elevation: 0,
                        bacgkgroundColor: "#fff",
                        borderRadius: 15,
                        height: 70,
                        ...styles.shadow
                    }
                }}>
                <Tab.Screen name="Discover" component={Discover} options={{
                    tabBarIcon: ({ focused }) => {
                        return focused ? (<View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image resizeMode='contain' style={{ width: 30, height: 30, bottom: 2 }} source={require("./assets/compass-active.png")} />
                            <Text style={{ color: "black" , fontSize: 12 }}>Discover</Text>
                        </View>) : (<View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image resizeMode='contain' style={{ width: 30, height: 30, bottom: 2 }} source={require("./assets/compass.png")} />
                            <Text style={{ color: "gray", fontSize: 12 }}>Discover</Text>
                        </View>)
                    },
                    headerShown: false,
                }} />
                <Tab.Screen name="Dice" component={Dice} options={{
                    tabBarIcon: ({ focused }) => {
                        return focused ? (<View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image resizeMode='contain' style={{ width: 75, height: 75, bottom: 2 }} source={require("./assets/clapperboard-active.png")} />
                        </View>) : (<View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image resizeMode='contain' style={{ width: 75, height: 75, bottom: 2 }} source={require("./assets/clapperboard.png")} />
                        </View>)
                    },
                    tabBarButton: (props) => { return <CustomTabBarButton {...props} /> },
                    headerShown: false
                }} />
                <Tab.Screen name="Fav" component={Fav} options={{
                    tabBarIcon: ({ focused }) => {
                        return focused ? (<View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image resizeMode='contain' style={{ width: 40, height: 40, bottom: 2 }} source={require("./assets/favourite-active.png")} />
                            <Text style={{ color:"black", fontSize: 12 }}>Saved</Text>
                        </View>) : (<View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image resizeMode='contain' style={{ width: 40, height: 40, bottom: 2 }} source={require("./assets/favourite.png")} />
                            <Text style={{ color:"gray", fontSize: 12 }}>Saved</Text>
                        </View>)
                    },
                    headerShown: false
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export { App }

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})