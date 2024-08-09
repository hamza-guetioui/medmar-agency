import fr from "./fr.json";
import en from "./en.json";

// // Define the available languages
// type AvailableLanguages = "en" | "fr";

// Define the structure of the translations object
type Translations = Record<string, Record<string, string>>;

const translations: Translations = {
  en,
  fr,
};

// const translations = {
//   fr,
// };
export default translations;
