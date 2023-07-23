import { Box } from "@mui/system";
import AppHeader from "../AppHeader/AppHeader";
import { useEffect, useRef, useState } from "react";
import LayoutStyles from "./Layout.styles";
import AppFooter from "../AppFooter/AppFooter";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

interface CustomProps {
  children?: any;
}

const Layout = (props: CustomProps) => {
  const classes = LayoutStyles;
  const location = window.location.pathname;
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [hideIcon, setHideIcon] = useState("none");

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const listenScrollEvent = () => {
    window.scrollY > 100 ? setHideIcon("inline") : setHideIcon("none");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  });

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {!window.location.pathname.includes("/login") && (
        <AppHeader toggleDrawer={toggleDrawer} />
      )}
      <Box>
        <Box sx={classes.main}>{props.children}</Box>
        {/* <AppFooter /> */}
        <Box
          onClick={goToTop}
          sx={{
            display: hideIcon,
            height: "5.5vh",
            cursor: "pointer",
            position: "fixed",
            right: 38,
            bottom: 30,
          }}
        >
          <ExpandLessRoundedIcon />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
