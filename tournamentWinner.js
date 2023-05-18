const tournamentWinner = (competitions, results) => {
  let winner = { score: 0, name: "" };
  const scoreMap = {};

  for (let i = 0; i < competitions.length; i++) {
    let home = competitions[i][0];
    let away = competitions[i][1];

    if (results[i] === 0) {
      scoreMap[away] = (scoreMap[away] || 0) + 3;
    } else {
      scoreMap[home] = (scoreMap[home] || 0) + 3;
    }

    if (scoreMap[away] >= winner.score) {
      winner = { score: scoreMap[away], name: away };
    } else if (scoreMap[home] >= winner.score) {
      winner = { score: scoreMap[home], name: home };
    }
  }
  return winner.name;
};
