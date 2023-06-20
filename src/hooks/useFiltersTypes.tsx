import { Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { VscBlank } from "react-icons/vsc";
import { useLocation, useNavigate } from "react-router-dom";

interface FilterTypes {
  /**
   * The status filter value. It can be one of the following: "alive", "dead", "unknown", or null.
   */
  status: "alive" | "dead" | "unknown" | null;
  /**
   * The gender filter value. It can be one of the following: "female", "male", "genderless", "unknown", or null.
   */
  gender: "female" | "male" | "genderless" | "unknown" | null;
}

interface CheckboxFilterProps {
  /**
   * The label or title of the checkbox filter. It can be one of the following: "alive", "dead", "female", "male", "genderless", or "unknown".
   */
  label: "alive" | "dead" | "female" | "male" | "genderless" | "unknown";
  /**
   * The filter type that the checkbox represents. It can be either "status" or "gender".
   */
  filter: "status" | "gender";
}

export const useFiltersTypes = () => {
  const [isChecked, setIsChecked] = useState<FilterTypes>({
    status: null,
    gender: null,
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);

    setIsChecked({
      status: (query.get("status") as FilterTypes["status"]) || null,
      gender: (query.get("gender") as FilterTypes["gender"]) || null,
    });
  }, [location.search]);

  /**
   * Handles the checked event for location filters.
   * @param event The event object.
   * @param filter The type of filter, either "status" or "gender".
   */
  function handleCheckedLocation(
    event: ChangeEvent<HTMLInputElement>,
    filter: "status" | "gender"
  ) {
    let active = event.target.name;

    const query = new URLSearchParams(location.search);
    query.delete("page");

    if (active === isChecked[filter]) {
      // If the active value is the same as the current filter value, remove the filter from the query
      active = "";
      query.delete(filter);
    } else {
      // If the active value is different, set the filter value in the query
      query.set(filter, active);
    }

    // Navigate to the updated query string or the home page if the query is empty
    navigate(query.toString() !== "" ? `?${query.toString()}` : "/");
  }

  /**
   * CheckboxFilter component.
   * @param label The label for the checkbox.
   * @param filter The type of filter, either "status" or "gender".
   */
  const CheckboxFilter: FunctionComponent<CheckboxFilterProps> = ({
    label,
    filter,
  }) => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            color="success"
            checked={isChecked[filter] === label.toLowerCase()}
            onChange={(e) => handleCheckedLocation(e, filter)}
            name={label.toLowerCase()}
            icon={<VscBlank />}
            checkedIcon={<FiCheck />}
            size="small"
          />
        }
        label={label.charAt(0).toUpperCase() + label.toLowerCase().slice(1)}
      />
    );
  };

  return {
    CheckboxFilter,
  };
};
