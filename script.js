
/**
 * Generates the quiz buttons and functionality given the question set.
 * @param {any} questions the questions displayed in the quiz
 * @param {any} quizContainer the container that displays the quiz questions
 * @param {any} resultsContainer the container that displays the Correct or Wrong text
 * @param {any} submitButton button to check current answer
 * @param {any} nextButton button to go to next question
 */
function generateQuiz(questions, quizContainer, resultsContainer, submitButton, nextButton){
    var i = 0; 
    
    function showResults(userAnswer){
        console.log(userAnswer)
        console.log(questions[i])
        if(questions[i].correctAnswer === userAnswer){
            resultsContainer.innerHTML =
                '<div class="correct">Correct!</div>';
        } else {
            resultsContainer.innerHTML =
                '<div class="wrong">Wrong!, correct answer is: '
                 + questions[i].correctAnswer + '</div>';
        }
    }

    function setQuestion(){
        
        var answers = [];

        for(letter in questions[i].answers){
            answers.push(
                '<label>'
                    +'<input type="radio" name="answerInput" value="'+letter+'">'
                    + letter + ": "
                    + questions[i].answers[letter]
                +'</label>'
            )
        }

        quizContainer.innerHTML = 
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join("") + '</div>'; 
    }
    
    function nextQuestion(){
        i++; 
        setQuestion()
    }
    setQuestion();
    nextButton.addEventListener("click", function(){
        nextQuestion(); 
    })

    submitButton.addEventListener("click", function(){
        showResults(document.querySelector('input[name="answerInput"]:checked').value); 
    })
}

/**
 * Shuffles the given question array for random order.
 * @param {any} questions question array to be shuffled
 * @returns {Array.<{question: string, answers: {label: string, value: string}[], correctAnswer: string}}>} 
 */
function shuffleQuestions(questions){
    const shuffled = [...questions]; 
    let currentIndex = shuffled.length; 
    let randomIndex;

    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--; 

        [shuffled[currentIndex], shuffled[randomIndex]] = [
            shuffled[randomIndex],
            shuffled[currentIndex], 
        ]
    }
    return shuffled; 
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const quizType = urlParams.get('type'); 
    document.getElementById('type').textContent = quizType
    console.log(quizType);

    const questions = shuffleQuestions(window.traceQuestions); 

    const quizContainer = this.document.getElementById("quizContainer"); 
    const submitButton = this.document.getElementById("submitButton"); 
    const nextButton = this.document.getElementById("nextButton");
    const resultsContainer = this.document.getElementById("resultsContainer"); 
    generateQuiz(questions, quizContainer, resultsContainer, submitButton, nextButton)
    
}
