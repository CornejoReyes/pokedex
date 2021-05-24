import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
  public static async get(key: string): Promise<any> {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? this._decode(value) : null;
    } catch (error) {
      console.log(`Error reading key ${key}`, error);
    }
  }

  public static async set(key: string, value: any): Promise<void> {
    try {
      await AsyncStorage.setItem(key, this._encode(value));
    } catch (error) {
      console.log(`Error writing key ${key}`, error);
    }
  }

  private static _decode(val: string) {
    return JSON.parse(val);
  }

  private static _encode(val: any) {
    return JSON.stringify(val);
  }
}
