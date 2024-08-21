module.exports = {
  parser: '@typescript-eslint/parser', // TypeScript 파일을 파싱하기 위해 필요한 파서
  extends: [
    'eslint:recommended', // ESLint 기본 추천 규칙 사용
    'plugin:react/recommended', // React 관련 규칙 사용
    'plugin:@typescript-eslint/recommended', // TypeScript 관련 규칙 사용
    'prettier', // Prettier와 충돌하는 ESLint 규칙 비활성화
  ],
  plugins: [
    'react', // React 관련 플러그인
    '@typescript-eslint', // TypeScript 관련 플러그인
    'prettier', // Prettier 플러그인
  ],
  rules: {
    'prettier/prettier': 'error', // Prettier 규칙 위반 시 ESLint 오류로 처리
  },
  settings: {
    react: {
      version: 'detect', // 사용 중인 React 버전 자동 감지
    },
  },
};
