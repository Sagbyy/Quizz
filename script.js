const responses = ["c", "a", "b", "a", "c"];

const btn = document.querySelector('button');

const questions = Array.from(document.querySelectorAll('.question'));

const score = document.querySelector('.score');
const answers = Array.from(document.querySelectorAll('.answers'));
const answerSentence = document.querySelector('.answer_sentence');

let resultsUser = [];

btn.addEventListener('click', handleSubmit);


function handleSubmit(e) {
    // On annule l'envoie du bouton
    e.preventDefault();
    
    // Récuperation des données
    const radioButtons = document.querySelectorAll("input[type='radio']:checked");

    // Pour chaque réponse
    radioButtons.forEach((radioButton, index) => {
        // Vérifie si la value de la réponse correspond au tableau de responses
        if (radioButton.value === responses[index]) {
            // Si oui ajout de true dans un nouveau tableau
            resultsUser.push(true);
        } else {
            // Si non ajout de false dans un nouveau tableau
            resultsUser.push(false);
        }
    });

    // Appel de fonction
    showAnswers()
    displayScore(counterScore());

    resultsUser = [];
}

function counterScore() {
    let counter = 0;
    // Compte le nombre de bonne réponse
    for (let i = 0; i < responses.length; i++) {
        if (resultsUser[i]) counter++;
    }
    return counter;
}

function showAnswers() {
    // Pour chaque div de question ajout d'un icone
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

    score.innerHTML = `Score : <span>${counter} / ${responses.length} </span>`;
}

const encouragingPhrase = document.querySelector('.encouraging_phrase');

function displayScore(counter) {

    switch (counter) {
        case 0:
            answerSentenceFunction(counter);
            encouragingPhrase.textContent = "👎 Ah oui là c'est chaud 👎";
            break
        case 1:
            answerSentenceFunction(counter);
            encouragingPhrase.textContent = "😭 Un point c'est déjà sa 😭";
            break
        case 2:
            answerSentenceFunction(counter);
            encouragingPhrase.textContent = "👀 Faudrait prendre des cours là 👀";
            break
        case 3:
            answerSentenceFunction(counter);
            encouragingPhrase.textContent = "✨ Bon tu as dépasser la moyenne ✨";
            break
        case 4:
            answerSentenceFunction(counter);
            encouragingPhrase.textContent = "⭐️ A un doigt de la victoire ⭐️";
            break
        case 5:
            answerSentenceFunction(counter);
            encouragingPhrase.textContent = "✔️ Félicitation tu as réussit ✔️";
            break
    }
}

