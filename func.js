function SecretWord() {
  let words = ['cat', 'dog', 'bird', 'donkey', 'horse'];

  return words[Math.floor(Math.random() * words.length)];
}

function playGame() {
  let secretWord = SecretWord();

  console.log(secretWord);
}

playGame();
