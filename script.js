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
    }
]

let question_text=document.getElementById("question_text")
let answers_btn=document.getElementById("answers")
let next=document.getElementById("next")


function toggleContent() {
      var content = document.getElementById("quiz")
      if (content.style.display === "none") {
        content.style.display = "block"; // show
      } else {
        content.style.display = "none"; // hide
      }
    }

function startquiz(){
    questionindex=0;
    score=0
    next.innerHTML="next";
    showquestion();
   
}

 function showquestion(){
    let currentquestion=quiz[questionindex];
    let question_no=currentquestion+1;
    question_text.innerText=question_no+" . "+currentquestion.question;

    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answers_btn.appendChild(button);

    });
}

startquiz()


