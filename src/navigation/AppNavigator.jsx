import 'react-native-gesture-handler';

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../pages/Home/Home';
import AddUser from '../pages/AddUser/AddUser';
import UpdateUser from '../pages/UpdateUser/UpdateUser';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="addUser" component={AddUser} />
        <Stack.Screen name="updateUser" component={UpdateUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
