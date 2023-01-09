import {NativeModules, Platform} from 'react-native';

// language detection

const phoneLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier;

let locale = '';
for (const key of phoneLanguage) {
  if (key === '_') {
    break;
  }
  locale += key;
}
export {locale};
