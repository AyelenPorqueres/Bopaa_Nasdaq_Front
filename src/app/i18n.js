import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "ENGLISH",
        resources: {
                    ENGLISH: {
                        translation: {
                            titlePie: "Company's participation in stock market",
                            subtitleFooter1: "Copyright",
                            subtitleFooter2: "All right reserved",
                            buttons: {
                                index: "INDEX",
                                spanish: "SPANISH",
                                english: "ENGLISH",
                                day: "Day",
                                month: "Month",
                               
                            },
                    },
                },
                    SPANISH: {
                        translation: {
                            titlePie: "Participación de la empresa en bolsa",
                            subtitleFooter1: "Derechos de autor",
                            subtitleFooter2: "Todos los derechos reservados",
                            buttons: {
                                index: "INDICE",
                                spanish: "ESPAÑOL",
                                english: "INGLES",
                                day: "Día",
                                month: "Mes",
                               
                            },
                        }
                    }
        }
    });