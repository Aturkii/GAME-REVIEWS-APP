



// class GameApp {
//   constructor() {
//     this.gamesContainer = document.querySelector(".games");
//     this.detailsContainer = document.querySelector(".details");
//     this.closeBtn = document.getElementById("btnClose");
//     this.links = document.querySelectorAll(".nav-link");
//     this.datatwo = {};
//     this.category = ''
//   }

//   setActive(element) {
//     this.links.forEach((link) => {
//       link.classList.remove('active');
//     });
//     element.classList.add('active');
//   }

//   async fetchGames(catagory) {
//     document.getElementById('loader-container').style.display = 'flex';
//     const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=${catagory}`;
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'de6d88081emshab7067adabb0aa4p18dad4jsn316beb3ceb04',
//         'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//       }
//     };
//     try {
//       let response = await fetch(url, options);
//       this.data = await response.json();
//       document.getElementById('loader-container').style.display = 'none';
//       this.displayGames();
//     } catch (error) {
//       console.error('Error fetching games:', error);
//     }
//   }



//   async fetchDetails(itemId) {
//     const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${itemId}`;
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'de6d88081emshab7067adabb0aa4p18dad4jsn316beb3ceb04',
//         'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//       }
//     };
//     try {
//       let response = await fetch(url, options);
//       this.datatwo = await response.json();
//       this.displayDetails();
//     } catch (error) {
//       console.error('Error fetching details:', error);
//     }
//   }


//   displayGames() {
//     let cartona = "";
//     for (let item of this.data) {
//       cartona += `
//       <div class="hatsha col-md-6 col-lg-4  h-100"
//       <div class="card w-100 h-100  bg-transparent " role="button">

//         <div class="card-body position-relative my-2 h-100">
//           <div class="layer position-absolute h-100 w-100"></div>
//           <figure>
//             <img src="${item.thumbnail}" class=" w-100 card-img-top border-2 h-100 object-fit-cover">
//           </figure>
//           <figcaption class="h-100">
//             <div class="q justify-content-between">
//               <h3 class="h6 p-2">${item.title}</h3>
//               <span class="badge h5 text-bg-primary p-2">Free</span>
//             </div>
//             <p class="text-white card-text small text-center opacity-50">${item.short_description}</p>
//           </figcaption>
//         </div>
//         <footer class="card-footer  small q justify-content-between">
//           <span class="badge badge-color h5 fw-bolder">${item.genre}</span>
//           <span class="badge badge-color h5 fw-bolder">${item.platform}</span>
//         </footer>
//       </div>
//     </div>

//       `;
//     }

//     document.querySelector("#gameData").innerHTML = cartona;
//     this.initCardEventListeners();
//   }


//   initCardEventListeners() {
//     let cards = document.querySelectorAll(".hatsha");
//     cards.forEach((card, index) => {
//       card.addEventListener("click", () => {
//         this.detailsContainer.classList.remove("d-none");
//         this.gamesContainer.classList.add("d-none");
//         this.fetchDetails(this.data[index].id);
//       });
//     });
//   }


//   displayDetails() {
//     let details = `
//   <div class="row">
//   <div class="col-md-12 col-lg-4">
//     <img src="${this.datatwo.thumbnail}" class="w-100" alt="Game Image" />
//   </div>
//   <div class="col-md-12 col-lg-8">
//     <h3 class="fw-bold p-1 py-sm-2 h2">
//       Title: ${this.datatwo.title}
//     </h3>
//     <p class="fw-bold py-1">Category: <span class="bg-info rounded-3 p-1 text-dark">${this.datatwo.genre}</span></p>
//     <p class="fw-bold py-1">Platform: <span class="bg-info rounded-3 p-1 text-dark">${this.datatwo.platform}</span></p>
//     <p class="fw-bold py-1">Status: <span class="bg-info rounded-3 p-1 text-dark">${this.datatwo.status}</span></p>
//     <p>${this.datatwo.description}</p>
//     <a href="${this.datatwo.game_url}" class="btn btn-outline-warning" target="_blank">Show Game</a>
//   </div>
// </div>
//   `;
//     document.getElementById("detailsContent").innerHTML = details;
//   }

//   initEventListeners() {
//     for (let i = 0; i < this.links.length; i++) {
//       this.links[i].addEventListener("click", (e) => {
//         const category = e.target.innerHTML;
//         this.fetchGames(category);
//         this.setActive(e.target);
//       });
//     }

//     this.closeBtn.addEventListener("click", () => {
//       this.detailsContainer.classList.add("d-none");
//       this.gamesContainer.classList.remove("d-none");
//     });
//   }

//   start() {
//     this.initEventListeners();
//     this.fetchGames('mmorpg');
//   }
// }
// const gameApp = new GameApp();
// gameApp.start();





class UI {
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

class Games {
  constructor() {
    this.ui = new UI();
    this.closeBtn = document.getElementById("btnClose");
    this.links = document.querySelectorAll(".nav-link");
    this.data = [];
    this.datatwo = {};
    this.category = "";
  }

  setActive(element) {
    this.links.forEach((link) => {
      link.classList.remove('active');
    });
    element.classList.add('active');
  }

  async fetchGames(catagory) {
    document.getElementById('loader-container').style.display = 'flex';
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=${catagory}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'de6d88081emshab7067adabb0aa4p18dad4jsn316beb3ceb04',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    try {
      let response = await fetch(url, options);
      this.data = await response.json();
      document.getElementById('loader-container').style.display = 'none';
      this.ui.displayGames(this.data, this.initCardEventListeners.bind(this));
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  }

  async fetchDetails(itemId) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${itemId}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'de6d88081emshab7067adabb0aa4p18dad4jsn316beb3ceb04',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    try {
      let response = await fetch(url, options);
      this.datatwo = await response.json();
      this.ui.displayDetails(this.datatwo);
    } catch (error) {
      console.error('Error fetching details:', error);
    }
  }

  initCardEventListeners() {
    let cards = document.querySelectorAll(".hatsha");
    cards.forEach((card, index) => {
      card.addEventListener("click", () => {
        this.ui.detailsContainer.classList.remove("d-none");
        this.ui.gamesContainer.classList.add("d-none");
        this.fetchDetails(this.data[index].id);
      });
    });
  }

  initEventListeners() {
    for (let i = 0; i < this.links.length; i++) {
      this.links[i].addEventListener("click", (e) => {
        const category = e.target.innerHTML;
        this.fetchGames(category);
        this.setActive(e.target);
      });
    }

    this.closeBtn.addEventListener("click", () => {
      this.ui.detailsContainer.classList.add("d-none");
      this.ui.gamesContainer.classList.remove("d-none");
    });
  }

  start() {
    this.initEventListeners();
    this.fetchGames('mmorpg');
  }
}

Games = new Games();
Games.start();












