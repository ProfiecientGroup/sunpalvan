import { Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import appFooterStyles from "./AppFooter.styles";
import { theme } from "../../../utils/styles";
import facebook from "../../../assets/icons/appFooter/facebook.svg";
import linkedin from "../../../assets/icons/appFooter/linkedin.svg";
import twitter from "../../../assets/icons/appFooter/twitter.svg";
import youtube from "../../../assets/icons/appFooter/youtube.svg";

const AppFooter = () => {
  const classes = appFooterStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Box>
      <Divider
        variant="fullWidth"
        sx={{
          "&.MuiDivider-root": {
            borderColor: "#0D0E17",
          },
        }}
      />
      <Box>
        <Stack
          direction={{ md: "column", sm: "column", xs: "column", lg: "row" }}
          sx={{
            justifyContent: "space-around",
            alignItems: "center",
            bgcolor: "#0D0E17",
            padding: 1,
          }}
        >
          <Typography sx={classes.copyrightBox}>
            &copy; {getYear()} New Project, All rights reserved.
          </Typography>

          <Stack
            sx={classes.icons}
            direction={{ md: "column", sm: "column", xs: "column", lg: "row" }}
            spacing={2}
          >
            {/* <Link href={urls.facebook}> */}
            {/* <a target="_blank"> */}
            <img
              src={facebook}
              alt="services icon"
              style={{
                width: isDesktop ? "40px" : "auto",
                height: isDesktop ? "auto" : "100%",
              }}
            />
            {/* </a> */}
            {/* </Link> */}
            {/* <Link href={urls.linkedin}>
              <a target="_blank"> */}
            <img
              src={linkedin}
              alt="services icon"
              style={{
                width: isDesktop ? "40px" : "auto",
                height: isDesktop ? "auto" : "100%",
              }}
            />
            {/* </a>
            </Link> */}

            {/* <Link href={urls.twitter}>
              <a target="_blank"> */}
            <img
              src={twitter}
              alt="services icon"
              style={{
                width: isDesktop ? "40px" : "auto",
                height: isDesktop ? "auto" : "100%",
              }}
            />
            {/* </a>
            </Link> */}
            {/* <Link href={urls.youtube}>
              <a target="_blank"> */}
            <img
              src={youtube}
              alt="youtube"
              style={{
                width: isDesktop ? "40px" : "40px",
                height: isDesktop ? "auto" : "40px",
              }}
            />
            {/* </a>
            </Link> */}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default AppFooter;
