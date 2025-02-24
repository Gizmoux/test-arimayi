import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    fr: {
      home: {
        accueil: "Accueil",
        candidat: "Candidat",
        recruteur: "Recruteur",
        presentation_titre: "Présentation de mon application",
        presentation_description:
          "Voici la présentation de mon application. Vous avez deux liens pour vous rendre sur des pages différentes, la page des candidats et la page des recruteurs.",
      },
    },
    en: {
      home: {
        accueil: "Home",
        candidat: "Candidate",
        recruteur: "Recruiter",
        presentation_titre: "Presentation of my application",
        presentation_description:
          "Here is the presentation of my application. You have two links to navigate to different pages, the candidates page and the recruiters page.",
      },
    },
  },
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
