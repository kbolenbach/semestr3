import { cookies } from "./components/modal";

const cookieButton = new cookies(`modal-welcome`);
cookieButton.init();
cookieButton.handleCloseButton();

// localStorage.clear();