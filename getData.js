const article = document.querySelector(".article");
const btn = document.querySelectorAll(".league");

const apiToken =
  "OTIxMTRfMTY4NjcyNTk1MV9mNmM4ZTdhMTczOWJiYjFmMTA5NGIwMzM1YWY4NDBhNTVjNTdlMDcx";
const scorebatUrl = `https://www.scorebat.com/video-api/v3/feed/?token=${apiToken}`;

function changePage(e) {
  const currentPage = document.querySelector(".current-page");
  currentPage.classList.remove("current-page");
  e.currentTarget.classList.add("current-page");
}

async function getData(leagueName) {
  try {
    const response = await fetch(scorebatUrl);
    const data = await response.json();
    const competitions = await data.response.filter(
      (game) => game.competition == leagueName
    );
    let ouputHTML = "";
    competitions.forEach((game) => {
      ouputHTML += `<div class="game"><div class="video">${
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
    article.innerHTML = ouputHTML;
  } catch (error) {
    console.error(error);
  }
}

async function outputData() {
  const response = await fetch(scorebatUrl);
  const data = await response.json();
  console.log(data);
}

// 작동하는 함수의 위치도 중요한가? 맨 위에 있던 chagePage 함수를 동영상
// 가져오는 함수들 밑으로
// 옮기니까 changePage 함수가 작동됨, 그 전엔 안됬었음

const leagueNames = [
  "ENGLAND: Premier League",
  "SPAIN: La Liga",
  "GERMANY: Bundesliga",
  "ITALY: Serie A",
  "FRANCE: Ligue 1",
];

btn.forEach((item, index) => {
  item.addEventListener("click", changePage);
  item.addEventListener("click", () => getData(leagueNames[index]));
});

getData("ENGLAND: Premier League");
outputData();
