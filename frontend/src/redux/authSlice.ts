import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import strings from "../global/constants/StringConstants";
import { RootState } from "../utils/store";

export interface AuthState {
  authenticated: boolean;
  accessToken: string;
  loading: boolean;
  userName: string;
  userRole: string;
  userType: string;
  userEmail: string;
  userId: string;
  userAccount: string;
  hideAppDrawer: boolean;
}

const initialState: AuthState = {
  authenticated: false,
  accessToken: "",
  loading: false,
  userName: "",
  userRole: "",
  userType: "",
  userEmail: "",
  userId: "",
  userAccount: "",
  hideAppDrawer: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (
      state,
      action: PayloadAction<{
        authenticated: boolean;
        accessToken: string;
        userName: string;
        userRole: string;
        userType: string;
        userEmail: string;
        userAccount: string;
      }>
    ) => {
      state.authenticated = action.payload.authenticated;
      state.accessToken = action.payload.accessToken;
      state.userName = action.payload.userName;
      state.userRole = action.payload.userRole;
      state.userType = action.payload.userType;
      state.userEmail = action.payload.userEmail;
      state.userAccount = action.payload.userAccount;
      state.hideAppDrawer = false;
    },
    addLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    logOutAction: (state, action: {}) => {
      state.authenticated = false;
      state.loading = false;
      state.accessToken = "";
      state.userName = "";
      state.userEmail = "";
      state.hideAppDrawer = false;
      state.userType = "";
      state.userRole = "";
      state.userId = "";
      state.userAccount = "";
    },
    addUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    addUserType: (state, action: PayloadAction<string>) => {
      state.userType = action.payload;
    },
    makeAppDrawerHide: (state, action: PayloadAction<boolean>) => {
      state.hideAppDrawer = action.payload;
    },
  },
});

export const {
  loginAction,
  logOutAction,
  addLoading,
  addUserId,
  addUserType,
  makeAppDrawerHide,
} = authSlice.actions;
export const selectAuthenticated = (state: RootState) =>
  state.auth.authenticated;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectLoading = (state: RootState) => state.auth.loading;
export const selectEmail = (state: RootState) => state.auth.userEmail;
export const selectUserName = (state: RootState) => state.auth.userName;
export const selectRole = (state: RootState) => state.auth.userRole;
export const isUserRole = (state: RootState) => state.auth.userRole === "user";
export const selectType = (state: RootState) => state.auth.userType;
export const selectId = (state: RootState) => state.auth.userId;
export const selectHideAppDrawer = (state: RootState) =>
  state.auth.hideAppDrawer;

export default authSlice.reducer;
