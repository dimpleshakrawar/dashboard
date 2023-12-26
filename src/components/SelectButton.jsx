import { PropTypes } from "prop-types";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

export default function SelectButton({
  handleChange,
  label,
  menuData,
  fullWidth,
  defaultValue,
}) {
  return (
    <FormControl sx={{ m: 1 }} fullWidth={fullWidth} size="small">
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name="buttonLabel"
        label="Age"
        onChange={handleChange}
        defaultValue={defaultValue || ""}
      >
        {menuData.map((num) => (
          <MenuItem key={num} value={num}>
            {num}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

SelectButton.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  menuData: PropTypes.array,
  fullWidth: PropTypes.bool,
  defaultValue: PropTypes.string,
};
