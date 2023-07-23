import { Box, Snackbar } from "@mui/material";
import { Close } from "@mui/icons-material";
import customNotificationStyles from "./CustomNotification.styles";
import strings from "../../constants/StringConstants";
import { CustomIcon } from "..";

interface CustomProps {
  showNotification: boolean;
  verticalPosition: "top" | "bottom";
  horizontalPosition: "left" | "right";
  variant: string;
  title: string;
  message: string;
  icon: JSX.Element;
  handleClose: any;
}

const getStyles = (variant: string) => {
  switch (variant) {
    case strings.info:
      return {
        backgroundColor: "#0DD0C4",
        color: "white !important",
      };
    case strings.success:
      return {
        backgroundColor: "rgba(	78, 217, 103, 1)",
        color: "white !important",
      };
    case strings.warning:
      return {
        backgroundColor: "rgba(252, 179, 68, 1)",
        color: "white !important",
      };
    case strings.error:
      return {
        backgroundColor: "rgba(252, 80, 68, 1)",
        color: "white !important",
      };
    default:
      break;
  }
};

const CustomNotification = (props: CustomProps) => {
  const classes = customNotificationStyles;

  const customClassesStyle = {
    notificationBlock: {
      ...getStyles(props.variant),
      width: "100%",
      padding: "5px",
      display: "flex",
    },
  } as const;

  const customClasses = customClassesStyle;
  return (
    <Snackbar
      open={props.showNotification}
      anchorOrigin={{
        vertical: props.verticalPosition,
        horizontal: props.horizontalPosition,
      }}
      autoHideDuration={strings.autoHideDuration}
      onClose={props.handleClose}
    >
      <Box sx={customClasses.notificationBlock}>
        <Box p={1} sx={classes.iconBlock}>
          {props.icon}
        </Box>
        <Box p={1} sx={[classes.iconBlock, classes.messageContainer]}>
          <Box>
            <Box sx={classes.notificationTitle}>{props.title}</Box>
            <Box sx={classes.messageBox}>{props.message}</Box>
          </Box>
        </Box>
        <Box
          p={1}
          sx={[classes.closeNotification, classes.iconBlock]}
          onClick={props.handleClose}
        >
          <CustomIcon icon={<Close fontSize="small" />} />
        </Box>
      </Box>
    </Snackbar>
  );
};

export default CustomNotification;
