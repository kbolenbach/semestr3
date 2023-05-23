export class Cookies {
    $bodyElement = document.querySelector('body');
    bodyOverlayClassName = 'overlay';
    hideClassName = 'hide';
    showModalClassName = 'show';
    localStorageKey = 'modal';
    

    constructor(modalName) {
        this.modal = document.querySelector(`#${modalName}`);
        this.closeButton = this.modal.querySelector('button');
    }
   
    setLocalStorage() {
        // ten zapis dodaje do LocalStorage klucz "undefined" i wartość "accepted"
        localStorage.setItem(this.localStorageKey, "accepted");
    }

    checkLocalStorage() {
        return localStorage.getItem(this.localStorageKey) === null;
    }

    handleCloseButton() {

        this.closeButton.addEventListener('click', function() {

            localStorage.setItem(this.localStorageKey, "accepted");
            // jeżeli w linii 27 używam this.setLocalStorage(); to w konsoli wyrzuca błąd:
            // Uncaught TypeError: this.setLocalStorage is not a function
            

            // tu mi też wyrzuca błąd dla linii 35
            // Uncaught TypeError: this.checkLocalStorage is not a function

            if(this.checkLocalStorage()) {
                this.handleCloseButton();
                this.$bodyElement.classList.add(this.bodyOverlayClassName);
               } else {
                this.$bodyElement.classList.remove(this.bodyOverlayClassName);
            };
        })
    }

    init() {
        this.checkLocalStorage();
        this.handleCloseButton();
    }
}