import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import appDrawerStyles from "./AppDrawer.styles";

interface CustomProps {
  setMenuMobileVisible?: Function;
  isActive?: boolean;
  listItems: JSX.Element;
}

const AppDrawer = (props: CustomProps) => {
  const classes = appDrawerStyles;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const getYear = () => {
    return new Date().getFullYear();
  };

  const getSoftsagesLogo = () => {
    return (
      <Box my={6} sx={{ display: "flex", justifyContent: "center" }}>
        {/* <img src={SoftsagesLogo.src} alt="Softsages" height="50px" /> */}
      </Box>
    );
  };

  const getCloseButton = () => {
    return (
      // <CloseButton
      //   onClick={() =>
      //     props.setMenuMobileVisible && props.setMenuMobileVisible(false)
      //   }
      // />
      <>
      </>
    );
  };

  const getAppDrawer = () => {
    return (
      <Box sx={classes.drawer}>
        <Typography>app header</Typography>
        {/* <Box style={{ width: "100%" }}>
          {!isDesktop && getCloseButton()}
          {!isDesktop && getSoftsagesLogo()}
          {props.listItems}
          <Box>
            <Stack
              direction={{
                md: "column",
                sm: "column",
                xs: "column",
                lg: "row",
              }}
              sx={{
                justifyContent: "space-around",
                alignItems: "center",
                padding: 2,
              }}
            >
              <Typography sx={classes.copyrightBox}>
                &copy; {getYear()} {strings.TITLE}
              </Typography>

              <Box sx={classes.icons}>
                <Link href={urls.facebook}>
                  <a target="_blank">
                    <img
                      src={facebook.src}
                      alt="services icon"
                      style={{
                        width: isDesktop ? "40px" : "auto",
                        height: isDesktop ? "auto" : "100%",
                        marginRight: 5,
                      }}
                    />
                  </a>
                </Link>
                <Link href={urls.linkedin}>
                  <a target="_blank">
                    <img
                      src={linkedin.src}
                      alt="services icon"
                      style={{
                        width: isDesktop ? "40px" : "auto",
                        height: isDesktop ? "auto" : "100%",
                        marginRight: 5,
                      }}
                    />
                  </a>
                </Link>

                <Link href={urls.twitter}>
                  <a target="_blank">
                    <img
                      src={twitter.src}
                      alt="services icon"
                      style={{
                        width: isDesktop ? "40px" : "auto",
                        height: isDesktop ? "auto" : "100%",
                        marginRight: 5,
                      }}
                    />
                  </a>
                </Link>
                <Link href={urls.instagram}>
                  <a target="_blank">
                    <img
                      src={Instagram.src}
                      alt="services icon"
                      style={{
                        width: isDesktop ? "40px" : "auto",
                        height: isDesktop ? "auto" : "100%",
                        marginRight: 5,
                      }}
                    />
                  </a>
                </Link>
                <Link href={urls.youtube}>
                  <a target="_blank">
                    <img
                      src={youtube.src}
                      alt="youtube"
                      style={{
                        width: isDesktop ? "40px" : "40px",
                        height: isDesktop ? "auto" : "40px",
                      }}
                    />
                  </a>
                </Link>
              </Box>
            </Stack>
          </Box> */}
        {/* </Box> */}
      </Box>
    );
  };
  return <>{getAppDrawer()}</>;
};

export default AppDrawer;
