

import { ContinentQuery, Country } from "@/interfaces";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const generateChartDataByContinents = (continentsData:ContinentQuery[]) => {
    // Extract continent names and country counts
    const continentNames = continentsData.map((continent:ContinentQuery) => continent.name);
    const countryCounts = continentsData.map(
      (continent) => continent.countries?.length || 0
    );
  
    return {
      continentNames,
      countryCounts,
    };
  };


export function generateScatterPlotData(countriesList:Country[]) {
    // Prepare data for scatter  and mixed chart plot
    const chartData = countriesList.map((country) => {
      return {
        x: country.name, 
        y: country.languages.length || 0,
        country: country.name, 
        states: country.states.length || 0,
        languages: country.languages.map((lang) => lang.name).join(', '), 
      };
    });
  
    return chartData;
  }


  export const generateLangChartDataByContinents = (continentsData:ContinentQuery[]) => {
    const continentNames = continentsData.map((continent) => continent.name);
    const languageCounts = continentsData.map((continent) => {
      const languagesSet = new Set(); 
      continent.countries?.forEach((country) => {
        country.languages?.forEach((language) => {
          languagesSet.add(language.name);
        });
      });
      return languagesSet.size || 0; 
    });
  
    return {
      continentNames,
      languageCounts,
    };
  };