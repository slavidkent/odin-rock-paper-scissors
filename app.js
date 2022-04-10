function computerPlay() {
  const play = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random()*3);
  return play[random];
}
