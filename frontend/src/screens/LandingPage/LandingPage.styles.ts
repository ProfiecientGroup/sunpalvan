import {
  boldFont,
  centerItemFlex,
  getRelativeFontSize,
  mediumFont,
  regularFont,
  theme,
} from "../../utils/styles";
import landingBg from "../../assets/images/landingPage/landingBg.svg";
import memberBg from "../../assets/images/landingPage/memberBg.svg";

const landingPageStyles = {
  headerMainBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundImage: "url(" + landingBg + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "500px",
    backgroundColor: "#EBEDFF",
    [theme.breakpoints.down("md")]: {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "auto",
      padding: 4,
    },
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "auto",
    },
  },
  contentBox: {
    textAlign: "left",
    // position: "relative",
    // left: 50,
    // [theme.breakpoints.down("sm")]: {
    //   position: "relative",
    //   left: 0,
    // },
    // [theme.breakpoints.down("lg")]: {
    //   position: "relative",
    //   left: 0,
    // },
  },
  headerInnerContent: {
    [theme.breakpoints.down("lg")]: {
      margin: "0px",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: 10,
    },
  },
  customerIcon: {
    [theme.breakpoints.up("lg")]: {
      position: "relative",
      top: "35px",
    },
    // [theme.breakpoints.down("lg")]: {
    //   position: "relative",
    //   top: 32,
    // },
  },
  langingBtn: {
    ...centerItemFlex,
    cursor: "pointer",
    width: "250px",
    height: "50px",
    background: "linear-gradient(90deg, #586FFF 0.01%, #E26CFF 100%)",
    borderRadius: "65px",
  },
  earthLiveText: {
    ...boldFont,
    color: "#FFFFFF",
    fontSize: getRelativeFontSize(31),
  },
  earthText: {
    ...boldFont,
    color: "#FFFFFF",
    fontSize: getRelativeFontSize(41),
  },
  btnText: {
    ...mediumFont,
    textAlign: "center",
    color: "#000000",
  },
  horizontalLine: {
    width: "auto",
    height: " 5px",
    background: "linear-gradient(90deg, #586FFF 0.01%, #E26CFF 100%)",
    borderRadius: "32px",
  },
  memberBg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundImage: "url(" + memberBg + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "700px",
    width: "auto",
    backgroundColor: "#EBEDFF",
    opacity: 2,
  },
  memberText: {
    ...mediumFont,
    color: "#FFFFFF",
    fontSize: getRelativeFontSize(25),
  },
  memberDes: {
    ...regularFont,
    color: "#9B96B0",
    fontSize: getRelativeFontSize(5),
    marginBottom: 3,
  },
  memberBtn: {
    ...centerItemFlex,
    width: "150.28px",
    height: "52px",
    background: "#804FF5",
    boxShadow:
      "0px 19px 20px -18px rgba(0, 0, 0, 0.46), inset 0px 1px 0px rgba(255, 255, 255, 0.63)",
    borderRadius: "33px",
  },
  memberBtnText: {
    ...regularFont,
    color: "#FFFFFF",
    fontSize: getRelativeFontSize(1),
    textTransform: "capitalize",
  },
  cardsMain: {
    height: "auto",
    width: "auto",
    backgroundColor: "#040115",
    padding: 3,
  },
  cardMainContain: {
    display: "flex",
    flexGrow: 1,
  },
  tabBtn: {
    ...centerItemFlex,
    width: "150.28px",
    height: "52px",
    background: "#3A364C",
    boxShadow:
      "0px 19px 20px -18px rgba(0, 0, 0, 0.46), inset 0px 1px 0px rgba(255, 255, 255, 0.63)",
    borderRadius: "33px",
    marginLeft: 3,
    cursor: "pointer",
  },
  tabBtnText: {
    color: "#797979",
    textTransform: "capitalize",
  },
  viewBtn: {
    display: "flex",
    cursor: "pointer",
    svg: {
      color: "#797979",
      cursor: "pointer",
      marginLeft: 1,
    },
  },
  viewBtnText: {
    color: "#797979",
  },
  viewBtns: {
    display: "flex",
    cursor: "pointer",
    svg: {
      color: "#FFFFFF",
      cursor: "pointer",
      marginLeft: 1,
    },
  },
  viewBtnTexts: {
    color: "#FFFFFF",
  },
  cardsInner: {
    border: "1px solid rgba(255, 255, 255, 0.43)",
    borderRadius: "20px",
    width: "402px",
    height: "423px",
    zIndex: 1,
  },
  img: {
    transform: "rotate(180deg)",
    borderRadius: "0px 0px 20px 20px",
  },
  cardsInnerTitle: {
    display: "flex",
    svg: {
      color: "#FFFFFF",
      cursor: "pointer",
    },
  },
  cardsInnerTileText: {
    color: "#FFFFFF",
    flexGrow: 1,
  },
  cardsInnerDes: { color: "#B9B9B9" },
  cardsInnerDate: { color: "#FFFFFF", flexGrow: 1 },
  readMoreBtn: {
    ...centerItemFlex,
    width: "74px",
    height: "30px",
    background: "#804FF5",
    borderRadius: "21px",
    marginLeft: 3,
    cursor: "pointer",
  },
  readMoreBtnText: {
    color: "#FFFFFF",
    textTransform: "capitalize",
    fontSize: "10px",
  },
  featureMain: {
    width: "auto",
    height: "auto",
    background: "#804FF5",
    padding: 4,
  },
  startUpMain: {
    width: "auto",
    height: "100vh",
    background: "#040115",
    padding: 4,
  },
} as const;

export default landingPageStyles;
