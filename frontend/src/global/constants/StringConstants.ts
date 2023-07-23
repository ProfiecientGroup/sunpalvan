export class StringConstants {
  PROD = false;

  //contentTypes
  applicationJSON = { "Content-Type": "application/json" };
  multipartForm = {};

  notification = "notification";
  error = "error";
  success = "success";
  warning = "warning";
  info = "info";
  autoHideDuration = 600 * 1000; //in milliseconds

    //date
    am = "AM";
    pm = "PM";
  
    SEARCH_TIME_OUT = 350;

  LOGIN = "login";
  REGISTER = "register";
  FORGOT_PASSWORD = "forgot-password";
  CHANGE_PASSWORD = "changepwd";

    //Email validation Regex
    regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,100}$/;
}

let strings = new StringConstants();
export default strings;
