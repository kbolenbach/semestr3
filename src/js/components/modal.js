export class cookies {
    $bodyElement = document.querySelector('body');
    bodyOverlayClassName = 'overlay';
    hideClassName = 'hide';
    showModalClassName = 'show';
    

    constructor(modalName) {
        this.modal = document.querySelector(`#${modalName}`);
        this.closeButton = this.modal.querySelector('button');
        this.localStorage = localStorage.getItem("cookiesAccepted");
    }

    handleCloseButton() {

        this.closeButton.addEventListener('click', function() {
            localStorage.setItem("cookiesAccepted", "accepted2");
            if(this.localStorage = "cookiesAccepted") {
                this.modal.classList.add(this.hideClassName);
                this.$bodyElement.classList.remove(this.bodyOverlayClassName);
            }
        })
    }

    init() {
        this.$bodyElement.classList.add(this.bodyOverlayClassName);
        this.modal.classList.remove(this.hideClassName);
    }
}