import { USER_LOGIN_INFO_KEY } from "./constants.js";
import { redirect } from "./forms.js";

export function loginGuard() {
  const data = localStorage.getItem(USER_LOGIN_INFO_KEY);

  if (!data) {
    redirect("/pages/login/index.html");
  }
}

export default {
  loginGuard,
};
