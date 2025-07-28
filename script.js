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
let answers=document.getElementsByClassName("btn")
let next=document.getElementsByClassName("next")

