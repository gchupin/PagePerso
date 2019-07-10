let deck = ["10Clubs", "11Hearts", "13Clubs", "1Hearts", "3Clubs", "4Hearts",
"6Clubs",  "7Hearts", "9Clubs", "10Diamonds", "11Spades", "13Diamonds",
"1Spades", "3Diamonds", "4Spades", "6Diamonds", "7Spades", "9Diamonds",
"10Hearts", "12Clubs", "13Hearts", "2Clubs", "3Hearts", "5Clubs", "6Hearts",
"8Clubs", "9Hearts", "10Spades", "12Diamonds", "13Spades", "2Diamonds",
"3Spades", "5Diamonds", "6Spades", "8Diamonds", "9Spades", "11Clubs",
"12Hearts", "1Clubs", "2Hearts", "4Clubs", "5Hearts", "7Clubs", "8Hearts",
"11Diamonds", "12Spades", "1Diamonds", "2Spades", "4Diamonds", "5Spades",
"7Diamonds", "8Spades"];

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
    if (Number.isNaN(cardNum))
    {
      if (id !== "bank-cards")
      {playerScores = playerScores + Number (card.slice (0, 1));}
      else {bankScores = bankScores + Number (card.slice (0, 1));}
    }
    else
    {
      if (id !== "bank-cards") {playerScores = playerScores + 10;}
      else {bankScores = bankScores + 10;}
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
  const cardPath = NewCard (id);
  if (cardPath === -1)
  {
    alert ("wtf dude");
    return;
  }
  newCard.setAttribute("src", cardPath);
  //newCard.src = cardPath;
  document.getElementById(id).appendChild(newCard);
  isGameOver ();
}

function getScores ()
{
  document.getElementById ("playerScores").innerHTML = playerScores.toString();
  document.getElementById ("bankScores").innerHTML = bankScores.toString();
}


function isGameOver ()
{
  if (playerScores > 21) {playerLoose ();}
  if (playerScores === 21) {blackjack ();}
  if (bankScores > 21) {playerWin ();}
}

function blackjack ()
{
  document.getElementById("btn-draw").removeEventListener("click", playerPlays);
  document.getElementById("btn-stay").removeEventListener("click", playerStays);
  bodyChange ("DeepPink", "white", "center", "BLACKJACK", parseInt(getCookie ("bet")) * 2);
}

function playerWin ()
{
  document.getElementById("btn-draw").removeEventListener("click", playerPlays);
  document.getElementById("btn-stay").removeEventListener("click", playerStays);
  bodyChange ("blue", "DeepPink", "center", "Félicitation", getCookie ("bet"));
}

function playerLoose ()
{
  document.getElementById("btn-draw").removeEventListener("click", playerPlays);
  document.getElementById("btn-stay").removeEventListener("click", playerStays);
  bodyChange ("black", "red", "center", "Perdu", -getCookie ("bet"));
}

function fadeOut(el){
		let opacity = 1;
		let timer = setInterval(function(){
				if (opacity <= 0.1){
						clearInterval(timer);
						el.style.display = "none";
				}
				el.style.opacity = opacity;
				el.style.filter = "alpha(opacity=" + opacity * 100 + ")";
				opacity -= opacity * 0.1;
		}, 42)
}

function bodyChange (bgColor, color, txtAlign, txt, reward)
{
  
  fadeOut(document.getElementById("toFade"));
  setTimeout (function ()
  {
    let body = document.getElementsByTagName("body").item(0);
    body.style.backgroundImage = "none";
    body.style.backgroundColor = bgColor;
    body.style.fontSize = "200px";
    body.style.color = color;
    body.style.textAlign = txtAlign;
		body.appendChild(document.createTextNode(txt));
    body.appendChild(document.createElement("br")); 
    if (reward > 0){
      body.appendChild( document.createTextNode("You earn" + reward));
    }
    else{
      body.appendChild(document.createTextNode("You lose " + (-reward)));
    }
    setCookie ("playerMoney", Number(getCookie("playerMoney")) +
    Number(reward) ,30);
    setCookie ("bankMoney", Number(getCookie("bankMoney")) - Number(reward) ,
    30);
    replay ();

  }, 1000);
}

function replay ()
{
  let body = document.getElementsByTagName("body").item(0);
  body.appendChild(document.createElement("br"));
  let button = document.createElement("button");
  button.textContent = "Rejouer";
  button.setAttribute("id", "btn-replay");
  button.setAttribute("class", "btn-sm btn-info");
  body.appendChild(button);
  document.getElementById("btn-replay").addEventListener("click", function (){
    location.reload ();
  });
}

function setCookie(cname,cvalue,exdays) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {return c.substring(name.length, c.length);}
  }
  return "";
}

function chooseANumber (txt,min,max, defaultValue)
{
  let inputValue = null;
  do
  {
    inputValue = prompt (txt, defaultValue);
  }while(inputValue === null || !Number.isInteger (Number(inputValue)) || Number(inputValue) > max || inputValue <= min)
  return inputValue;
}

function updateMoney ()
{
  let playerMoney = getCookie ("playerMoney");
  let bankMoney = getCookie ("bankMoney");
  if (playerMoney === "" && bankMoney === "")
  {
    playerMoney = chooseANumber ("Ton solde de départ ?", 0, Infinity, 100);
    bankMoney = chooseANumber ("Le solde de départ de la banque ?", 0, Infinity,
    100);
    setCookie ("playerMoney", playerMoney, 30);
			setCookie ("bankMoney", bankMoney, 30);
  }
  document.getElementById ("bankMoney").innerHTML = bankMoney;
  document.getElementById ("playerMoney").innerHTML = playerMoney;
}

function begin ()
{
  document.getElementById("game").style.display = "";
		
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
        else {playerWin ();}
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
  let body = document.getElementsByTagName("div").item(0);
  body.style.backgroundImage = "none";
  body.style.backgroundColor = bgColor;
  body.style.fontSize = "200px";
  body.style.color = txtColor;
  body.style.textAlign = "center";
  body.appendChild(document.createTextNode(txt));
  body.appendChild(document.createElement("br"));
  let button = document.createElement("button");
  button.textContent = "Wee Wee";
  button.setAttribute("id", "btn-restart");
  button.setAttribute("class", "btn-sm btn-info");
  body.appendChild(button);
  document.getElementById("btn-restart").addEventListener("click", function (){
    document.cookie = "bet=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf("=");
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
      location.reload ();
    }
  });
}

function bet ()
{
		document.getElementById("game").style.display = "none";
		updateMoney ();
  let betValue = null;
  //supprime le cookie
  document.cookie = "bet=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  let playerMoney = getCookie ("playerMoney");
  let bankMoney = getCookie ("bankMoney");
  if (parseInt(playerMoney) <= 0)
  {
    gameOver ("red", "green", "T'a plus de fric boloss");//pétage des yeux
  }
  else if (parseInt(bankMoney) <= 0)
  {
    gameOver ("yellow", "blue", "Bravo t'a séché la banque <br> Go vegan");
  }
  else
  {
    betValue = chooseANumber ("Pariez (entre 1 et " + playerMoney + "): ", 0,
    playerMoney, 10);
    setCookie ("bet",betValue,30);
    document.getElementById ("currentBet").innerHTML = betValue;
    begin ();
  }
}

window.onload = () => bet ();
