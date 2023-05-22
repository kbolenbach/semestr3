export class cookies {
    $bodyEle = document.querySelector('body');
    bodyOverlayClassName = "overlay";
    hideClassName = 'hide';
    showModalClassName = 'show';
    localStorageKey = 'modal';
    

    constructor(modalName) {
        this.modal = document.querySelector(`#${modalName}`);
        this.closeButton = this.modal.querySelector('button');
        this.bodyEle = document.querySelector('body');
    }

    LocalSt() {
        localStorage.setItem(this.localStorageKey, "accepted");
    }

    checkLocalStorage () {
        localStorage.getItem(this.localStorageKey);
        return;
    }

    handleCloseButton() {

        this.closeButton.addEventListener('click', function() {
            // this.LocalSt();
            // jeżeli tu wstawię:
            localStorage.setItem(this.localStorageKey, "accepted");
            // to dodaje poprawnie do localStorage
            // ale wywołanie tej funkcji poprzez this. wyrzuca błąd w konsoli

            if(this.checkLocalStorage === null) {
                // a tu znowu twierdzi, że 
                // Uncaught TypeError: Cannot read properties of undefined (reading 'classList')
                this.$bodyEle.classList.add(this.bodyOverlayClassName);
                // this.modal.classList.toggle(this.hideClassName);
               } else {
                this.$bodyEle.classList.remove(this.bodyOverlayClassName);
                // this.modal.classList.toggle(this.hideClassName);
            };
        })
    }

    init() {
        this.checkLocalStorage();
        this.handleCloseButton();
    }
}