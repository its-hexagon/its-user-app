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
import CbtGrade from './pages/cbt/CbtGrade';
import SelectLearningMajor from './pages/learning/SelectLearningMajor';
import SelectLearningMinor from './pages/learning/SelectLearningMinor';
import LearningStart from './pages/learning/LearningStart';
import LearningTest from './pages/learning/LearningTest';
import SelectReviewMajor from './pages/review/SelectReviewMajor';

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
      <Stack.Screen name="CbtGrade" component={CbtGrade} />
      <Stack.Screen name="LearningMajor" component={SelectLearningMajor} />
      <Stack.Screen name="LearningMinor" component={SelectLearningMinor} />
      <Stack.Screen name="LearningStart" component={LearningStart} />
      <Stack.Screen name="LearningTest" component={LearningTest} />
      <Stack.Screen name="ReviewMajor" component={SelectReviewMajor} />
    </Stack.Navigator>
  );
};
export default App;
