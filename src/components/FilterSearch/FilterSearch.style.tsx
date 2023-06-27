export const customBox = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const customBoxAdornment = {
  position: "relative",
  display: "flex",
  "& > .MuiAutocomplete-endAdornment": {
    position: "relative",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
};

export const customTextField = {
  maxWidth: 800,
  caretColor: "rgb(255 255 255)",
  WebkitTextFillColor: "rgb(255 255 255)",
  fieldset: {
    span: { paddingRight: "8px" },
    borderColor: "rgb(255 255 255 / 50%)",
    borderWidth: "1px !important",
  },
  ".MuiButtonBase-root": { color: "rgb(255 255 255 / 50%)" },
  ".MuiInputBase-root": {
    fontSize: 14,
    color: "rgb(255 255 255)",
    paddingRight: "8px !important",
    "&.Mui-focused .MuiButtonBase-root": { color: "#1976d2" },
    "&:hover": {
      fieldset: { borderColor: "rgb(255 255 255)" },
      ".MuiButtonBase-root": { color: "rgb(255 255 255)" },
      "&.Mui-focused fieldset": { borderColor: "#1976d2" },
      "&.Mui-focused .MuiButtonBase-root": { color: "#1976d2" },
    },
  },
  ":hover": {
    ".MuiFormLabel-root": {
      color: "rgb(255 255 255)",
      WebkitTextFillColor: "rgb(255 255 255)",
    },
    ".MuiFormLabel-root.Mui-focused": {
      color: "#1976d2",
      WebkitTextFillColor: "#1976d2",
    },
  },
  ".MuiFormLabel-root": {
    color: "rgb(255 255 255 / 50%)",
    WebkitTextFillColor: "rgb(255 255 255 / 50%)",
    "&.Mui-focused": { color: "#1976d2", WebkitTextFillColor: "#1976d2" },
  },
};

export const customListItem = {
  minHeight: "30px !important",
  p: "3px 16px !important",
  "&:hover, &.Mui-focused": { bgcolor: "rgb(25 118 210 / 20%) !important" },
};

export const customAcordion = {
  bgcolor: "transparent",
  "::before": { display: "none" },
  ".MuiAccordionSummary-root": { minHeight: "0 !important", height: 0 },
  ".MuiAccordionDetails-root": { color: "rgb(255 255 255 / 50%)" },
  ".MuiFormControlLabel-root .MuiTypography-root": { fontSize: 13 },
};
