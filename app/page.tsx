"use client";
import { Button } from "antd";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t, i18n } = useTranslation("home");
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    console.log(i18n);
  };
  return (
    <div>
      <div>
        <Button type="primary" className="m-4">
          {t("accueil")}
        </Button>

        <Button type="link" href="candidates">
          {t("candidat")}
        </Button>
        <Button type="link" href="recruiters">
          {t("recruteur")}
        </Button>
      </div>
      <div>
        <h1>{t("presentation_titre")}</h1>
        <p>{t("presentation_description")}</p>
      </div>
      <Button onClick={() => changeLanguage("fr")}>Français</Button>
      <Button onClick={() => changeLanguage("en")}>English</Button>
    </div>
  );
}
