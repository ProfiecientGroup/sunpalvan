import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  popoverClasses,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import appHeaderStyles from "./AppHeader.styles";
import urls from "../../../global/constants/UrlConstants";
import logo from "../../../assets/icons/apple-logo.svg";
import { Link } from "react-router-dom";
import AppDrawer from "../AppDrawer/AppDrawer";
import { theme } from "../../../utils/styles";

interface CustomProps {
  toggleDrawer: Function;
}

const AppHeader = (props: CustomProps) => {
  const classes = appHeaderStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [menuMobileVisible, setMenuMobileVisible] = useState<boolean>(false);
  const [anchorE2, setAnchorE2] = useState(null);
  let currentlyHovering2 = false;


  const handleMenuMobileVisibility = (event: any) => {
    setMenuMobileVisible(event.currentTarget);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setMenuMobileVisible(false);
    };

  const getMobileMenuDrawer = () => {
    return (
      <Drawer
        open={menuMobileVisible}
        onClose={toggleDrawer}
        sx={{
          paper: classes.menuMobile,
        }}
      >
        <AppDrawer
          setMenuMobileVisible={setMenuMobileVisible}
          listItems={getNavMenu()}
        />
      </Drawer>
    );
  };

  function handleClick2(event: any) {
    if (anchorE2 !== event.currentTarget) {
      setAnchorE2(event.currentTarget);
    }
  }

  function handleHover2() {
    currentlyHovering2 = true;
  }

  function handleClose2() {
    setAnchorE2(null);
    setMenuMobileVisible(false);
  }

  function handleCloseHover2() {
    currentlyHovering2 = false;
    setTimeout(() => {
      if (!currentlyHovering2) {
        handleClose2();
      }
    }, 10);
  }

  const isActiveTab = (pathName: string) => {
    const location = window.location.pathname;
    if (location === pathName || location === pathName + "/") {
      return true;
    }
    return false;
  };

  const getNavMenu = () => {
    return (
      <List sx={classes.navMenuMain}>
        <ListItem
          sx={classes.navBtn}
          onClick={() => setMenuMobileVisible(false)}
        >
          <Typography
            variant="h6"
            sx={[
              classes.navBtn,
              isActiveTab(urls.landingViewPath) && classes.selected,
            ]}
          >
            Hackathon
          </Typography>
        </ListItem>
       {/* <Link href={urls.productViewPath}> */}
       <ListItem
          aria-owns={anchorE2 ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={handleClick2}
          onMouseOver={handleClick2}
          onMouseLeave={handleCloseHover2}
          sx={classes.navBtn}
        >
          <Typography
            // variant="h6"
            sx={
              classes.navBtn
              // router.pathname.includes(urls.productViewPath) &&
              //   classes.selected,
            }
          >
            Startups
          </Typography>
        </ListItem>
        {/* </Link> */}

        <Menu
          id="simple-menu"
          anchorEl={anchorE2}
          open={Boolean(anchorE2)}
          onClose={handleClose2}
          MenuListProps={{
            onMouseEnter: handleHover2,
            onMouseLeave: handleCloseHover2,
            style: {
              pointerEvents: "auto",
              paddingTop: 0,
              paddingBottom: 0,
              paddingRight: 0,
              paddingLeft: 0,
            },
          }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          sx={{
            [`&.${popoverClasses.root}`]: {
              pointerEvents: "none",
            },
            "& .MuiPopover-paper": {
              boxShadow: "0px 1px 17px rgba(0, 0, 0, 0.13)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "#090119",
              [theme.breakpoints.down("md")]: {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                padding: "20px",
              },
            }}
          >
            <MenuItem
              onClick={handleClose2}
              sx={{
                minHeight: "30px !important",
              }}
            >
              <Typography
                sx={
                  classes.prodSelected
                  // isActiveTab(urls.mailzzyViewPath) &&
                  //   classes.servicesSelected,
                }
              >
                Directory
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={handleClose2}
              sx={{
                minHeight: "30px !important",
              }}
            >
              <Typography
                sx={
                  classes.prodSelected
                  // isActiveTab(urls.mailzzyViewPath) &&
                  //   classes.servicesSelected,
                }
              >
                Support
              </Typography>
            </MenuItem>
            {/* <Link href={urls.mailzzyViewPath}>
              <a> */}
            <MenuItem
              onClick={handleClose2}
              sx={{
                minHeight: "30px !important",
              }}
            >
              <Typography
                sx={
                  classes.prodSelected
                  // isActiveTab(urls.mailzzyViewPath) &&
                  //   classes.servicesSelected,
                }
              >
                Project
              </Typography>
            </MenuItem>
            {/* </a>
            </Link> */}
          </Box>
        </Menu>
        <ListItem
          sx={classes.navBtn}
          onClick={() => setMenuMobileVisible(false)}
        >
          <Typography
            variant="h6"
            sx={[
              classes.navBtn,
              // isActiveTab(urls.landingViewPath) && classes.selected,
            ]}
          >
            Communities
          </Typography>
        </ListItem>
        <ListItem
          sx={classes.navBtn}
          onClick={() => setMenuMobileVisible(false)}
        >
          <Typography
            variant="h6"
            sx={[
              classes.navBtn,
              // isActiveTab(urls.landingViewPath) && classes.selected,
            ]}
          >
            Library
          </Typography>
        </ListItem>
       
      </List>
    );
  };

  const getAppHeader = () => {
    return (
      <Box>
        <AppBar position="fixed" sx={{ backgroundColor: "#030014" }}>
          <Toolbar sx={classes.menuToolbar}>
            <Stack
              direction="row"
              justifyContent={{
                lg: "space-between",
                sm: "space-between",
                xs: "space-between",
              }}
              alignItems="center"
              sx={{ width: "100vw" }}
            >
              <Link to={urls.landingViewPath}>
                <img
                  src={logo}
                  alt=""
                  style={{
                    height: isDesktop ? "40px" : "30px",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                />
              </Link>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {getNavMenu()}
              </Box>
              {/* {!isDesktop && (
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="open drawer"
                  onClick={handleMenuMobileVisibility}
                >
                  <MenuIcon />
                </IconButton>
              )} */}
            </Stack>
          </Toolbar>
        </AppBar>
        {getMobileMenuDrawer()}
      </Box>
    );
  };

  return getAppHeader();
};

export default AppHeader;
