export interface DropdownOption {
    value: string;
    label: string;
  }

  export interface DropdownProps {
    onChange: (option: DropdownOption) => void;
  }