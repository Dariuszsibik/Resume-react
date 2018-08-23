import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import Backend from 'i18next-xhr-backend';

//const path = require('path');

i18n
    .use(Backend)
    .use(reactI18nextModule)
    .init({
        fallbackLng: 'en',

        ns: ['translations'],
        defaultNS: 'translations',

        debug: false,

        /*
            backend: {
              loadPath: path.join(__dirname, 'Resume-react/locales/{{lng}}/{{ns}}.json'),
              addPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.missing.json')
           },
        */

        react: {
            wait: true
        }
    });


export default i18n;