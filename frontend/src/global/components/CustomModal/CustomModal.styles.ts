import { theme } from "../../../utils/styles";

const customDialogStyles = {
  dialogTitle: {
    margin: 0,
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  closeButtonContainer: {
    display: "flex",
    alignItems: "start",
    justifyContent: "flex-end",
    flex: 1,
    color: theme.palette.grey[500],
  },
  closeButton: {
    padding: 0,
  },
  dialogContent: {
    padding: theme.spacing(2),
  },
  dialogActions: {
    margin: 0,
    padding: theme.spacing(1, 2),
    display: "flex",
  },
  displayFlex: {
    display: "flex",
  },
} as const;

export default customDialogStyles;
