// KakaoLogin.js
import React from 'react';
import { WebView } from 'react-native-webview';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';

const KakaoLogin = ({ navigation }) => {
  console.log('kakao');
  return (
    <SafeAreaView className="flex-1">
      <WebView
        source={{ uri: 'https://its-edu.site/oauth2/authorization/kakao' }}
        startInLoadingState={true}
        renderLoading={() => (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="#000" />
          </View>
        )}
        onNavigationStateChange={(event) => {
          console.log('Navigating to:', event.url);
          // if (event.url.includes('yourapp://callback')) {
          //   // 여기에서 리다이렉트 URL을 통해 인증 토큰을 받을 수 있다면 처리
          //   navigation.navigate('Home');
          // }
        }}
      />
    </SafeAreaView>
  );
};
// className="flex-1 justify-center items-center"
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default KakaoLogin;
