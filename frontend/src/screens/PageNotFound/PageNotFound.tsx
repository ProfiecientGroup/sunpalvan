import { Box } from "@mui/material";
import PageNotFoundStyles from "./PageNotFound.styles";

const PageNotFound = () => {
  const classes = PageNotFoundStyles;

  const getBody = () => {
    return <Box sx={classes.mainContainer}>404</Box>;
  };

  return <>{getBody()}</>;
};

export default PageNotFound;
