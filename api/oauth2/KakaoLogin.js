import { startAsync, makeRedirectUri } from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Linking, Alert } from 'react-native';

export const KakaoLogin = async (navigation) => {
  try {
    const kakaoLoginUrl = 'https://its-edu.site/oauth2/authorization/kakao';
    
    const redirectUri = makeRedirectUri({ useProxy: true });
    const authUrl = `https://its-edu.site/oauth2/authorization/kakao?redirect_uri=${redirectUri}`;
    
    // OAuth 로그인 요청 시작
    const result = await startAsync({ kakaoLoginUrl });
    
    // response 데이터를 콘솔에 출력 (서버에서 response를 받은 후 로직)
    // console.log('Kakao Login Response:', result); 
    // todo

    // 예시로 response에서 토큰 값을 추출 후 AsyncStorage에 저장
    const accessToken = result['Set-Cookie'].split('accessToken=')[1].split(';')[0];
    const refreshToken = result['Set-Cookie'].split('refreshToken=')[1].split(';')[0];

    // 토큰을 AsyncStorage에 저장
    await AsyncStorage.setItem('accessToken', accessToken);
    await AsyncStorage.setItem('refreshToken', refreshToken);

    console.log('Access Token:', accessToken);
    console.log('Refresh Token:', refreshToken);

    // 로그인 성공 후 홈 화면으로 이동
    navigation.navigate('Home');
  } catch (error) {
    console.error('카카오 로그인 중 에러 발생:', error);
    Alert.alert('로그인 실패', '카카오 로그인에 실패했습니다. 다시 시도해주세요.');
  }
};
