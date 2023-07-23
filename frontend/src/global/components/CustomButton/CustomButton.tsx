import { Box, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import customButtonStyles from "./CustomButton.styles";

interface CustomProps {
  label: string;
  onClick: Function;
  loading?: boolean;
  customClasses?: any;
  buttonType?: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  disabled?: boolean;
}

const CustomButton = (props: CustomProps) => {
  const getCustomCss = () => {
    switch (props.buttonType) {
      case "primaryBtn":
        return classes.primaryBtn;
      case "secondaryBtn":
        return classes.secondaryBtn;
      default:
        return {};
    }
  };

  const classes = customButtonStyles;
  const buttonType = getCustomCss();
  const appliedClass = {
    ...classes.btnStyle,
    ...buttonType,
    ...(props.customClasses ?? {}),
  };
  
  const processing = props.loading ? props.loading : false;
  return (
    <Button
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      sx={[appliedClass]}
      onClick={() => props.onClick()}
      disabled={props.loading ?? props.disabled}
    >
      {processing ? (
        <Box sx={classes.loading}>
          <CircularProgress size={20} sx={{ color: "#000000" }} />
        </Box>
      ) : (
        props.label
      )}
    </Button>
  );
};

export default CustomButton;
