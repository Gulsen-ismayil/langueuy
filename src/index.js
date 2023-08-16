import React from 'react';
import ReactDOM from 'react-dom/client';
import global_en from'./translations/en.json'
import global_fr from'./translations/fr.json'
import global_ur from'./translations/ur.json'
import global_ch from'./translations/ch.json'
import i18next from 'i18next';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation:{escapeValue: false},
  lng:"en",
  resources:{
    en:{
      global: global_en,
    },
    fr:{
      global: global_fr,
    },
    ur:{
      global: global_ur,
    },
    ch:{
      global: global_ch,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

