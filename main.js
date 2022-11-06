
function createGame(player1, hour, player2) {
  return `
  <li>
    <figure>
        <img src="./assets/bandeiras/${player1}.svg" alt="Bandeira do ${player1}">
        <figcaption>${player1}</figcaption>
    </figure>
      <strong>${hour}</strong>
    <figure>
        <img src="./assets/bandeiras/${player2}.svg" alt="Bandeira do ${player2}">
        <figcaption>${player2}</figcaption>
    </figure>
  </li>
`
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay:${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
     ${games}
    </ul>
  </div>
`
}

document.querySelector('#cards').innerHTML =

createCard('20/11', "domingo",
createGame('qatar', '16:00', 'ecuador')
)+

createCard('21/11', "segunda",
createGame('england', '10:00', 'iran')+
createGame('senegal', '13:00', 'netherlands')+
createGame('united states', '16:00', 'wales')
)+

createCard('22/11', "terça",
createGame('argentina','07:00','saudi arabia')+
createGame('denmark','10:00','tunisia')+
createGame('mexico','13:00','poland')+
createGame('france','16:00','australia')
)+

createCard('23/11', "quarta",
createGame('morocco','07:00','croatia')+
createGame('germany','10:00','costa rica')+
createGame('mexico','13:00','poland')+
createGame('belgium','16:00','canada')
)+

createCard('24/11', "quinta",
createGame('switzerland','07:00','cameroon')+
createGame('uruguay','10:00','south korea')+
createGame('portugal','13:00','ghana')+
createGame('brazil','16:00','serbia')
)+

createCard('26/11', "sabado",
createGame('tunisia','07:00','australia')+
createGame('poland','10:00','saudi arabia')+
createGame('france','13:00','denmark')+
createGame('argentina','16:00','mexico')
)+

createCard('27/11', "domingo",
createGame('japan','07:00','costa rica')+
createGame('belgium','10:00','morocco')+
createGame('croatia','13:00','canada')+
createGame('spain','16:00','germany')
)+

createCard('28/11', "segunda",
createGame('cameroon','07:00','serbia')+
createGame('south korea','10:00','ghana')+
createGame('brazil','13:00','switzerland')+
createGame('portugal','16:00','uruguay')
)+

createCard('29/11', "terça",
createGame('netherlands','12:00','qatar')+
createGame('ecuador','12:00','senegal')+
createGame('wales','16:00','england')+
createGame('iran','16:00','united states')
)+

createCard('30/11', "quarta",
createGame('tunisia','12:00','france')+
createGame('australia','12:00','denmark')+
createGame('poland','16:00','argentina')+
createGame('saudi arabia','16:00','mexico')
)+

createCard('01/12', "quinta",
createGame('croatia','07:00','belgium')+
createGame('canada','10:00','morocco')+
createGame('japan','13:00','spain')+
createGame('costa rica','16:00','germany')
)+

createCard('02/12', "Sexta",
createGame('ghana','12:00','uruguay')+
createGame('south korea','12:00','portugal')+
createGame('serbia','16:00','switzerland')+
createGame('cameroon','16:00','brazil'))

let mainColor = document.getElementById("bg");

let themeYellow = document.getElementById("theme-yellow").addEventListener('click', function(){
  mainColor.classList.remove('blue');
  mainColor.classList.remove('green');
  mainColor.classList.add('yellow')
});

let themeGreen = document.getElementById("theme-green").addEventListener('click', function(){
  mainColor.classList.remove('blue');
  mainColor.classList.remove('yellow');
  mainColor.classList.add('green');
});

let themeBlue = document.getElementById("theme-blue").addEventListener('click', function(){
  mainColor.classList.remove('green');
  mainColor.classList.remove('yellow');
  mainColor.classList.add('blue');
});