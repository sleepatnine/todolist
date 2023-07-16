import './Dropdown.css'

import React, { useState } from "react";
import Select from "react-select";

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  defaultValue: DropdownOption;
  onChange: (option: DropdownOption) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({options, defaultValue ,onChange }) => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption>(
    defaultValue 
  );

  const handleOptionChange = (selectedOption: DropdownOption | null) => {
    setSelectedOption(selectedOption as DropdownOption);
    onChange(selectedOption as DropdownOption);
  };

  return (
    <Select
      className="dropdown"
      options={options}
      onChange={handleOptionChange}
      value={selectedOption}
      isSearchable={false}
      placeholder="All"
    />
  );
};
