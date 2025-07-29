let quiz=[
    {
        question:"who is the president of india?",
       answers:[
        { text:"narendra modi",correct:false},
        { text:"drupadi murmuh",correct:true},
        { text:"jk narayan",correct:false},
        { text:"monmohan singh",correct:false}
       ]
    },
     {
        question:"what is the national fruit of india?",
       answers:[
        { text:"apple",correct:false},
        { text:"orange",correct:false},
        { text:"mango",correct:true},
        { text:"pears",correct:false}
       ]
    },
    {
        question:"what is the full form of js",
       answers:[
        { text:"cascading ",correct:false},
        { text:"javascript",correct:true},
        { text:"just show",correct:false},
        { text:"java",correct:false}
       ]
    }
]

let question_text=document.getElementById("question_text")
let answers_btn=document.getElementById("answers")
let next = document.getElementById("next");
let quiz_container = document.getElementById("quiz");


// function toggleContent() {
//       var content = document.getElementById("quiz")
//       if (content.style.display === "none") {
//         content.style.display = "block"; // show
//       } else {
//         content.style.display = "none"; // hide
//       }
//     }

let questionindex = 0;
let scoreValue = 0;

function startquiz() {
    questionindex = 0;
    scoreValue = 0;
    next.innerHTML = "Next";
    next.style.display = "none";
    showquestion();
}

function showquestion() {
    let currentquestion = quiz[questionindex];
    let question_no = questionindex + 1;
    question_text.innerText = question_no + ". " + currentquestion.question;

    // Clear previous answer buttons
    answers_btn.innerHTML = "";

    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectanswers);
        answers_btn.appendChild(button);
    });
    next.style.display = "none";
}

function selectanswers(e) {
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct === "true";
    if (iscorrect) {
        selectedbtn.classList.add("correct");
        scoreValue++;
    } else {
        selectedbtn.classList.add("wrong");
    }
    Array.from(answers_btn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    next.style.display = "block";
}


function handlenextbutton() {
    questionindex++;
    if (questionindex < quiz.length) {
        showquestion();
    } else {
        showScore();
    }
}

next.addEventListener("click", () => {
    if (questionindex < quiz.length) {
        handlenextbutton();
    } else {
        startquiz();
    }
});

function showScore() {
    question_text.innerText = `You scored ${scoreValue} out of ${quiz.length}!`;
    answers_btn.innerHTML = "";
    next.innerHTML = "Restart";
    next.style.display = "block";
}

startquiz();


