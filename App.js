import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import UsersLists from './screens/UsersList';
import CreateUser from './screens/CreateUser';
import UserDetail from './screens/UserDetail';

function MyStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="UsersList" component={UsersLists} options={{title: 'Users list'}}/>
      <Stack.Screen name="CreateUser" component={CreateUser} options={{title: 'Create new user'}}/>
      <Stack.Screen name="UserDetail" component={UserDetail} options={{title: 'User detail'}}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
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
