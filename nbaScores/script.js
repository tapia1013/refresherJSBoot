const warriorsGames = [{
  awayTeam: {
    team: 'Golden State',
    points: 119,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 106,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 105,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 127,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 126,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 85,
    isWinner: false
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 92,
    isWinner: false
  },
  awayTeam: {
    team: 'Houston',
    points: 95,
    isWinner: true
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 94,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 98,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 115,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 86,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 101,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 92,
    isWinner: false
  }
}
]


// make new element container
const ulparent = document.createElement('ul')

// iterate over the games
for (let game of warriorsGames) {
  const { homeTeam, awayTeam } = game

  // console.log(awayTeam.team, homeTeam.team);

  // we want an li for each team
  const gameLi = document.createElement('li');

  // destructure points and team out of object
  const {
    team: hTeam,
    points: hPoints
  } = homeTeam;

  const {
    team: aTeam,
    points: aPoints
  } = awayTeam


  // GSW @ Houston
  // gameLi.innerText = `${awayTeam.team} @ ${homeTeam.team}`;
  const teamNames = `${aTeam} @ ${hTeam}`

  // have to put scoreline here cause if statement doesnt have access to it cause of scope
  let scoreLine;

  // compare the 2 points
  if (aPoints > hPoints) {
    // score - score
    scoreLine = `<b>${aPoints}</b>-${hPoints}`
  } else {
    scoreLine = `${aPoints}-<b>${hPoints}</b>`
  }

  // check if gsw
  const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam
  // is winner?
  gameLi.classList.add(warriors.isWinner ? 'win' : 'loss')

  gameLi.innerHTML = `${teamNames} ${scoreLine}`


  // append each li into the ul
  ulparent.appendChild(gameLi)
}

// For it to show up we need to append it to the body, shows "Golden State @ Houston" now
document.body.prepend(ulparent)























