import { CSSProperties } from "@mui/styles";

export interface OTPInputProps {
  length: number;
  onChangeOTP: (otp: string) => any;

  autoFocus?: boolean;
  isNumberInput?: boolean;
  disabled?: boolean;

  style?: CSSProperties;
  className?: string;

  inputStyle?: CSSProperties;
  inputClassName?: string;
}

export interface SwitchButtonProps {
  text: string;
  onClick: Function;
}

export interface LoginFields {
  email: string;
  password: string;
}

export interface RestPasswordFields {
  NewPassword: string;
  ConfirmPassword: string;
}

export interface FormFields {
  [key: string]: {
    value?: string;
    error: string;
  };
}

export interface ForgotPasswordFields {
  [key: string]: {
    value: string;
    error: string;
  };
}