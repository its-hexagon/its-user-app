import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

const kakaoClientId = 'a9f814539b8888f936555111dfd86df7a';
const redirectUri = 'https://its-edu.site/login/oauth2/code/kakao';

const discovery = {
  authorizationEndpoint: 'https://kauth.kakao.com/oauth/authorize',
  tokenEndpoint: 'https://kauth.kakao.com/oauth/token',
};

export const KakaoLogin = async (navigation) => {
  try {
    // 카카오 로그인 페이지로 이동
    const authUrl = `${discovery.authorizationEndpoint}?client_id=${kakaoClientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code`;
    console.log(authUrl);
    const result = await AuthSession.startAsync({ authUrl });

    if (result.type === 'success') {
      // 인증 코드로 액세스 토큰 요청
      const tokenResponse = await fetch(discovery.tokenEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=authorization_code&client_id=${kakaoClientId}&redirect_uri=${encodeURIComponent(redirectUri)}&code=${result.params.code}`,
      });

      // Set-Cookie 헤더에서 accessToken 및 refreshToken 추출
      const cookieHeader = tokenResponse.headers.get('Set-Cookie');
      if (cookieHeader) {
        const cookies = cookieHeader.split(';').map(cookie => cookie.trim());
        let accessToken = null;
        let refreshToken = null;

        cookies.forEach(cookie => {
          if (cookie.startsWith('accessToken=')) {
            accessToken = cookie.replace('accessToken=', '');
          } else if (cookie.startsWith('refreshToken=')) {
            refreshToken = cookie.replace('refreshToken=', '');
          }
        });

        // accessToken과 refreshToken이 존재하는지 확인
        if (accessToken && refreshToken) {
          // 토큰을 AsyncStorage에 저장
          const authState = { accessToken, refreshToken };
          await AsyncStorage.setItem('authState', JSON.stringify(authState));

          console.log('로그인 성공 - accessToken:', accessToken);
          navigation.navigate('Home'); // 로그인 성공 후 Home 화면으로 이동
        } else {
          console.error('토큰 추출 실패');
        }
      } else {
        console.error('Set-Cookie 헤더가 없습니다.');
      }
    } else {
      console.log('카카오 로그인 실패:', result);
    }
  } catch (error) {
    console.error('카카오 로그인 중 에러 발생:', error);
  }
};