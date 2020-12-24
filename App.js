import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-native/native'
import { createStackNavigation } from '@react-navigation/stack'

const Stack = createStackNavigation()

function myStack(){
  return (
    <Stack.Navigator>
      <Stack.screen/>
      <Stack.screen/>
      <Stack.screen/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
