let deck = ["10Clubs", "11Hearts", "13Clubs", "1Hearts", "3Clubs", "4Hearts", "6Clubs",  "7Hearts", "9Clubs",
"10Diamonds", "11Spades", "13Diamonds", "1Spades", "3Diamonds", "4Spades", "6Diamonds", "7Spades", "9Diamonds",
"10Hearts", "12Clubs", "13Hearts", "2Clubs", "3Hearts", "5Clubs", "6Hearts", "8Clubs", "9Hearts",
"10Spades", "12Diamonds", "13Spades", "2Diamonds", "3Spades", "5Diamonds", "6Spades", "8Diamonds", "9Spades",
"11Clubs", "12Hearts", "1Clubs", "2Hearts", "4Clubs", "5Hearts", "7Clubs", "8Hearts",
"11Diamonds", "12Spades", "1Diamonds", "2Spades", "4Diamonds", "5Spades", "7Diamonds", "8Spades"];

let playerScores = 0;
let bankScores = 0;

function getRandomInt (max)//number between 0 and max - 1
{
  return Math.floor(Math.random() * Math.floor(max));
}

function RandomCard ()
{
  const colorsTab = ["Clubs", "Diamonds", "Spades", "Hearts"];
  const num = getRandomInt (13) + 1;
  const color = colorsTab[getRandomInt (4)];
  const cardPath = "img/" + num + color + ".gif";
  return cardPath;
}
function NewCard (id)
{
  if (deck.length > 0)
  {
    const card = deck[Math.floor (Math.random() * deck.length)];
    let cardNum = Number(card.slice (0, 2));
    if (Number(isNaN(cardNum)))
    {
      if (id !== "bank-cards") playerScores = playerScores + Number (card.slice (0, 1));
      else bankScores = bankScores + Number (card.slice (0, 1));
    }
    else
    {
      if (id !== "bank-cards") playerScores = playerScores + 10;
      else bankScores = bankScores + 10;
    }
    getScores ();
    deck = deck.filter (deck => deck !== card);
    const cardPath = "img/" + card + ".gif";
    return cardPath;
  }
  return -1;
}

function addCard (id)
{
  let newCard = document.createElement ("IMG");
  cardPath = NewCard (id);
  if (cardPath === -1)
  {
    alert ("wtf dude");
    return;
  }
  newCard.src = cardPath;
  document.getElementById(id).appendChild(newCard);
  isGameOver ();
}

function getScores ()
{
  document.getElementById ("playerScores").innerHTML = playerScores;
  document.getElementById ("bankScores").innerHTML = bankScores;
}


function isGameOver ()
{
  if (playerScores > 21) playerLoose ();
  if (playerScores === 21) blackjack ();
  if (bankScores > 21) playerWin ();
}

function blackjack ()
{
  document.getElementById("btn-draw").removeEventListener("click", playerPlays);
  document.getElementById("btn-stay").removeEventListener("click", playerStays);
  bodyChange ("DeepPink", "200px", "white", "center", "BLACKJACK", getCookie ("bet") * 2, false);
  $("div").fadeOut (1000);
}

function playerWin ()
{
  document.getElementById("btn-draw").removeEventListener("click", playerPlays);
  document.getElementById("btn-stay").removeEventListener("click", playerStays);
  bodyChange ("white", "200px", "DeepPink", "center", "Félicitation", getCookie ("bet"), false);
}

function playerLoose ()
{
  document.getElementById("btn-draw").removeEventListener("click", playerPlays);
  document.getElementById("btn-stay").removeEventListener("click", playerStays);
  bodyChange ("black", "200px", "red", "center", "Perdu", -getCookie ("bet"), false);
}

