export const customGrid = {
  justifyContent: "center",
  ".MuiGrid-item": { flexGrow: 0, maxWidth: 150 },
  ".MuiTypography-root.title": { fontSize: 13, textAlign: "center" },
  ".MuiDivider-root": { mt: "2px" },
  ".MuiListItem-root": { p: "0 16px", height: 22 },
  ".MuiFormControlLabel-root": { height: "100%" },
};

export const customAcordion = {
  bgcolor: "transparent",
  "::before": { display: "none" },
  ".MuiAccordionSummary-root": { minHeight: "0 !important", height: 0 },
  ".MuiAccordionDetails-root": { color: "rgb(255 255 255 / 50%)" },
  ".MuiFormControlLabel-root .MuiTypography-root": { fontSize: 13 },
};
