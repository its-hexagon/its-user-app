import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import { NavigationContainer } from '@react-navigation/native';
import Start from './pages/Start';
import Login from './pages/Login';
import Home from './pages/Home';
import SelectMode from './pages/SelectMode';
import SelectSubject from './pages/cbt/SelectSubject';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Mode" component={SelectMode} />
      <Stack.Screen name="CbtSubject" component={SelectSubject} />
    </Stack.Navigator>
  );
};
export default App;
