const responses = ["c", "a", "b", "a", "c"];

const btn = document.querySelector('button');

const questions = Array.from(document.querySelectorAll('.question'));

const score = document.querySelector('.score');
const answers = Array.from(document.querySelectorAll('.answers'));
const answerSentence = document.querySelector('.answer_sentence');

let resultsUser = [];

btn.addEventListener('click', handleSubmit);


function handleSubmit(e) {
    e.preventDefault();


    const radioButtons = document.querySelectorAll("input[type='radio']:checked");

    radioButtons.forEach((radioButton, index) => {
        if (radioButton.value === responses[index]) {
            resultsUser.push(true);
        } else {
            resultsUser.push(false);
        }
    });

    showAnswers()
    displayScore(counterScore());

    resultsUser = [];
}

function counterScore() {
    let counter = 0;

    for (let i = 0; i < responses.length; i++) {
        if (resultsUser[i]) counter++;
    }
    return counter;
}

function showAnswers() {
    for (let i = 0; i < questions.length; i++) {
        if (resultsUser[i]) {
            answers[i].textContent = '✔️';
        } else {
            answers[i].textContent = '❌';
        }
    }
}

function answerSentenceFunction(counter) {
    if (counter < 5) {
        answerSentence.textContent = "Je sais que tu peux mieux faire !";
    } else {
        answerSentence.textContent = "Mais naaan t'es bon !";
    }
}

const encouragingPhrase = document.querySelector('.encouraging_phrase');

function displayScore(counter) {

    switch (counter) {
        case 0:
            answerSentenceFunction(counter);
            encouragingPhrase.textContent = "👎 Ah oui là c'est chaud 👎";
            score.innerHTML = `Score : <span>${counter} / 5 </span>`;
            break
        case 1:
            answerSentenceFunction(counter);
            encouragingPhrase.textContent = "😭 Un point c'est déjà sa 😭";
            score.innerHTML = `Score : <span>${counter} / 5 </span>`;
            break
        case 2:
            answerSentenceFunction(counter);
            encouragingPhrase.textContent = "👀 Faudrait prendre des cours là 👀";
            score.innerHTML = `Score : <span>${counter} / 5 </span>`;
            break
        case 3:
            answerSentenceFunction(counter);
            encouragingPhrase.textContent = "✨ Bon tu as dépasser la moyenne ✨";
            score.innerHTML = `Score : <span>${counter} / 5 </span>`;
            break
        case 4:
            answerSentenceFunction(counter);
            encouragingPhrase.textContent = "⭐️ A un doigt de la victoire ⭐️";
            score.innerHTML = `Score : <span>${counter} / 5 </span>`;
            break
        case 5:
            answerSentenceFunction(counter);
            encouragingPhrase.textContent = "✔️ Félicitation tu as réussit ✔️";
            score.innerHTML = `Score : <span>${counter} / 5 </span>`;
            break
    }
}

