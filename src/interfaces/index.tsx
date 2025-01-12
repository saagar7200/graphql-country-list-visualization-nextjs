// Reusable types for common structures
export interface Language {
    code: string;
    name: string;
    native: string;
    rtl: boolean;
  }
  
  export interface State {
    code: string;
    name: string;
  }
  
  export interface Country {
    code: string;
    name: string;
    native: string;
    phone: string;
    emoji: string;
    emojiU: string;
    currency: string | null;
    languages: Language[];
    states: State[];
  }
  
  // Queries
  
  export interface CountriesQuery {
    countries: Country[];
  }
  
  export interface CountryQuery {
    country: Country | null; // `country` can be null if the code doesn't match any country.
  }
  
  export interface ContinentsQuery {
   
      code: string;
      name: string;
      countries: Country[];
  
  }
  
  export interface ContinentQuery {
  
      code: string;
      name: string;
      countries: Country[];
    }
  
  export interface LanguagesQuery {
    languages: Language[];
  }
  
  export interface LanguageQuery {
    language: Language | null; // `language` can be null if the code doesn't match any language.
  }
  