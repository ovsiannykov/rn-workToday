import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import english from './eng.json'
import ukraine from './ukr.json'
import poland from './pol.json'

i18next.use(initReactI18next).init({
  lng: 'ua',
  compatibilityJSON: 'v3',
  resources: {
    en: english,
    ua: ukraine,
    pl: poland
  },
  react: {
    useSuspense: false,
  }
}).then( r => console.log('i18next'));
export default i18next;
