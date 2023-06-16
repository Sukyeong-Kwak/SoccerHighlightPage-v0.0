const btnPremier = document.querySelector(".league.header__premier");
const btnLa = document.querySelector(".league.header__la");
const btnBundes = document.querySelector(".league.header__bundes");
const btnSeire = document.querySelector(".league.header__serie");
const btnOne = document.querySelector(".league.header__one");

const article = document.querySelector(".article");

const btn = document.querySelectorAll(".league");

const apiToken =
  "OTIxMTRfMTY4NjcyNTk1MV9mNmM4ZTdhMTczOWJiYjFmMTA5NGIwMzM1YWY4NDBhNTVjNTdlMDcx";
const scorebatUrl = `https://www.scorebat.com/video-api/v3/feed/?token=${apiToken}`;

async function eplGetData() {
  try {
    const response = await fetch(scorebatUrl);
    const data = await response.json();
    const competitions = await data.response.filter(
      (game) => game.competition == "ENGLAND: Premier League"
    );
    let premierHTML = "";
    competitions.forEach((game) => {
      premierHTML += `<div class="game"><div class="video">${
        game.videos[0].embed
      }</div>
      <div class="content">
      <div class="title">${
        game.title
      }</div><div class="date">${game.date.substr(0, 10)} ${game.date
        .substr(11, 15)
        .substr(0, 8)}</div>
      </div>
      </div>`;
    });
    article.innerHTML = premierHTML;
  } catch (error) {
    console.error(error);
  }
}

async function laGetData() {
  try {
    const response = await fetch(scorebatUrl);
    const data = await response.json();
    const competitions = await data.response.filter(
      (game) => game.competition == "SPAIN: La Liga"
    );
    let laHTML = "";
    competitions.forEach((game) => {
      laHTML += `<div class="game"><div class="video">${
        game.videos[0].embed
      }</div>
      <div class="content">
      <div class="title">${
        game.title
      }</div><div class="date">${game.date.substr(0, 10)}  /  ${game.date
        .substr(11, 15)
        .substr(0, 8)}</div>
      </div>
      </div>`;
    });
    article.innerHTML = laHTML;
  } catch (error) {
    console.error(error);
  }
}

async function serieGetData() {
  try {
    const response = await fetch(scorebatUrl);
    const data = await response.json();
    const competitions = await data.response.filter(
      (game) => game.competition == "ITALY: Serie A"
    );
    let serieHTML = "";
    competitions.forEach((game) => {
      serieHTML += `<div class="game"><div class="video">${
        game.videos[0].embed
      }</div>
      <div class="content">
      <div class="title">${
        game.title
      }</div><div class="date">${game.date.substr(0, 10)}  /  ${game.date
        .substr(11, 15)
        .substr(0, 8)}</div>
      </div>
      </div>`;
    });
    article.innerHTML = serieHTML;
  } catch (error) {
    console.error(error);
  }
}

async function bundesGetData() {
  try {
    const response = await fetch(scorebatUrl);
    const data = await response.json();
    const competitions = await data.response.filter(
      (game) => game.competition == "GERMANY: Bundesliga"
    );
    let bundesHTML = "";
    competitions.forEach((game) => {
      bundesHTML += `<div class="game"><div class="video">${
        game.videos[0].embed
      }</div>
      <div class="content">
      <div class="title">${
        game.title
      }</div><div class="date">${game.date.substr(0, 10)}  /  ${game.date
        .substr(11, 15)
        .substr(0, 8)}</div>
      </div>
      </div>`;
    });
    article.innerHTML = bundesHTML;
  } catch (error) {
    console.error(error);
  }
}

function changePage() {}

async function oneGetData() {
  try {
    const response = await fetch(scorebatUrl);
    const data = await response.json();
    const competitions = await data.response.filter(
      (game) => game.competition == "FRANCE: Ligue 1"
    );
    let oneHTML = "";
    competitions.forEach((game) => {
      oneHTML += `<div class="game"><div class="video">${
        game.videos[0].embed
      }</div>
      <div class="content">
      <div class="title">${
        game.title
      }</div><div class="date">${game.date.substr(0, 10)}  /  ${game.date
        .substr(11, 15)
        .substr(0, 8)}</div>
      </div>
      </div>`;
    });
    article.innerHTML = oneHTML;
  } catch (error) {
    console.error(error);
  }
}

btnPremier.addEventListener("click", eplGetData);
btnLa.addEventListener("click", laGetData);
btnBundes.addEventListener("click", bundesGetData);
btnSeire.addEventListener("click", serieGetData);
btnOne.addEventListener("click", oneGetData);

eplGetData();
