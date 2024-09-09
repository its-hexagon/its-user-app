import { Alert } from 'react-native';

const ShowSaveAlert = (onSave) => {
  Alert.alert(
    '해당 문제를 저장하시겠습니까?',
    '저장하면 ~~~할 수 있습니다.',
    [
      {
        text: '취소',
        style: 'cancel',
      },
      {
        text: '저장',
        style: 'destructive',
        onPress: onSave,
      },
    ],
    { cancelable: true }
  );
};

export default ShowSaveAlert;
