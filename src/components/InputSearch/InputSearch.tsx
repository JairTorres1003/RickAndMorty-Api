import { TextField } from "@mui/material";
import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface InputSearchProps {
  label?: ReactNode;
  placeholder?: string;
}

const InputSearch: FunctionComponent<InputSearchProps> = ({
  label,
  placeholder = "Search",
}) => {
  const [value, setValue] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    setValue(query.get("name") || "");
  }, []);

  /**
   * Updates the search value and navigates to the corresponding URL.
   * @param searchValue The new search value.
   */
  function handleChangeValue(searchValue: string) {
    setValue(searchValue);

    const query = new URLSearchParams(location.search);
    query.delete("page");
    query.set("name", searchValue);
    navigate(`?${query.toString()}`);
  }

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      type="search"
      sx={{ maxWidth: 800 }}
      fullWidth
      value={value}
      onChange={(e) => handleChangeValue(e.target.value)}
    />
  );
};

export default InputSearch;
