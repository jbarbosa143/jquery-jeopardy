const buttons = $('.Ques');
let quest1 = [];
let quest2 =[];
let quest4 =[];
let quest6 = [];
let quest8 = [];
let total = 0;

// Store the Selected Value OF Question in new array
for(i = 0; i < QUESTIONS.length; i ++){
    if(QUESTIONS[i].value === "$100"){
        quest1.push(QUESTIONS[i]);
    }
    if(QUESTIONS[i].value === "$200"){
        quest2.push(QUESTIONS[i]);
    }
    if(QUESTIONS[i].value === "$400"){
        quest4.push(QUESTIONS[i]);
    }
    if(QUESTIONS[i].value === "$600"){
        quest6.push(QUESTIONS[i]);
    }
    if(QUESTIONS[i].value === "$800"){
        quest8.push(QUESTIONS[i]);
    }
}

// Go through Selected Value Array and Grab Random Code!!
buttons.click(function(e){
    let jqSelector = $(e.target);
    let realQuestion = "";
    let realAnswer = "";
    let money = 0;
    let askQuestion = $('.question');
    if(jqSelector.val() === '$100'){
        realQuestion = quest1[Math.floor(Math.random() * quest1.length)]
        realAnswer = realQuestion.answer;
        money = realQuestion.value.slice(1);
        console.log('Question $100', realQuestion)
    }
    if(jqSelector.val() === '$200'){
        realQuestion = quest2[Math.floor(Math.random() * quest2.length)]
        realAnswer = realQuestion.answer;
        money = realQuestion.value.slice(1);
        console.log('Question $200', realQuestion)
    }
    if(jqSelector.val() === '$400'){
        realQuestion = quest4[Math.floor(Math.random() * quest4.length)]
        realAnswer = realQuestion.answer;
        money = realQuestion.value.slice(1);
        console.log('Question $400', realQuestion)
    }
    if(jqSelector.val() === '$600'){
        realQuestion = quest6[Math.floor(Math.random() * quest6.length)];
        realAnswer = realQuestion.answer;
        money = realQuestion.value.slice(1);
        console.log('Question $600', realQuestion)
        
    }
    if(jqSelector.val() === '$800'){
        realQuestion = quest8[Math.floor(Math.random() * quest8.length)]
        realAnswer = realQuestion.answer;
        money = realQuestion.value.slice(1);
        console.log('Question $800', realQuestion)
    }
    let newHtml = `<h1> Your Question: </h1>
                    <p>${realQuestion.question}</p>`
            askQuestion.html(newHtml)
            compareAnswers(realAnswer,money); 
            
})


// create a function the when answer is submitted its checks with current clicked question to see if answer if correct

function compareAnswers(realAnswer,money){
    let sub = $('#submit');
    let userInput = $('input');
    let incorrect_Correct = $('h2')
    

    sub.click(function(){
        let input = userInput.val();
        // console.log('Clicked')
        // console.log(input)
        // console.log('Answer in Function', realAnswer)
        if(input === realAnswer){
            
            incorrect_Correct.html('Correct!!')
        }
        else if(input !== realAnswer){
            incorrect_Correct.html('Incorrect!!')
        }
        // console.log('User',input)
        // console.log('Stored',realAnswer)
    })
}

function updateScore(money){
    let winnings = $('span');
    total += Number(money);
    winnings.text(total)
    console.log("money", money,total)
}