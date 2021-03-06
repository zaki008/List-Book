import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value: string) => {
  try {
    await AsyncStorage.setItem('APP_AUTH_TOKEN', value);
  } catch (e: any) {
    console.log(e.message);
  }
};

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('APP_AUTH_TOKEN');
    if (value !== null) {
      return value;
    }
  } catch (e: any) {
    console.log(e.message);
  }
};

export const removeDataLocal = async () => {
  try {
    await AsyncStorage.removeItem('APP_AUTH_TOKEN');
  } catch (e: any) {
    console.log(e);
  }
};
