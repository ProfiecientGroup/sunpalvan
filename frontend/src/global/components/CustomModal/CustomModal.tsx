import {
  Dialog,
  IconButton,
  DialogActions,
  DialogTitle,
  DialogContent,
  Box,
  Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Close } from "@mui/icons-material";
import customDialogStyles from "./CustomModal.styles";
import { borderRadius } from "../../../utils/styles";

interface CustomProps {
  handleDialogClose?: any;
  closable?: boolean;
  width?: string;
  isDialogOpen: boolean;
  dialogTitleContent?: JSX.Element;
  dialogBodyContent: JSX.Element;
  dialogFooterContent?: JSX.Element;
  dialogFooterClass?: any;
  closeButtonVisibility?: boolean;
  fullScreen?: boolean;
  borderRadius?: string;
}

const CustomDialog = (props: CustomProps) => {
  const classes = customDialogStyles;
  const width = props.width ? props.width : "60%";
  const radius = props.borderRadius ? props.borderRadius : borderRadius;

  const customStyles = makeStyles((theme: Theme) => ({
    dialogWidth: {
      width: width,
      maxWidth: "none",
      borderRadius: radius,
    },
  }));
  const customClasses = customStyles();

  const getDialogTitle = () => {
    return (
      props.dialogTitleContent !== undefined && (
        <DialogTitle id="customized-dialog-title" sx={classes.dialogTitle}>
          <Box sx={classes.displayFlex}>
            {props.dialogTitleContent !== undefined && (
              <Box style={{ width: "100%" }}>{props.dialogTitleContent}</Box>
            )}
            {props.closable && props.handleDialogClose !== undefined && (
              <Box
                sx={classes.closeButtonContainer}
                onClick={props.handleDialogClose}
              >
                {props.closeButtonVisibility ? (
                  <IconButton aria-label="close" sx={classes.closeButton}>
                    <Close />
                  </IconButton>
                ) : null}
              </Box>
            )}
          </Box>
        </DialogTitle>
      )
    );
  };

  const getDialogBody = () => {
    return (
      <DialogContent dividers sx={classes.dialogContent}>
        {props.dialogBodyContent}
      </DialogContent>
    );
  };

  const getDialogFooter = () => {
    if (!props.dialogFooterContent) return null;
    return (
      props.dialogFooterContent && (
        <DialogActions
          sx={
            props.dialogFooterClass ?? false
              ? (classes.dialogActions, props.dialogFooterClass)
              : classes.dialogActions
          }
        >
          {props.dialogFooterContent}
        </DialogActions>
      )
    );
  };

  return (
    <Dialog
      fullScreen={props.fullScreen}
      onClose={props.handleDialogClose}
      open={props.isDialogOpen}
      classes={{
        paper: customClasses.dialogWidth,
      }}
    >
      {getDialogTitle()}
      {getDialogBody()}
      {getDialogFooter()}
    </Dialog>
  );
};

export default CustomDialog;
