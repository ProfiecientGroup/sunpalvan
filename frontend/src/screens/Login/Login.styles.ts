import {
  boldFont,
  centerItemFlex,
  getRelativeFontSize,
  mediumFont,
  primaryColor,
  primaryColorBlack,
  primaryColorPurple,
  regularFont,
  theme,
} from "../../utils/styles";

const loginStyles = {
  mainBox: {
    height: "100vh",
    backgroundColor: "#100936"
  },
  loginImgBox: {
    ...centerItemFlex,
    background: "#100936",
    height: "auto",
    width: "100%",
  },
  logoBox: {
    display: "flex",
    alignItems: "center",
  },
  loginBox: {
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
  },
  workText: {
    ...boldFont,
    display: "flex",
    color: "#DB6DFF",
  },
  welcomeText: {
    ...boldFont,
    display: "flex",
    alignItems: "center",
    color: "#FFFFFF",
    marginTop: theme.spacing(1),
    fontSize: getRelativeFontSize(25),
    [theme.breakpoints.down("sm")]: {
      fontSize: getRelativeFontSize(8),
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: getRelativeFontSize(10),
    },
  },
  loginBoxText: {
    ...mediumFont,
    color: "#7E8B9E",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: getRelativeFontSize(3),
    },
  },
  signInText: {
    ...boldFont,
    backgroundClip: "text",
    textFillColor: "transparent",
    backgroundImage:
      "linear-gradient(90deg, #213CE5 0.01%, #16CEC0 35.39%, #DAF221 67.39%, #FE5101 100%)",
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.down("xl")]: {
      marginTop: theme.spacing(5),
    },
  },
  customInput: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("xl")]: {
      marginTop: theme.spacing(2),
    },
  },
  checkBox: {
    color: "#FFFFFF",
    marginLeft: theme.spacing(-1),
    "&.Mui-checked": {
      color: "#FFFFFF",
    },
  },
  rememberMeText: {
    ...regularFont,
    color: "#FFFFFF",
    fontSize: getRelativeFontSize(),
  },
  forgotText: {
    ...mediumFont,
    cursor: "pointer",
    color: "#FFFFFF",
    fontSize: getRelativeFontSize(),
  },
  customButtonStyle: {
    borderRadius: "65px",
    color: "#FFFFFF",
    marginTop: theme.spacing(2),
    minWidth: "100%",
    background: "linear-gradient(90deg, #586FFF 0.01%, #E26CFF 100%)",
    "&:hover": {
      background: "linear-gradient(90deg, #586FFF 0.01%, #E26CFF 100%)",
    }
  },
  divider: {
    color: "#FFFFFF",
    mt: 3,
    "&::before, &::after": {
      borderColor: "#211852",
    },
  },
  socialMedia: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "9999px",
    height: "50px",
    width: "auto",
    backgroundColor: "#060B25",
    backgroundClip: "content-box",
    backgroundImage:
      "linear-gradient(#100936, #100936),linear-gradient(90deg, #2CFDCF -0.11%, #438EFF 55.68%, #F772FF 100.01%)",
    backgroundOrigin: "border-box",
    border: "double 2px transparent",
    mt: 2
  },
  socialText: {
    color: "#FFFFFF",
    textAlign: "center",
    display: "flex",
  },
  footer: {
    ...centerItemFlex,
    width: "27vw",
    position: "fixed",
    bottom: 10,
    color: primaryColorBlack,
    marginBottom: 1,
  },
  footerText: {
    ...mediumFont,
    color: "#8A8A8A",
    textAlign: "center",
    marginTop: "25px",
    fontSize: getRelativeFontSize(-1),
    [theme.breakpoints.down("xl")]: {
      fontSize: getRelativeFontSize(-2),
    },
  },
} as const;

export default loginStyles;