import { Cookies } from "./components/modal2";

const cookieButton = new Cookies(`modal-welcome`);

localStorage.clear();
cookieButton.init();
