document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "basketball",
      img: "img/basketball1.png",
    },
    {
      name: "baseball",
      img: "img/baseball.png",
    },
    {
      name: "football",
      img: "img/football.png",
    },
    {
      name: "tennis",
      img: "img/tennis.png",
    },
    {
      name: "voleyball",
      img: "img/voleyball.png",
    },
    {
      name: "american-football",
      img: "img/american-football.png",
    },
    {
      name: "basketball",
      img: "img/basketball1.png",
    },
    {
      name: "baseball",
      img: "img/baseball.png",
    },
    {
      name: "football",
      img: "img/football.png",
    },
    {
      name: "tennis",
      img: "img/tennis.png",
    },
    {
      name: "voleyball",
      img: "img/voleyball.png",
    },
    {
      name: "american-football",
      img: "img/american-football.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "img/question-mark.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId === optionTwoId) {
      alert("You found a match!");
      cards[optionOneId].setAttribute("src", "img/question-mark.png");
      cards[optionTwoId].setAttribute("src", "img/question-mark.png");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("src", "img/ok.jpg");
      cards[optionTwoId].setAttribute("src", "img/ok.jpg");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "img/question-mark.png");
      cards[optionTwoId].setAttribute("src", "img/question-mark.png");
      alert("Sorry, try again!");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all";
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
