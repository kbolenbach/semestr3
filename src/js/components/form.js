export class Form {

    API_LINK = "https://api.github.com/users/";
    REPO_LINK = "/repos";
    $userNameElement = document.getElementById('userName');
    $userRepositoryListElement = document.getElementById('repoList');
    $userAvatarElement = document.getElementById('userAvatar');

    constructor() {
        this.form = document.getElementById("main-form")
        this.input = document.querySelector('input')
        this.submittButton = document.querySelector('button')
        this.resetButton = document.getElementById('reset');
    }

    async handleSearchButton() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            const searchUser = document.getElementById("user-search").value
            
            fetch(this.API_LINK + searchUser)
                .then(result => result.json())
                .then(data => {
                    console.log(data)
                    this.$userAvatarElement.innerHTML = `<img src="${data.avatar_url} alt="" width="50" height="50">`
                    this.$userNameElement.innerHTML = `Nazwa: ${data.name}`;
                })
                .catch(error => console.log("Błąd:", error))

            fetch(this.API_LINK + searchUser + this.REPO_LINK)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    
                    const ul = document.createElement('ul');
                    data.forEach(repo => {
                            const li = document.createElement('li');
                            const link = document.createElement('a');
                            link.textContent = repo.name;
                            link.href = repo.html_url;
                            link.target = "_blank";
                            li.appendChild(link);
                            ul.appendChild(li);
                        }
                    )
                    this.$userRepositoryListElement.appendChild(ul);
                })

                .catch(error => console.log("Błąd:", error))
        })
    }  


    handleResetButton() {
        this.resetButton.addEventListener('click', () => {
            window.location.reload();
        })
    }

    init() {
            this.handleSearchButton();
            this.handleResetButton();
        }
}