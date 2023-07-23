import React from "react";
import {
    Box,
    Button,
    Checkbox,
    CircularProgress,
    Divider,
    Grid,
    IconButton,
    InputAdornment,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { centerItemFlex, theme } from "../../utils/styles";
import { useState } from "react";
import urls from "../../global/constants/UrlConstants";
import { isTruthy, openErrorNotification } from "../../helpers/methods";
import notifiers from "../../global/constants/NotificationConstants";
import history from "../../utils/history";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CustomButton } from "../../global/components";
import { LoginFields } from "../../models/interfaces";
import CustomInput from "../../global/components/CustomInput/CustomInput";
import loginIcon from "../../assets/images/login/loginIcon.svg";
import google from "../../assets/icons/landingPage/google.svg";
import facebook from "../../assets/icon/landingPage/facebook.svg";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { loginAction } from "../../redux/authSlice";
import registerStyles from "./Register.styles";
import { login } from "../Login/landingPageService";

const Register = () => {
    const classes = registerStyles;
    const dispatch = useAppDispatch();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [formFields, setFormFields] = useState({
        email: "",
        password: "",
    } as LoginFields);

    const [validation, setValidation] = useState({
        email: "",
        password: "",
    } as LoginFields);

    const handleOnChangeInputField = (event: React.ChangeEvent<any>) => {
        const value = event.target.value;
        setFormFields({
            ...formFields,
            [event.target.name]: value,
        });
        setValidation({
            ...validation,
            [event.target.name]: "",
        });
    };

    const handleClickShowPassword = () => {
        setShowPassword(showPassword);
    };

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        setShowPassword(!showPassword);
        event.preventDefault();
    };

    const handleKeypress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleRegister();
        }
    };

    const getWelcome = () => {
        return (
            <>
                <Typography variant="h4" sx={classes.workText}>
                    SmartGuy
                </Typography>
                <Typography sx={classes.welcomeText}>Hey, Welcome Back!</Typography>
                <Typography variant="subtitle1" sx={classes.loginBoxText}>
                    We are very happy to see you back!
                </Typography>
            </>
        );
    };

    const getLabel = () => {
        return (
            <Stack alignItems={{ xs: "center", lg: "flex-start" }}>
                <Typography variant="h4" sx={classes.signInText}>
                    Register
                </Typography>
            </Stack>
        );
    }

    const loginValidation = (loginUserData: any) => {
        let errors = loginUserData;
        const email = formFields.email;
        const password = formFields.password;
        let isValid = true;

        if (!email && !password) {
            errors.email = "Email is required";
            errors.password = "Password is required";
            isValid = false;
        } else if (!email) {
            errors.email = "Email is required";
            isValid = false;
        } else if (!password) {
            errors.password = "Password is required";
            isValid = false;
        }

        return { isValid, errors };
    };

    const handleValidation = () => {
        const { isValid, errors } = loginValidation(validation);
        setValidation({ ...errors });
        return isValid;
    };

    const handleRegister = async () => {
        try {
            if (handleValidation()) {
                setIsLoading(true);
                const email = formFields.email;
                const password = formFields.password;
                const user = await login(email, password);

                dispatch(
                    loginAction({
                        authenticated: true,
                        accessToken: user.authToken,
                        userName: user.name,
                        userRole: user.role,
                        userType: user.userType,
                        userAccount: user.account,
                        userEmail: user.email,
                    })
                );
            }
            setIsLoading(false);
        } catch (error: any) {
            setIsLoading(false);
            openErrorNotification(
                isTruthy(error.errorMessage)
                    ? error.errorMessage
                    : notifiers.GENERIC_ERROR
            );
        }
    };

    const getRegisterInput = () => {
        return (
            <>
                <Box sx={classes.customInput}>
                    <Box>
                        <CustomInput
                            // required
                            placeHolder="Enter email"
                            type="email"
                            name="email"
                            // label="Email"
                            onChange={handleOnChangeInputField}
                            value={formFields.email}
                            onKeyPress={handleKeypress}
                            error={!isTruthy(formFields.email) && validation.email}
                            helperText={validation.email}
                        />
                    </Box>
                    <Box mt={4}>
                        <CustomInput
                            // required
                            placeHolder="Enter Password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            // label="Password"
                            onChange={handleOnChangeInputField}
                            value={formFields.password}
                            onKeyPress={handleKeypress}
                            error={!isTruthy(formFields.password) && validation.password}
                            helperText={validation.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <VisibilityIcon />
                                            ) : (
                                                <VisibilityOffIcon />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                </Box>
            </>
        );
    };

    const getForgotPassword = () => {
        return (
            <Box mt={2}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    {/* In future we will implement remember me functionality */}
                    <Stack direction="row" alignItems="center">
                        <Checkbox sx={classes.checkBox} />
                        <Typography sx={classes.rememberMeText}>Remember Me</Typography>
                    </Stack>
                    {/* <Typography
            sx={classes.forgotText}
            onClick={() => history.push(urls.forgotPasswordViewPath)}
          >
            Remember Me
          </Typography> */}
                </Stack>
            </Box>
        );
    };

    const getButton = () => {
        return (
            <Box>
                <CustomButton
                    label="Register"
                    buttonType="primaryBtn"
                    onClick={() => handleRegister()}
                    disabled={isLoading}
                    loading={isLoading}
                    customClasses={classes.customButtonStyle}
                />
            </Box>
        );
    };

    const createAccount = () => {
        return (
            <>
                <Typography sx={{ color: "#FFFFFF", mt: 2 }}>
                    New to here? <span>Create account.</span>
                </Typography>
                <Divider
                    sx={classes.divider}
                >
                    or
                </Divider>
            </>
        );
    };

    const socialMediaBtn = () => {
        return (
            <Box
                sx={classes.socialMedia}
            >
                <Typography
                    sx={classes.socialText}
                >
                    <img
                        src={google}
                        style={{
                            marginRight: 5
                        }}
                    />
                    Google
                </Typography>
            </Box>
        );
    };

    const getYear = () => {
        return new Date().getFullYear();
    };

    const getFooter = () => {
        return (
            < >
                {isDesktop && (
                    <Typography sx={classes.footerText}>
                        &copy; {getYear()} Company. All Rights Reserved
                    </Typography>
                )}
            </>
        );
    };

    const staticImageComponent = () => {
        return (
            <Box>
                <img
                    src={loginIcon}
                    width="800px"
                    height="700px"
                    style={{ backgroundColor: "#040115", borderRadius: "39px" }}
                />
            </Box>
        );
    };

    const getComponent = () => {
        return (
            <Box sx={{ backgroundColor: "#100936", height: "93.6%" }}>
                <Stack
                    direction="column"
                    justifyContent="flex-start"
                    sx={classes.loginBox}
                >
                    {getWelcome()}
                    {getLabel()}
                    {getRegisterInput()}
                    {getForgotPassword()}
                    {getButton()}
                    {createAccount()}
                    {socialMediaBtn()}
                    {getFooter()}
                </Stack>
            </Box>
        );
    };

    const getRegisterPage = () => {
        return (
            <Grid container sx={classes.mainBox}>
                {isDesktop && (
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={7}
                        lg={7}
                        xl={7}
                        sx={classes.loginImgBox}
                    >
                        {staticImageComponent()}
                    </Grid>
                )}
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={5}
                    lg={5}
                    xl={5}
                    sx={{ backgroundColor: "#100936" }}
                >
                    {getComponent()}
                </Grid>
            </Grid>
        );
    };
    return getRegisterPage();
};
export default Register;
