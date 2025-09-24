import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import MainScreen from './main-screen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <MainScreen />
    </SafeAreaView>
  );
}