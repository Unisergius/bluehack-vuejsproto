import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import './index.css'
import App from './App.vue'
import router from './router/index.ts'

// Import translation files
import en_loc from './i18n/en.json'
import pt_loc from './i18n/pt.json'

const i18n = createI18n({
    // something vue-i18n options here ...
    locale: 'pt', // set locale
    fallbackLocale: 'pt', // set fallback locale
    // warnHtmlInMessage: "off",
    keySeparator: '.',
    messages: {
        en: en_loc,
        pt: pt_loc
    }
  })

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app');