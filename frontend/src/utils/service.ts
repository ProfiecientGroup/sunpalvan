import history from "./history";
import urls from "../global/constants/UrlConstants";
import { store } from "./store";
import { logOutAction } from "../redux/authSlice";
import strings from "../global/constants/StringConstants";
import notifiers from "../global/constants/NotificationConstants";

// Checks if the error code is 401 or 403 -> Logout the user
export const checkStatus = async (error: any) => {
  if (error.status === 403 || error.status === 401) {
    store.dispatch(logOutAction());
    history.push(urls.landingViewPath);
    return true;
  }
  return false;
};

// Authenticated Call Headers
export const getCallParams = async (methodType: string, body?: any) => {
  const accessToken = "Bearer " + store.getState().auth.accessToken;
  return {
    method: methodType,
    headers: await getHeaderObject(accessToken, strings.applicationJSON),
    body: JSON.stringify(body),
  };
};

// Unauthenticated Call Headers
export const getNoAuthCallParams = (methodType: string, body?: any) => {
  return {
    method: methodType,
    headers: strings.applicationJSON,
    body: JSON.stringify(body),
  };
};

export const getFileCallParams = async (body: any) => {
  const accessToken = store.getState().auth.accessToken;
  return {
    method: "POST",
    headers: await getHeaderObject(accessToken, strings.multipartForm),
    body: body,
  };
};

export const getNoAuthFileCallParams = (body: any) => {
  return {
    method: "POST",
    headers: strings.multipartForm,
    body: body,
  };
};

export async function getHeaderObject(accessToken: string, contentType: any) {
  try {
    if (accessToken) {
      return {
        ...contentType,
        Authorization: accessToken,
      };
    }
    history.push(urls.landingViewPath);
    return null;
  } catch (error: any) {
    throw error;
  }
}

// Triggers the api call
// If the api call takes more time than timeout, then it will timeout the call.
export const makeCall = async (callName: string, callParams: any) => {
  try {
    let call = fetch(callName, callParams);
    let timeout = getTimeoutPromise();

    const response: any = await Promise.race([timeout, call]).catch((error) => {
      throw error;
    });

    const json = await response.json();
    if (response && response.ok) {
      return json;
    }
    throw json;
  } catch (error: any) {
    if (await checkStatus(error)) {
      throw notifiers.LOGGEDOUT;
    }
    throw error;
  }
};

export const getTimeoutPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        reject({
          error: true,
          message: "Something went wrong. Please reload the page.",
        }),
      10000 // 10 Seconds
    );
  });
};
