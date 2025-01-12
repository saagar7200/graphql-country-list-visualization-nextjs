import { Country } from '@/interfaces';
import React, { useState } from 'react';

type Props = {
  data: Country[];
  continent: string;
};

const CountryList: React.FC<Props> = ({ data,continent }) => {
  const [filter, setFilter] = useState<string>(''); // Store the filter text

  // Handle filter input change
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value.toLowerCase());
  };

  // Filter the countries based on the filter text
  const filteredCountries = data.filter(
    (country) =>
      country.name.toLowerCase().includes(filter) ||
      country?.currency?.toLowerCase().includes(filter) 
  );

  return (
    <div className="overflow-x-auto mt-10 px-3 min-h-[600px]">
      <div className="mb-4 flex w-full justify-between">
        <h2 className="text-2xl font-bold mb-4">{continent} Countries List </h2>

        {/* Filter Input */}
        <div className="mb-4 min-w-[300px]">
          <input
            type="text"
            placeholder="Search by Country Name, Currency"
            className="placeholder:text-sm p-2 border border-gray-300 rounded-md w-full"
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
      </div>

      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2 font-semibold">Country</th>
            <th className="px-4 py-2 font-semibold">Native Name</th>
            <th className="px-4 py-2 font-semibold">Currency</th>
            <th className="px-4 py-2 font-semibold">Phone</th>
            <th className="px-4 py-2 font-semibold">Emoji</th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <tr
                key={country.code}
                className="cursor-pointer border-t hover:bg-gray-100 hover:text-black"
              >
                <td className="px-4 py-2">{country.name}</td>
                <td className="px-4 py-2">{country.native}</td>
                <td className="px-4 py-2">{country.currency}</td>
                <td className="px-4 py-2">{country.phone}</td>
                <td className="px-4 py-2">{country.emoji}</td>
              </tr>
            ))
          ) : (
            <tr className='h-full'>
              <td colSpan={5} className=" text-center px-4 py-2 h-full">
                No countries found in <span className='font-bold italic'>{continent}</span>. Try Changing Continent.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CountryList;
