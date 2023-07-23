import { getRelativeFontSize } from "../../../utils/styles";

const appDrawerStyles = {
  drawer: {
    display: "flex",
    flexGrow: 1,
    width: "100vw",
    backgroundColor: "#FFFFFF",
  },
  description: {
    marginTop: "25px",
    marginBottom: "10px",
    fontSize: "16px",
    color: "#9e9ea7",
    lineHeight: "32px",
  },
  facebookIcon: {
    svg: {
      height: "2rem",
      width: "2rem",
      color: "white",
    },
  },
  copyrightBox: {
    // ...lightFont,
    padding: "31px 0px",
    color: " #4F4E4E",
    fontSize: getRelativeFontSize(1),
    textAlign: "center",
  },
  icons: {
    "&:hover": {
      cursor: "pointer",
    },
  },
} as const;

export default appDrawerStyles;
