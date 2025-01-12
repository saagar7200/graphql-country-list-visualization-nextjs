

import { ContinentsQuery, Country } from "@/interfaces";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const generateChartDataByContinents = (continentsData:ContinentsQuery[]) => {
    // Extract continent names and country counts
    const continentNames = continentsData.map((continent:ContinentsQuery) => continent.name);
    const countryCounts = continentsData.map(
      (continent) => continent.countries?.length || 0
    );
  
    return {
      continentNames,
      countryCounts,
    };
  };

export function generateScatterPlotData(countriesList:Country[]) {
    // Prepare data for scatter plot
    const scatterData = countriesList.map((country, index) => {
      // x: index (or country name), y: number of languages spoken
      return {
        x: index,  // You can replace this with country.name if you prefer
        y: country.languages.length,
        country: country.name, // For displaying tooltips or labels
        languages: country.languages.join(", "), // To show languages in tooltips
      };
    });
  
    return scatterData;
  }


  export const generateLangChartDataByContinents = (continentsData:ContinentsQuery[]) => {
    const continentNames = continentsData.map((continent) => continent.name);
    const languageCounts = continentsData.map((continent) => {
      const languagesSet = new Set(); // Use a Set to count unique languages
      continent.countries?.forEach((country) => {
        country.languages?.forEach((language) => {
          languagesSet.add(language.name);
        });
      });
      return languagesSet.size; // Return unique language count per continent
    });
  
    return {
      continentNames,
      languageCounts,
    };
  };