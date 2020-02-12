export function randomInt(end) {
  return Math.floor(Math.random() * end);
}

export function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    const index = randomInt(counter);
    counter--;
    const temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

export function calculateChoices(answer, words, choiceCount) {
  const choices = [answer];

  while (choices.length !== choiceCount) {
    const index = randomInt(words.length);

    if (!choices.includes(words[index])) {
      choices.push(words[index]);
    }
  }

  return shuffle(choices);
}

export function calculateCorrectAnswerTotal(history) {
  let correctAnswerCount = 0;

  for (let i = 0; i < history.length; i++) {
    const element = history[i];
    if (element.answer === element.question) {
      correctAnswerCount++;
    }
  }

  return correctAnswerCount;
}
