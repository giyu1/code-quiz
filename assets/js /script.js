var container1 = document.getElementById("mainquiz");

container1.style.display = "none";

var squiz = document.getElementById("startbtn")

var questionBank = [
    {
        question: "What color is the sky?",
        choice1: "Red",
        choice2: "Green",
        choice3: "Blue",
        choice4: "Yellow",
        answer: 3
    },
    {
        question: "What color is the stop sign?",
        choice1: "Red",
        choice2: "Green",
        choice3: "Blue",
        choice4: "Yellow",
        answer: 1
    },
    {
        question: "What color is the banana",
        choice1: "Red",
        choice2: "Green",
        choice3: "Blue",
        choice4: "Yellow",
        answer: 4
    },
    {
        question: "What color is the leaf during spring?",
        choice1: "Red",
        choice2: "Green",
        choice3: "Blue",
        choice4: "Yellow",
        answer: 2
    }
]
var cquestion = 0 

var question = document.getElementById("question");

var button1 = document.getElementById("option1");
var button2 = document.getElementById("option2");
var button3 = document.getElementById("option3");
var button4 = document.getElementById("option4");

function displayquestion (){
    question.textContent = questionBank[cquestion].question
    button1.textContent = questionBank[cquestion].choice1
    button2.textContent = questionBank[cquestion].choice2
    button3.textContent = questionBank[cquestion].choice3
    button4.textContent = questionBank[cquestion].choice4

}
squiz.addEventListener("click", function(){
    container1.style.display = "block";
    squiz.style.display = "none";

    displayquestion()
})