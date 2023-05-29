export class Cookies {
    $bodyElement = document.querySelector('body');
    bodyOverlayClassName = 'overlay';
    hideClassName = 'hide';
    showModalClassName = 'show';
    localStorageKey = 'modal';
    hideModalClassName = 'modal-hide';
    

    constructor(modalName) {
        this.modal = document.querySelector(`#${modalName}`);
        this.closeButton = this.modal.querySelector('button');
    }
   
    setLocalStorage() {
        localStorage.setItem(this.localStorageKey, "accepted");
    }

    checkLocalStorage() {
        return localStorage.getItem(this.localStorageKey) === null;
    }

    handleCloseButton() {

        this.closeButton.addEventListener('click', () => {

            localStorage.setItem(this.localStorageKey, "accepted");

            if(this.checkLocalStorage()) {
                this.handleCloseButton();
                this.$bodyElement.classList.add(this.bodyOverlayClassName);
               } else {
                this.$bodyElement.classList.remove(this.bodyOverlayClassName);
                this.modal.classList.remove(this.showModalClassName);
                this.modal.classList.add(this.hideModalClassName);
                setTimeout(() => {
                    this.modal.parentNode.removeChild(this.modal);
                 }, 500);
            };
        })
    }

    init() {
        this.checkLocalStorage();
        this.handleCloseButton();
    }
}