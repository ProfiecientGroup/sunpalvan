import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import InputBase from "@mui/material/InputBase";
import Radio, { RadioProps } from "@mui/material/Radio";
import { withStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import Switch from "@mui/material/Switch";
import { createTheme } from "@mui/material/styles";

const primaryColor = "#211852";
const primaryColorPurple="#040115";
const primaryColorBlack="#000000";
const primaryBackgroundColor = "#EDEDED";
const borderColor = "rgba(0, 0, 0, 0.12)";
const borderStyle = "1px solid " + borderColor;
const infoTextColor = "#888888";
const defaultFontSize = 14;
const defaultBoxShadow = "0 0 0 0.2rem rgb(0 123 255 / 25%)";

const borderRadius = "30px";
const blackFont = {
  fontFamily: "Poppins",
  fontWeight: 900,
  fontStyle: "normal",
};

const boldFont = {
  fontFamily: "Poppins_Bold",
  fontWeight: 700,
};

const mediumFont = {
  fontFamily: "Poppins_Medium",
  fontWeight: 500,
};

const regularFont = {
  fontFamily: "Poppins_Regular",
  fontWeight: 400,
};

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "TT_Norms_Pro_Regular",
      "TT_Norms_Pro_Thin",
      "TT_Norms_Pro_Bold",
      "TT_Norms_Pro_Light",
      "TT_Norms_Pro_Medium",
      "sans-serif",
    ].join(","),
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       "@font-face": [raleway],
  //     },
  //   },
  // },
});

const getRelativeFontSize = (value: number = 0) => {
  let size = defaultFontSize + value;
  return size + "px";
};

const customButtonStyle = {
  borderRadius: borderRadius,
  border: "none",
  fontSize: getRelativeFontSize(),
  textAlign: "center",
  backgroundColor: primaryColor,
  padding: "10px 15px",
  boxShadow: "none",
  color: "white",
  cursor: "pointer",
  textTransform: "none",
};

const customTextFieldStyle = {
  borderRadius: borderRadius,
  position: "relative",
  border: "none",
  fontSize: getRelativeFontSize(2),
  backgroundColor: primaryBackgroundColor,
  padding: "10px 15px",
  boxShadow: "none",
  width: "100%",
};

const headingText = {
  display: "inline-block",
  fontSize: getRelativeFontSize(8),
};

const centerItemFlex = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const centerItemAbsolute = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const CustomInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
      backgroundColor: theme.palette.common.white,
      border: "1px solid #ced4da",
      borderRadius: borderRadius,
      padding: "0 5px",
    },
    input: {
      position: "relative",
      fontSize: getRelativeFontSize(),
      width: "100%",
      padding: "10px 12px",
    },
  })
)(InputBase);

const TealSwitch = withStyles({
  switchBase: {
    color: "grey",
    "&$checked": {
      color: primaryColor,
      "& + $track": {
        backgroundColor: primaryColor,
      },
    },
    "&$checked + $track": {
      color: primaryColor,
    },
  },
  track: { backgroundColor: "grey" },
  checked: {},
})(Switch);

const TealCheckbox = withStyles({
  root: {
    color: primaryColor,
    "&$checked": {
      color: primaryColor,
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const TealRadio = withStyles({
  root: {
    color: primaryColor,
    "&$checked": {
      color: primaryColor,
    },
  },
  checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);

export const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
      backgroundColor: theme.palette.common.white,
      border: "1px solid #ced4da",
      borderRadius: borderRadius,
      padding: "0 5px",
    },
    input: {
      position: "relative",
      fontSize: getRelativeFontSize(),
      width: "100%",
      padding: "10px 12px",
    },
  })
)(InputBase);

export {
  borderRadius,
  primaryColor,
  primaryColorPurple,
  primaryColorBlack,
  primaryBackgroundColor,
  borderColor,
  borderStyle,
  infoTextColor,
  defaultBoxShadow,
  customButtonStyle,
  customTextFieldStyle,
  headingText,
  centerItemFlex,
  centerItemAbsolute,
  CustomInput,
  TealSwitch,
  TealCheckbox,
  TealRadio,
  regularFont,
  boldFont,
  mediumFont,
  blackFont,
  getRelativeFontSize,
  theme,
};
