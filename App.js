import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import Header from './components/Header';
import Home from './components/Screens/Home';
import Friends from './components/Screens/Friends';
import Groups from './components/Screens/Groups';
import Profile from './components/Screens/Profile';
import Notifications from './components/Screens/Notifications';
import Menu from './components/Screens/Menu';

export default function App() {
  return (
    <>

      <StatusBar
      backgroundColor='#FFFFFF'
      barStyle="dark-content"
      />
      
    <SafeAreaView>

      <Header/>

    </SafeAreaView>
      
    </>

  );
}