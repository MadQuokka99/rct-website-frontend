import LocalizedStrings from "react-localization";
import homepage from "./strings/homepage";
import general from "./strings/general";

export default new LocalizedStrings({
  en: {
    ...general.en,
    ...homepage.en,
  },
});
