"use client";

import SelectInput, { IOption } from "@/components/inputs/select-input";
import { GET_CONTINENT, GET_CONTINENTS } from "@/graphql/queries";
import { ContinentQuery, Country } from "@/interfaces";
import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import CountryTable from "./country-table";

type Props = {
  data: Country[];
  continent: string;
};

const CountryList: React.FC<Props> = ({}) => {
  const [filter, setFilter] = useState<string>("");
  const [selectedContinent, setSelectedContinent] = useState("AS");
  const { data: continentsData } = useQuery(GET_CONTINENTS);
  const { data: continentData } = useQuery(GET_CONTINENT, {
    variables: { code: selectedContinent },
  });

  const continent: ContinentQuery = continentData?.continent;
  const countries: Country[] = continent?.countries;

  const options: IOption[] = continentsData?.continents.map(
    (continent: ContinentQuery) => {
      return {
        label: continent.name,
        value: continent.code,
      };
    }
  );

  const onChange = (value: string) => {
    setSelectedContinent(value);
  };

  // Handle filter input change
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value.toLowerCase());
  };

  // Filter the countries based on the filter text
  const filteredCountries = countries?.filter(
    (country: Country) =>
      country.name.toLowerCase().includes(filter) ||
      country?.currency?.toLowerCase().includes(filter)
  );

  return (
    <div className="overflow-x-auto mt-10 px-3 pb-3">
      <div className="flex flex-col gap-3">
        {/* select */}

        <div className="pt-3  lg:px-0">
          <span className="text-gray-600">Select Continent</span>
          <SelectInput
            options={options || []}
            label="Select Continent"
            value={selectedContinent}
            onChange={onChange}
          />
        </div>

        <div className="mb-4  flex w-full justify-between items-center">
          <h2 className="text-2xl font-bold ">
            Countries in {continent?.name}{" "}
          </h2>

          {/* Filter Input */}
          <div className=" min-w-[300px]">
            <input
              type="text"
              placeholder="Search by Country Name, Currency"
              className="placeholder:text-sm p-2 border border-gray-300 rounded-md w-full"
              value={filter}
              onChange={handleFilterChange}
            />
          </div>
        </div>
      </div>
      <CountryTable continent={continent} countries={filteredCountries} />
    </div>
  );
};

export default CountryList;
