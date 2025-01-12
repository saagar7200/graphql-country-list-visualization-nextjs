import React, { forwardRef } from 'react';

export interface IOption {
    label: string;
    value: string;
}

interface SelectInputProps {
  options: IOption[];
  label: string;
  value: string;
  onChange: (value: string) => void;
}

 const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  ({ options, value, onChange }, ref) => {
    return (
      <div className="relative mr-4 w-full md:max-w-[300px]">
        <select
          ref={ref} 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 appearance-none"
        >
          {options.map((option, index) => (
            <option key={index} value={option.value} className="text-gray-700">
              {option.label}
            </option>
          ))}
        </select>
        {/* Custom arrow for select dropdown */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    );
  }
);

SelectInput.displayName = 'SelectInput'; 

export default SelectInput;