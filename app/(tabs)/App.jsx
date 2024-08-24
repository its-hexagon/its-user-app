import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import { NavigationContainer } from '@react-navigation/native';
import Start from './pages/Start';
import Login from './pages/Login';
import Home from './pages/Home';
import SelectMode from './pages/SelectMode';
import Mypage from './pages/MyPage';
import SelectCbtSubject from './pages/cbt/SelectCbtSubject';
import SelectCbtType from './pages/cbt/SelectCbtType';
import CbtTestStart from './pages/cbt/CbtTestStart';
import CbtTest from './pages/cbt/CbtTest';

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
      <Stack.Screen name="Mypage" component={Mypage} />
      <Stack.Screen name="CbtSubject" component={SelectCbtSubject} />
      <Stack.Screen name="CbtType" component={SelectCbtType} />
      <Stack.Screen name="CbtTestStart" component={CbtTestStart} />
      <Stack.Screen name="CbtTest" component={CbtTest} />
    </Stack.Navigator>
  );
};
export default App;
