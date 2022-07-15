import { ChangeEvent } from "react";

import "./SearchBox.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  handleChange,
}: SearchBoxProps) => {
  return (
    <input
      className={`search ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
