import React, { useState, useRef } from 'react';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginWebView = ({ navigation, route }) => {
  const webviewRef = useRef(null);
  const [currentUrl, setCurrentUrl] = useState('');

  // route.params에서 provider를 추출
  const { provider } = route.params;

  const loginUrl = `https://its-edu.site/oauth2/authorization/${provider}`;

  const onNavigationStateChange = (navState) => {
    setCurrentUrl(navState.url);
  };

  // 인증 성공 URL 감지
  const onLoadEnd = () => {
    if (currentUrl.includes('/loginSuccess')) {
      const injectedJavaScript = `
        (function() {
          var responseText = document.body.innerText;
          window.ReactNativeWebView.postMessage(responseText);
        })();
      `;
      webviewRef.current.injectJavaScript(injectedJavaScript);
    }
  };

  // 토큰 저장
  const storeTokens = async (accessToken, refreshToken) => {
    try {
      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('refreshToken', refreshToken);
    } catch (e) {
      console.error('토큰 저장 실패:', e);
    }
  };

  const onMessage = async (event) => {
    const data = event.nativeEvent.data;
    try {
      const response = JSON.parse(data);
      if (response.isSuccess && response.data) {
        const { accessToken, refreshToken } = response.data;
        await storeTokens(accessToken, refreshToken);
        navigation.navigate('Home');
      }
    } catch (e) {
      console.error('WebView로부터의 데이터 파싱 오류:', e);
    }
  };

  return (
    <WebView
      ref={webviewRef}
      source={{ uri: loginUrl }}
      onNavigationStateChange={onNavigationStateChange}
      onLoadEnd={onLoadEnd}
      onMessage={onMessage}
    />
  );
};

export default LoginWebView;
