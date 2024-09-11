import { Platform, Alert } from 'react-native';

const ShowSaveAlert = (isSaved, onSave, onUnsave) => {
  if (isSaved) {
    Alert.alert(
      '해당 문제를 저장 취소 하시겠습니까?',
      '',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '저장 취소',
          style: 'destructive',
          onPress: onUnsave,  // 저장 취소
        },
      ],
      { cancelable: true }
    );
  } else {
    Alert.alert(
      '해당 문제를 저장하시겠습니까?',
      '저장하면 오답노트에서 복습할 수 있습니다.',
      Platform.OS === 'ios'
        ? [
            {
              text: '취소',
              style: 'destructive', // 빨간색 버튼
            },
            {
              text: '저장',
              style: 'cancel', // 파란색 Bold 버튼
              onPress: onSave,  // 저장
            },
          ]
        : [
            {
              text: '저장',
              style: 'cancel', // 파란색 Bold 버튼
              onPress: onSave,  // 저장
            },
            {
              text: '취소',
              style: 'destructive', // 빨간색 버튼
            },
          ],
      { cancelable: true }
    );
  }
};

export default ShowSaveAlert;
