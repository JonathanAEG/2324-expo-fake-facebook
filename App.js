import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import Header from './components/Header';


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