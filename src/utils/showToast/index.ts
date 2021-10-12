import Toast from 'react-native-toast-message';

export const showToast = (titleError?: string, messageError?: string) => {
  let text1 = 'Hello';
  let text2 = 'This is some something 👋';
  return Toast.show({
    type: 'error',
    text1: titleError || text1,
    text2: messageError || text2,
  });
};
