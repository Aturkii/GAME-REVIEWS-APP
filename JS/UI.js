

export default class UI {
  constructor() {
    this.gamesContainer = document.querySelector(".games");
    this.detailsContainer = document.querySelector(".details");
  }

  displayGames(data, initCardEventListeners) {
    let cartona = "";
    for (let item of data) {
      cartona += `
        <div class="hatsha col-md-6 col-lg-4 h-100">
          <div class="card w-100 h-100 bg-transparent " role="button">
            <div class="card-body position-relative my-2 h-100">
              <div class="layer position-absolute h-100 w-100"></div>
              <figure>
                <img src="${item.thumbnail}" class="w-100 card-img-top border-2 h-100 object-fit-cover">
              </figure>
              <figcaption class="h-100">
                <div class="q justify-content-between">
                  <h3 class="h6 p-2">${item.title}</h3>
                  <span class="badge h5 text-bg-primary p-2">Free</span>
                </div>
                <p class="text-white card-text small text-center opacity-50">${item.short_description}</p>
              </figcaption>
            </div>
            <footer class="card-footer small q justify-content-between">
              <span class="badge badge-color h5 fw-bolder">${item.genre}</span>
              <span class="badge badge-color h5 fw-bolder">${item.platform}</span>
            </footer>
          </div>
        </div>`;
    }

    document.querySelector("#gameData").innerHTML = cartona;
    initCardEventListeners();
  }

  displayDetails(datatwo) {
    let details = `
      <div class="row">
        <div class="col-md-12 col-lg-4">
          <img src="${datatwo.thumbnail}" class="w-100" alt="Game Image" />
        </div>
        <div class="col-md-12 col-lg-8">
          <h3 class="fw-bold p-1 py-sm-2 h2">Title: ${datatwo.title}</h3>
          <p class="fw-bold py-1">Category: <span class="bg-info rounded-3 p-1 text-dark">${datatwo.genre}</span></p>
          <p class="fw-bold py-1">Platform: <span class="bg-info rounded-3 p-1 text-dark">${datatwo.platform}</span></p>
          <p class="fw-bold py-1">Status: <span class="bg-info rounded-3 p-1 text-dark">${datatwo.status}</span></p>
          <p>${datatwo.description}</p>
          <a href="${datatwo.game_url}" class="btn btn-outline-warning" target="_blank">Show Game</a>
        </div>
      </div>`;

    document.getElementById("detailsContent").innerHTML = details;
  }
}