function bodyChange (bgColor, ftSize, color, txtAlign, txt, reward, fadeIn)
{
  if (fadeIn) $("div").fadeIn (1000);
  else $("div").fadeOut (1000);
  setTimeout (function ()
  {
    $("body").css("background-color", bgColor);
    $("body").css("font-size", ftSize);
    $("body").css("color", color);
    $("body").css("text-align", txtAlign);
    if (!fadeIn)
    {
      $("body").append (txt);
      $("body").append ("<br>");
      if (reward > 0)
      $("body").append ("You earn " + reward);
      else
      $("body").append ("You lose " + (-reward));
      setCookie ("playerMoney", Number(getCookie("playerMoney")) + Number(reward) ,30);
      setCookie ("bankMoney", Number(getCookie("bankMoney")) - Number(reward) ,30);
      replay ();
    }
  }, 1000);
}

function replay ()
{
  $("body").append ("<br/>");
  let r= $('<input id="btn-replay" type="button" class="btn-sm btn-info" value="Rejouer"/>');
  $("body").append(r);
  document.getElementById("btn-replay").addEventListener("click", function (){
    location.reload ();
  });
}

function setCookie(cname,cvalue,exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function updateMoney ()
{
  let playerMoney = getCookie ("playerMoney");
  let bankMoney = getCookie ("bankMoney");
  if (playerMoney != "" && bankMoney != "")
  {
    document.getElementById ("bankMoney").innerHTML = bankMoney;
    document.getElementById ("playerMoney").innerHTML = playerMoney;
  }
  else
  {
    let bankMoneyStart = prompt ("How many money do you want to start", 100);
    let playerMoneyStart = prompt ("How many money do you want to start", 100);
    setCookie ("bankMoney", bankMoneyStart, 30);
    setCookie ("playerMoney", playerMoneyStart, 30);
  }
}

function begin ()
{
  $("#game").show ();

  setTimeout (function () {addCard ("player-cards")}, 500);
  setTimeout (function () {addCard ("player-cards")}, 1000);
  setTimeout (function () {
    addCard ("bank-cards");
    document.getElementById("btn-draw").addEventListener("click", playerPlays);
    document.getElementById("btn-stay").addEventListener("click", playerStays);
  }, 1500);

  }

  function playerPlays ()
{
  addCard("player-cards");
}

function playerStays ()
{
  document.getElementById("btn-draw").removeEventListener("click", playerPlays);
  document.getElementById("btn-stay").removeEventListener("click", playerStays);
  let bankLatency = setInterval (function ()
  {
    addCard ("bank-cards");
    if (bankScores >= 17)
    {
      clearInterval (bankLatency);
      if (bankScores <= 21) {
        if (bankScores > playerScores) playerLoose ();
        else playerWin ();
      }
    }
    else if (bankScores > playerScores)
    {
      clearInterval (bankLatency);
      playerLoose ();
    }
  }, 1000);
}

function gameOver (bgColor, txtColor, txt)
{
  $("div").hide();
  $("body").css("background-color", bgColor);
  $("body").css("font-size", "200px");
  $("body").css("color", txtColor);
  $("body").append(txt);
  $("body").css("text-align", "center");
}

function bet ()
{
  $("#game").hide ();
  updateMoney ();
  let betValue = null;
  document.cookie = "bet=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";//supprime le cookie
  let playerMoney = getCookie ("playerMoney");
  let bankMoney = getCookie ("bankMoney");
  if (playerMoney <= 0)
  {
    gameOver ("red", "green", "T'a plus de fric boloss");//pétage des yeux
  }
  else if (bankMoney <= 0)
  {
    gameOver ("yellow", "blue", "Bravo t'a séché la banque <br> Go vegan");
  }
  else {
    {
  }
  do
  {
    betValue = prompt ("Please enter your bet between 1 and " + playerMoney + ": ", 50);
  }while(betValue === null || Number(betValue) > playerMoney || betValue <= 0)
  setCookie ("bet",betValue,30);
  document.getElementById ("currentBet").innerHTML = betValue;
  begin ();
}
}

document.onload = bet ();//begin ();
