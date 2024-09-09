import { Alert } from 'react-native';

const ShowExitAlert = (onExit) => {
  Alert.alert(
    '모의고사를 종료하고 나가시겠습니까?',
    '',
    [
      {
        text: '취소',
        style: 'destructive',
      },
      {
        text: '나가기',
        onPress: onExit,
      },
    ],
    { cancelable: true }
  );
};

export default ShowExitAlert;
