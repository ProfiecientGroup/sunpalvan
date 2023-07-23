import {
  // blueAsteriskColor,
  boldFont,
  getRelativeFontSize,
  // primaryBorderColor,
  primaryColor,
  primaryColorBlack,
  regularFont,
} from "../../../utils/styles";

const customInputStyles = {
  textField: {
    border : "none",
    width: "100%",
    "& .MuiInputBase-input": {
      position: "relative",
      background: "#211852",
      padding: "12px 12px",
      border : "1px solid #211852", 
      borderRadius: "48px",
      "&::placeholder": {
        ...regularFont,
        fontSize : getRelativeFontSize(2),
        color:"#FFFFFF"
      }
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "48px",
      "&.Mui-focused fieldset": {
        borderColor: "#8A8A8A",
      },
    },  
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline":{
      borderColor :"#8A8A8A",
    }  
  },
  nameField: {
    ...boldFont,
    fontSize : getRelativeFontSize(),
    color : "gray",
    marginBottom : "3px",
    wordSpacing: "2px",
  },
  commentAsterisk: {
    color: "blue",
    ...regularFont,
  },
} as const;

export default customInputStyles;