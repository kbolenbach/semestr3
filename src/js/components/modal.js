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

            this.modal.classList.add(this.hideModalClassName);
            this.$bodyElement.classList.remove(this.bodyOverlayClassName);
            this.setLocalStorage();
            setTimeout(() => {this.modal.parentNode.removeChild(this.modal)}, 3000);
        })
    }

    modalDelay() {
        this.modal.classList.add(this.hideClassName)
        setTimeout(() => {
            this.modal.classList.remove(this.hideClassName);
            this.modal.classList.add(this.showModalClassName);
        }, 5000);
    }

    init() {

        if(this.checkLocalStorage()) {
            this.handleCloseButton();
            this.$bodyElement.classList.add(this.bodyOverlayClassName);
            this.modalDelay();
        }
    }}