import { LOGGED_IN_KEY } from "../../js/constants.js";

const isLoggedIn = localStorage.getItem(LOGGED_IN_KEY);

console.log({ isLoggedIn: !!isLoggedIn });
