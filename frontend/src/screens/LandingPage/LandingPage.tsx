import { Box } from "@mui/system";
import landingPageStyles from "./LandingPage.styles";
import {
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import earthIcon from "../../assets/icons/landingPage/earth.svg";
import { theme } from "../../utils/styles";
import CustomCards from "./CustomCards/CustomCards";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import features1 from "../../assets/icons/landingPage/feature1.svg";
import features2 from "../../assets/icons/landingPage/feature2.svg";
import features3 from "../../assets/icons/landingPage/feature3.svg";
import features4 from "../../assets/icons/landingPage/featur4.svg";
import startUpIcon from "../../assets/icons/landingPage/startUpIcon.svg";
import AppFooter from "../Shared/AppFooter/AppFooter";
import history from "../../utils/history";
import urls from "../../global/constants/UrlConstants";

const featuresImages = [
  { profile: features1, profileName: "Andrew Millison" },
  { profile: features2, profileName: "Andrew Millison" },
  { profile: features3, profileName: "Andrew Millison" },
  { profile: features4, profileName: "Andrew Millison" },
  { profile: features1, profileName: "Andrew Millison" },
  { profile: features2, profileName: "Andrew Millison" },
  { profile: features4, profileName: "Andrew Millison" },
];

const LandingPage = () => {
  const classes = landingPageStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const getHeader = () => {
    return (
      <>
        <Box sx={classes.headerMainBox}>
          <Container maxWidth="lg">
            <Stack
              direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
              alignItems="center"
              display="flex"
              sx={classes.headerInnerContent}
              spacing={1}
            >
              <Box sx={classes.contentBox}>
                <Typography
                  variant="h1"
                  gutterBottom
                  component="div"
                  sx={classes.earthLiveText}
                >
                  Live From
                </Typography>
                <Typography
                  variant="h1"
                  gutterBottom
                  component="div"
                  sx={classes.earthText}
                >
                  Earth
                </Typography>
                <Box sx={classes.langingBtn}>
                  <Typography sx={classes.btnText}>
                    Watch the restream
                  </Typography>
                </Box>
              </Box>
              {isDesktop && (
                <Box sx={classes.customerIcon}>
                  <img
                    src={earthIcon}
                    alt="earth img"
                    style={{
                      width: isDesktop ? "350%" : "100%",
                      height: "auto",
                      [theme.breakpoints.down("md")]: {
                        width: "1000px",
                      },
                    }}
                  />
                </Box>
              )}
            </Stack>
          </Container>
        </Box>
        <Typography sx={classes.horizontalLine} />
      </>
    );
  };

  const getMember = () => {
    return (
      <>
        <Box sx={classes.memberBg}>
          <Container maxWidth="md">
            <Stack direction={{ lg: "row" }} spacing={10} mt={10}>
              <Box>
                <Typography sx={classes.memberText}>
                  Space Enthusiasts
                </Typography>
                <Typography sx={classes.memberDes}>
                  know awesome and creative blogs and new technologies
                </Typography>
                <Box sx={classes.memberBtn}>
                  <Button
                    sx={classes.memberBtnText}
                    onClick={() => history.push(urls.loginViewPath)}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
              <Box>
                <Typography sx={classes.memberText}>Members</Typography>
                <Typography sx={classes.memberDes}>
                  know awesome and creative blogs and new technologies
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Box sx={classes.memberBtn}>
                    <Button
                      sx={classes.memberBtnText}
                      onClick={() => history.push(urls.loginViewPath)}
                    >
                      Login
                    </Button>
                  </Box>
                  <Box sx={classes.memberBtn}>
                    <Button sx={classes.memberBtnText}>Register</Button>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Container>
        </Box>
      </>
    );
  };

  const getFeatures = () => {
    return (
      <>
        <Box sx={classes.featureMain}>
          <Container maxWidth="lg">
            <Stack direction={{ lg: "row" }} alignItems="center" mb={4}>
              <Typography sx={classes.memberText} flexGrow={1}>
                Featured Startups
              </Typography>
              <Box sx={classes.viewBtns}>
                <Typography sx={classes.viewBtnTexts}>View All</Typography>
                <KeyboardDoubleArrowRightIcon />
              </Box>
            </Stack>
            <Stack direction={{ lg: "row" }} spacing={3}>
              {featuresImages.map((i: any) => {
                return (
                  <Box textAlign="center">
                    <img
                      src={i.profile}
                      width="150px"
                      height="150px"
                      style={{ marginBottom: 2 }}
                    />
                    <Typography sx={classes.viewBtnTexts}>
                      {i.profileName}
                    </Typography>
                  </Box>
                );
              })}
            </Stack>
          </Container>
        </Box>
      </>
    );
  };

  const getStartUpService = () => {
    return (
      <>
        <Box sx={classes.startUpMain}>
          <Container maxWidth="md">
            <Stack direction={{ lg: "column" }} textAlign="center">
              <img src={startUpIcon} />
              <Typography sx={classes.earthText}>Startups Services</Typography>
              <Typography sx={classes.cardsInnerDes}>
                Keep track of all your meetings and what was discussed. Import
                events quickly with our Google Calendar and Outlook
                integrations.
              </Typography>
              <Typography></Typography>
            </Stack>
          </Container>
        </Box>
      </>
    );
  };

  return (
    <Box>
      {getHeader()}
      {getMember()}
      <Box sx={classes.cardsMain}>
        <CustomCards />
      </Box>
      {getFeatures()}
      {getStartUpService()}
      <AppFooter />
    </Box>
  );
};

export default LandingPage;
