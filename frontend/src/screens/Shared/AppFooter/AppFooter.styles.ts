import { getRelativeFontSize, regularFont } from "../../../utils/styles";

const appFooterStyles = {
  icons: {
    "&:hover": {
      cursor: "pointer",
    },
  },

  copyrightBox: {
    ...regularFont,
    padding: "31px 0px",
    color: "#898B9A",
    fontSize: getRelativeFontSize(1),
    textAlign: "center",
  },
} as const;

export default appFooterStyles;
