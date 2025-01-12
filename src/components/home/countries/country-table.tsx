import { ContinentQuery, Country } from "@/interfaces";
import React from "react";

type Props = {
  countries: Country[];
  continent: ContinentQuery;
};

const CountryTable = (props: Props) => {
  const { countries, continent } = props;
  return (
    <div className="h-[700px] overflow-y-auto pb-4">
      <table className="min-w-full table-auto pb-2">
        <thead className="sticky top-0">
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2 font-semibold">Country</th>
            <th className="px-4 py-2 font-semibold">Native Name</th>
            <th className="px-4 py-2 font-semibold">Currency</th>
            <th className="px-4 py-2 font-semibold">Phone Code</th>
            <th className="px-4 py-2 font-semibold">National Flag</th>
          </tr>
        </thead>

        <tbody className="">
          {countries?.length > 0 ? (
            countries.map((country) => (
              <tr
                key={country.code}
                className="cursor-pointer border-t hover:bg-gray-100 hover:text-black"
              >
                <td className="px-4 py-2">{country.name}</td>
                <td className="px-4 py-2">{country.native}</td>
                <td className="px-4 py-2">{country.currency}</td>
                <td className="px-4 py-2">+{country.phone}</td>
                <td className="px-4 py-2">{country.emoji}</td>
              </tr>
            ))
          ) : (
            <tr className="h-full">
              <td colSpan={5} className=" text-center px-4 py-2 h-full">
                No countries found in{" "}
                <span className="font-bold italic">{continent?.name}</span>.Try
                Changing the Continent.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CountryTable;
