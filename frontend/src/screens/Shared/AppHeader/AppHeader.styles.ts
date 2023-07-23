import {
  centerItemFlex,
  getRelativeFontSize,
  mediumFont,
  primaryColor,
  regularFont,
  theme,
} from "../../../utils/styles";

const appHeaderStyles = {
  body: {
    ...regularFont,
  },
  whiteDescriptionText: {
    color: "white",
    fontSize: getRelativeFontSize(-1),
  },
  email: {
    ...regularFont,
    color: "white",
    fontSize: getRelativeFontSize(5),
    "&:hover": {
      color: primaryColor,
      cursor: "pointer",
    },
  },
  navBtn: {
    ...mediumFont,
    width: "auto",
    fontSize: getRelativeFontSize(4),
    color: "#FFFFFF",
    cursor: "pointer",
    "&:hover": {
      color: "#FFFFFF",
      cursor: "pointer",
    },
  },
  selectedMenuOptionListItem: {
    color: primaryColor,
  },
  menuMobile: {
    width: "100vw",
  },
  menuToolbar: {
    ...regularFont,
    color: "#030014",
    backgroundColor: "#030014",
    mx: 10,
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      height: "100px",
    },

    [theme.breakpoints.up("sm")]: {
      height: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "30px",
    },
  },
  navMenuMain: {
    padding: "0px 18px 0 18px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    [theme.breakpoints.down("md")]: {
      ...centerItemFlex,
      flexDirection: "column",
    },
  },
  selected: {
    ...centerItemFlex,
    ...regularFont,
    color: "#FFFFFF",
    fontSize: getRelativeFontSize(4),
    "&::after": {
      content: "''",
      position: "absolute",
      bottom: 5,
      width: "20%",
      borderBottom: "2px solid #0D3057",
    },
  },
  navText: {
    cursor: "pointer",
    color: "rgba(255, 255, 255, 0.9)",
  },
  prodSelected: {
    ...regularFont,
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    width: "10vw",
    maxWidth: "100vw",
    fontSize: "18px",
    paddingTop: 0,
    margin: 0,
    marginLeft: 1,
    backgroundColor: "#090119",
    color: "#FFFFFF",
    [theme.breakpoints.down("lg")]: {
      width: "220px",
      height: "25px",
      fontSize: "18px",
      borderRadius: "7px",
      backgroundColor: "#090119",
      color: "#FFFFFF",
    },
  },
} as const;

export default appHeaderStyles;
