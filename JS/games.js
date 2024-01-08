
import { UI } from './UI.js';

export default class Games {
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

