export const customTextField = {
  maxWidth: 800,
  fieldset: { borderColor: "rgb(255 255 255 / 50%)" },
  ".MuiButtonBase-root": { color: "rgb(255 255 255 / 50%)" },
  ".MuiInputBase-root": { color: "rgb(255 255 255)" },
  ":hover": {
    ".MuiFormLabel-root": { color: "rgb(255 255 255)" },
    ".MuiFormLabel-root.Mui-focused": { color: "#1976d2" },
  },
  ".MuiFormLabel-root": {
    color: "rgb(255 255 255 / 50%)",
    "&.Mui-focused": { color: "#1976d2" },
  },
  ".MuiInputBase-root:hover": {
    fieldset: { borderColor: "rgb(255 255 255)" },
    "&.Mui-focused fieldset": { borderColor: "#1976d2" },
    "& .MuiButtonBase-root": { color: "rgb(255 255 255)" },
    "&.Mui-focused .MuiButtonBase-root": { color: "#1976d2" },
  },
  ".MuiInputBase-root.Mui-focused .MuiButtonBase-root": {
    color: "#1976d2",
  },
};

export const customAcordion = {
  bgcolor: "transparent",
  "::before": { display: "none" },
  ".MuiAccordionSummary-root": { minHeight: "0 !important", height: 0 },
  ".MuiAccordionDetails-root": { color: "rgb(255 255 255 / 50%)" },
  ".MuiFormControlLabel-root .MuiTypography-root": { fontSize: 13 },
};
