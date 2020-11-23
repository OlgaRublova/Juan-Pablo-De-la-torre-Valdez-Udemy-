let correctAnswer,
    correctNumber = (localStorage.getItem('quiz_game_correct') ? localStorage.getItem('quiz_game_correct') : 0),
    incorrectNumber = (localStorage.getItem('quiz_game_incorrect') ? localStorage.getItem('quiz_game_incorrect') : 0);

document.addEventListener('DOMContentLoaded', function () {
    loadQuestions();
    eventListeners();
})

eventListeners = () => {
    document.querySelector('#check-answer').addEventListener('click', validateAnswer);
    document.querySelector('#clear-storage').addEventListener('click', clearResults);

}

//load new questions from API
loadQuestions = () => {
    const url = 'https://opentdb.com/api.php?amount=10';
    fetch(url)
        .then(data => data.json())
        .then(result => displayQuestion(result.results));//calling the function
}


//displays the question html from api
displayQuestion = questions => {

    //create html questions
    const questionHTML = document.createElement('div'); //container
    questionHTML.classList.add('col-12');

    questions.forEach(question => {

        //read the correct answer
        correctAnswer = question.correct_answer;

        //inject the correct answer in the possible answers
        let possibleAnswers = question.incorrect_answers;
        possibleAnswers.splice(Math.floor(Math.random() * 3), 0, correctAnswer);

        //add html for the current question
        questionHTML.innerHTML = `
        <div class="row justify-content-between heading">
        <p class="category">Category: ${question.category}</p>
        <div class = "totals">
        <span class="badge badge-success">${correctNumber}</span>
        <span class="badge badge-danger">${incorrectNumber}</span>
        </div>
        </div>
        <h2 class="text-center">${question.question}
`;
        //generate html for all possible answers
        const answerDiv = document.createElement('div'); // ul
        answerDiv.classList.add('questions', 'row', 'justify-content-around', 'mt-4');
        possibleAnswers.forEach(answer => {
            const answerHTML = document.createElement('li'); // all of li
            answerHTML.classList.add('col-12', 'col-md-5');
            answerHTML.textContent = answer; //change the text

            //attach an event click when the answer is clicked
            answerHTML.onclick = selectAnswer;  //when click - call the function selectAnswer

            answerDiv.appendChild(answerHTML); //adding li-s to the ul
        })
        questionHTML.appendChild(answerDiv); //adding ul to the box container

        //render in html
        document.querySelector('#app').appendChild(questionHTML); //adding newly created box to the existing html element
    })
}

//when the answer is selected
selectAnswer = (e) => {
    //removes the previous active class from the answer
    if (document.querySelector('.active')) {
        const activeAnswer = document.querySelector('.active');
        activeAnswer.classList.remove('active');
    }

    //adds the current answer
    e.target.classList.add('active');
}

//checks if the answer is corrects
validateAnswer = () => {
    if (document.querySelector('.questions .active')) { ///active li of the ul
        //everything is fine - check if the answer is correct or not
        checkAnswer();


    } else {
        //error - the user hasn'r selected anything
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('alert', 'alert-danger', 'col-md-6');
        errorDiv.textContent = 'Please select 1 answer';

        //select the questions div to insert the alart
        const questionsDiv = document.querySelector('.questions'); //container
        questionsDiv.appendChild(errorDiv); // attach newly created div to the container

        //remove the error
        setTimeout(() => {
            document.querySelector('.alert-danger').remove();
        }, 3000);
    }
}

//check if the answer is correct ot not
checkAnswer = () => {
    const userAnswer = document.querySelector('.questions .active');

    if (userAnswer.textContent === correctAnswer) {
        correctNumber++;
    } else {
        incorrectNumber++;
    }
    //save into Local Storage
    saveIntoStorage();

    //clear previous HTML
    const app = document.querySelector("#app");
    while (app.firstChild) {
        app.removeChild(app.firstChild);
    }


    //load a new question
    loadQuestions();
}

//saves correct or incorrect totals into storage
saveIntoStorage = () => {
    localStorage.setItem('quiz_game_correct', correctNumber);
    localStorage.setItem('quiz_game_incorrect', incorrectNumber);
}

//clears the resultd from the storage
clearResults = () => {
    localStorage.setItem('quiz_game_correct', 0);
    localStorage.setItem('quiz_game_incorrect', 0);

    setTimeout(() => {
        window.location.reload();
    }, 500);
}