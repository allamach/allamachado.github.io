import React from "react";
import "./experience.css";
import ExperienceDataLeft from "./LeftExperienceData";
import ExperienceDataRight from "./ExperienceDataRight";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">{t("experience.title")}</h2>
      <span className="section__subtitle">{t("experience.subtitle")}</span>

      <div className="experience__container container">
          <div className="experience__content">
            <ExperienceDataLeft title={t("experience.job4")} subtitle="Mercado Livre Brazil" calendar="09/2024 - Present" />
            <ExperienceDataRight title={t("experience.job3")} subtitle="Jaguar Land Rover" calendar="11/2022 - 04/2024" />
            <ExperienceDataLeft title={t("experience.job2")} subtitle="Ford Motor Company" calendar="10/2011 - 08/2022" />
            <ExperienceDataLeft title={t("experience.job1")} subtitle="Bridgestone Brazil" calendar="05/2009 - 10/2011" />
          </div>
        </div>
    </section>
  );
};

export default Experience;
