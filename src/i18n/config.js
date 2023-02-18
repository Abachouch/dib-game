import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en.json'
import ar from './locales/ar.json'
i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        resources: {
            en,
            ar,
        }
    })
i18next.languages = ['en' , 'ar']
document.documentElement.lang = i18next.language  // <---- this line right here
i18next.on('languageChanged' , (lng)=> {
    document.documentElement.setAttribute('lang', lng);
})