import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./pages/Start";
import Login from "./pages/Login";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Start" component={Start} />
    </Stack.Navigator>
  );
};
export default App;
