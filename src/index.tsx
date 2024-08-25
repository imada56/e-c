import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App.tsx';
import { Context } from './component/Context';
//import Store from './Redux/Store/Store.tsx';
import { Provider } from 'react-redux';
import App from './App';
import Store from './Redux/Store/Store';


import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
 import LanguageDetector from 'i18next-browser-languagedetector';
 import TranslationEN from './Locale/en.json';
 import TranslationAR from './Locale/ar.json';
 import TranslationFR from './Locale/fr.json';
const resources = {
  en: {
    translation:TranslationEN
  },
  ar: {
    translation:TranslationAR
  },
  fr: {
    translation:TranslationFR
  }
};

i18n
   .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // initial language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react :{
        useSuspense :false
    }
  });

  export default i18n;



const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Provider store={Store}>
    <Context>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Context>
    </Provider>
  );
} else {
  console.error('Failed to find the root element');
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
