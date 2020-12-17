function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Guess the country?<br><img src='nepal-flag-xs.jpg'/></br>", ["Nepal", "China","India", "Bhutan"], "Nepal"),

    new Question("Guess the country?<br><img src='iran-flag-xs.jpg'/></br>", ["Iran", "Albania","Plaestine", "Libya"], "Iran"),
    

    new Question("Guess the country?<br><img src='italy-flag-xs.jpg'/></br>", ["Poland", "Iran","Italy", "Lithuniya"], "Italy"),

    new Question("Guess the country?<br><img src='georgia-flag-xs.jpg'/></br>", ["Nigeria", "Georgia","Italy", "Libya"], "Georgia"),

    new Question("Guess the country?<br><img src='kosovo-flag-xs.jpg'/></br>", ["Palestine", "Kosovo","Solvika", "Egypt"], "Kosovo"),

    new Question("Guess the country?<br><img src='brunei-flag-xs.jpg'/></br>", ["Poland", "Micronesia","Malta", "Brunei"], "Brunei"),

    new Question("Guess the country?<br><img src='costa-rica-flag-xs.jpg'/></br>", ["Costa-Rica", "Oman","Congo", "Lithuniya"], "Costa-Rica"),

    new Question("Guess the country?<br><img src='germany-flag-xs.jpg'/></br>", ["Argentina", "Germany","Italy", "France"], "Germany"),

    new Question("Guess the country?<br><img src='italy-flag-xs.jpg'/></br>", ["Poland", "Iran","Italy", "Lithuniya"], "Italy"),

    
    

    new Question("Guess the country?<br><img src='libya-flag-xs.jpg'/></br>", ["Libya", "france","Mexico", "Egypt"], "Libya"), 

    new Question("Guess the country?<br><img src='lithuania-flag-xs.jpg'/></br>", ["Algeria", "Argentina","Lithuania", "Bolivia"], "Lithuania"),

    new Question("Guess the country?<br><img src='palestine-flag-xs.jpg'/></br>", ["Nigeria", "Brunei","Oman", "Palestine"], "Palestine"),
    
    new Question("Guess the country?<br><img src='slovakia-flag-xs.jpg'/></br>", ["Slovakia", "Oman","Mexico", "Egypt"], "Slovaika"),
    new Question("Guess the country?<br><img src='new-zealand-flag-xs.jpg'/></br>", ["Australia", "United Kingdom","United States", "New-Zeland"], "New-Zeland"),

    new Question("Guess the country?<br><img src='micronesia-flag-xs.jpg'/></br>", ["Micronesia", "Solvakia","Kosovo", "Libya"], "Micronesia"),
        

];


var quiz = new Quiz (questions);


populate();





