
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

let delay =-0.4;
function createCard(date, day ,games) {
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
      createGame('Qatar', '16:00', 'Ecuador')
    )+

    createCard('21/11', "segunda",
      createGame('England', '10:00', 'Iran')+
      createGame('Senegal', '13:00', 'netherlands')+
      createGame('united states', '16:00', 'wales')
    )+

    createCard('22/11', "Terça",
      createGame('Argentina','07:00','Saudi Arabia')+
      createGame('Denmark','10:00','Tunisia')+
      createGame('mexico','13:00','Poland')+
      createGame('france','16:00','australia')
    )+

    createCard('23/11', "Quarta",
      createGame('Morocco','07:00','Croatia')+
      createGame('Germany','10:00','Costa Rica')+
      createGame('mexico','13:00','Poland')+
      createGame('Belgium','16:00','Canada')
    )+

    createCard('24/11', "Quinta",
      createGame('Switzerland','07:00','Cameroon')+
      createGame('Uruguay','10:00','South Korea')+
      createGame('Portugal','13:00','Ghana')+
      createGame('Brazil','16:00','Serbia')
    )+

    createCard('26/11', "sabado",
      createGame('Tunisia','07:00','Australia')+
      createGame('poland','10:00','Saudi Arabia')+
      createGame('France','13:00','Denmark')+
      createGame('Argentina','16:00','mexico')
    )+

    createCard('27/11', "Domingo",
      createGame('Japan','07:00','Costa Rica')+
      createGame('Belgium','10:00','Morocco')+
      createGame('Croatia','13:00','Canada')+
      createGame('Spain','16:00','Germany')
    )+

    createCard('28/11', "segunda",
      createGame('Cameroon','07:00','Serbia')+
      createGame('South Korea','10:00','Ghana')+
      createGame('Brazil','13:00','Switzerland')+
      createGame('Portugal','16:00','Uruguay')
    )+

    createCard('29/11', "Terça",
      createGame('Netherlands','12:00','Qatar')+
      createGame('Ecuador','12:00','Senegal')+
      createGame('Wales','16:00','England')+
      createGame('Iran','16:00','united states')
    )+

    createCard('30/11', "quarta",
      createGame('Tunisia','12:00','France')+
      createGame('Australia','12:00','Denmark')+
      createGame('Poland','16:00','Argentina')+
      createGame('Saudi Arabia','16:00','Mexico')
    )+

    createCard('01/12', "quinta",
      createGame('Croatia','07:00','Belgium')+
      createGame('Canada','10:00','Morocco')+
      createGame('Japan','13:00','Spain')+
      createGame('Costa Rica','16:00','Germany')
    )+

    createCard('02/12', "Sexta",
      createGame('Ghana','12:00','Uruguay')+
      createGame('South Korea','12:00','Portugal')+
      createGame('Serbia','16:00','Switzerland')+
      createGame('Cameroon','16:00','Brazil')
    )
    
