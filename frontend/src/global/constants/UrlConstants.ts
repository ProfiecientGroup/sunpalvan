import { StringConstants } from "./StringConstants";

class UrlConstants extends StringConstants {
  PROD = false;

  url_prod = "<PROD_BACKEND_URL>";
  url_dev = "<DEV_BACKEND_URL>";
  // url_dev = "http://localhost:3000";

  url = this.PROD ? this.url_prod : this.url_dev;

  // View Paths
  landingViewPath = "/";
  loginViewPath = "/login";
  registerViewPath = "/register";
  forgotPasswordViewPath = "/forget-password";

  // Base Folders
  auth = "auth";

  // Endpoint
  REFRESHTOKEN = `${this.url}/auth/refreshToken`;
}

let urls = new UrlConstants();
export default urls;
