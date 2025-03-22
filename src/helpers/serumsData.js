import i18n from "../i18n";
import { serumsImages } from "./serumsImages";

const getSerumsData = () => {
  const currentLang = i18n.language || "fi";
  const serumsData = i18n.getResource(currentLang, "serumsData");

  return Object.keys(serumsData).map((key) => {
    const images = serumsImages[key] || {}; 

    return {
      ...serumsData[key],
      images,
    };
  });
};

export default getSerumsData;
