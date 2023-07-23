import {
  centerItemFlex,
  customButtonStyle,
  primaryColor,
  primaryColorBlack,
  primaryColorPurple,
  regularFont,
} from "../../../utils/styles";

const customButtonStyles = {
  btnStyle: {
    ...regularFont,
    ...customButtonStyle,
    ...centerItemFlex,
    maxWidth  :"100px" ,
    color : primaryColorBlack,
    border  :"1px solid",
    borderColor  :"red",
    borderRadius  :"12px",
    "&" : {
      height  : "42px",
      boxShadow : "none",

    },
  },
  loading: {
    ...centerItemFlex,
    color: primaryColorPurple,
  },
  primaryBtn : {
    color : primaryColor,
    background : primaryColorPurple,
    borderColor  :primaryColorPurple,
  "&:hover" :{
    background : primaryColorPurple,
  }
  },
  secondaryBtn : {
    background  :primaryColor,
    color : "#828282",
    "&:hover" : {
      background  :primaryColor,
    }
  },
  addBox: {
    color: "#FFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    },
} as const;

export default customButtonStyles;
