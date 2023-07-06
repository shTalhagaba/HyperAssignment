import React, { useState } from 'react';
import {
  Linking
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/home';
import DetailScreen from '../screens/detailSreen.js/detailScreen';



const MainStack = createNativeStackNavigator();


const Navigation = (props) => {

  return (
    <>
      <NavigationContainer >
        <MainStack.Navigator screenOptions={{ headerShown: false }} >
          <MainStack.Screen name="HomeScreen" component={HomeScreen} />
          <MainStack.Screen name="DetailScreen" component={DetailScreen} />
        </MainStack.Navigator>

      </NavigationContainer>
    </>
  );
}


export default Navigation;






