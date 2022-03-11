import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Navigation from './src/Navigation';
import LoginPage from './src/pages/LoginPage/LoginPage';
//import IconMc from 'react-native-vector-icons/MaterialCommunityIcons'
//import HomePage from './src/pages/HomePage';


export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Navigation/>
    </SafeAreaView>
  )
}
