// get DOM (html page) elements

const searchBtn = document.querySelector("#searchBtn");
const searchInp = document.querySelector("#searchInp");
const resultDiv = document.querySelector("#resultDiv");
const bigImg = document.querySelector("#bigImg");
const colorSelect = document.querySelector("#colorSelect");

// add eventListener to searchBtn click
searchBtn.addEventListener("click", () => {
    const searchWord = searchInp.value;
    const searchColor = colorSelect.value;
    const newSearch = new Search(searchWord, searchColor);
    newSearch.getResult().then(results => {
        console.log(results);
        resultDiv.innerText = "";
        results.forEach(element => {
            resultDiv.append(element.renderHTML());
        })
    }).catch(error => {
        console.log(error);
    })
    
})

function showModal(largeImage){
    bigImg.src = largeImage;
    $('#imgModal').modal('show');
}

class Search{
    constructor(searchWord, searchColor){
        this.searchWord = searchWord;
        this.searchColor = searchColor;
    }

    getResult(){
        const url = "https://pixabay.com/api/?key=20104692-c83bb9ffa4b71525e77f92c25" + "&q=" + this.searchWord + (this.searchColor? '&colors=' + this.searchColor : '');
        return new Promise((resolve, reject) => {
            fetch(url).then(response => {
                if(response.status === 200){
                    response.json().then(data => {
                        this.results = [];
                        data.hits.forEach(result => {
                            const newResult = new ImageResult(result.id, result.largeImageURL, result.previewURL, result.user, result.tags);
                            this.results.push(newResult);
                        });
                        resolve(this.results);
                    }).catch(error => {
                        reject(error);
                    })
                } else {
                    reject(response.status);
                }
            }).catch(error => {
                reject(error);
            })
        })

    }
}

class ImageResult {
    constructor(id, largeImageURL, smallImageURL, user, tags){
        this.id = id;
        this.largeImageURL = largeImageURL;
        this.smallImageURL = smallImageURL;
        this.user = user;
        this.tags = tags;
    }

    renderHTML(){
        const containerDiv = document.createElement('div');
        containerDiv.className = "col-lg-3 col-md-6 col-sm-12";
        containerDiv.style.height = "450px";
        const htmlText = ` 
                <div class="card p-3" style="width: 18rem;">
                    <img class="card-img-top" src="${this.smallImageURL}" height = "150" alt="Card image cap">
                    <div class="card-body pb-0">
                        <h5 class="card-title">${this.user}</h5>
                        <p class="card-text" style = "min-height:50px">${this.tags}</p>
                        <a href="#" class="btn btn-primary mt-4" onclick="showModal('${this.largeImageURL}')">Preview</a>
                    </div>
                </div>`;
        containerDiv.innerHTML = htmlText;
        return containerDiv;
    }
}