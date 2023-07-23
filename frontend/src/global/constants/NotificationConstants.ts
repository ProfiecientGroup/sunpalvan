import { StringConstants } from "./StringConstants";

class NotificationConstants extends StringConstants {
  GENERIC_ERROR = "An error has occurred";
  LOGGEDOUT = "You're logged out. Please login to continue.";
}

let notifiers = new NotificationConstants();
export default notifiers;
