import React from "react";
import { Paper } from "@mui/material";
import customPaperStyles from "./CustomPaper.styles";

interface CustomProps {
  children: React.ReactNode;
  className?: string;
  isWeb?: boolean;
  removeBorder?: boolean;
}

const CustomPaper = (props: CustomProps) => {
  const classes = customPaperStyles;
  if (props.removeBorder) {
    if (!props.isWeb) {
      return (
        <Paper
          variant="outlined"
          className={(classes.customPaperMobile, props.className)}
        >
          {props.children}
        </Paper>
      );
    }
  }
  return (
    <Paper
      variant="outlined"
      className={(classes.customPaper, props.className)}
    >
      {props.children}
    </Paper>
  );
};

export default CustomPaper;
