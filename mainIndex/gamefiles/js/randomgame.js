let score = 0
let trivia;

let body = document.querySelector('body');
let MainDiv = document.createElement('div');
body.appendChild(MainDiv);

//difficulty div
let difficulty = document.createElement('div')
difficulty.id = "questiondifficulty";
MainDiv.appendChild(difficulty);

    let difficultyTag = document.createElement('p');
    difficultyTag.innerHTML = "Difficulty:";
    difficulty.appendChild(difficultyTag);

    let diffInput = document.createElement('input');
    diffInput.type = "text";
    diffInput.placeholder = "easy, medium, hard";
    diffInput.id = "difficulty";
    difficulty.appendChild(diffInput);


//submit button function
let button = document.createElement('button');
button.innerHTML = "submit";
MainDiv.appendChild(button);


//for randomizing questions
function randNumGenerator(integer){
    let randNum = Math.random();
    let Num = randNum * integer;
    let rng = Math.floor(Num);

    return rng;
}

button.addEventListener('click', function(){
    trivia = "https://opentdb.com/api.php?amount=1&type=multiple&difficulty=" + diffInput.value;
    
    fetch(trivia)
    .then(function(response){
        return response.json()
    })
    .then(function(trivia){
        console.log(trivia)
        display(trivia);
        
    });

    // function clearBox(elementID){
    //     document.getElementById(elementID).innerHTML = "";
    // }

    function display(element){

        
        
        let oneQuestion = document.createElement('p');
        oneQuestion.innerHTML = element.results[0].question
        MainDiv.appendChild(oneQuestion)
        
        let answerDiv = document.createElement('div');
        answerDiv.className = "answerDiv";
        MainDiv.appendChild(answerDiv);

            let answerArray = [];

            let firstanswer = document.createElement('p');
            firstanswer.innerHTML = element.results[0].incorrect_answers[randNumGenerator(3)];
            firstanswer.onclick = "firstanswerclicked()"
            firstanswer.className = "1"
            answerArray.push(firstanswer)

            // let secondanswer = document.createElement('p');
            // secondanswer.innerHTML = element.results[0].incorrect_answers[randNumGenerator(3)]
            // secondanswer.onclick = "secondanswerclicked()";
            // secondanswer.className = "2";
            // answerArray.push(secondanswer);

            // let thirdanswer = document.createElement('p');
            // thirdanswer.innerHTML = element.results[0].incorrect_answers[randNumGenerator(3)]
            // thirdanswer.onclick = "thirdanswerclicked()";
            // thirdanswer.className = "3";
            // answerArray.push(thirdanswer)

            let fourthanswer = document.createElement('p');
            fourthanswer.innerHTML = element.results[0].correct_answer
            fourthanswer.onclick = "fourthanswerclicked()";
            fourthanswer.className = "4";
            answerArray.push(fourthanswer);


            let answer1 = answerArray[randNumGenerator(2)];
            let answer4;
            if(answer1 == answerArray[0]){
                answer4 = answerArray[1];
            }else{
                answer4 = answerArray[0];
            }
        
            answerDiv.appendChild(answer1);
            answerDiv.appendChild(answer4);




            //answer submit div
            let answerInputDiv = document.createElement('div')
            answerInputDiv.id = "answerInputDiv";
            MainDiv.appendChild(answerInputDiv);

                let ansInput = document.createElement('input');
                ansInput.type = "text";
                ansInput.placeholder = "answer";
                ansInput.id = "difficulty";
                answerInputDiv.appendChild(ansInput);

            let answerButton = document.createElement('button');
            answerButton.innerHTML = "submit";
            MainDiv.appendChild(answerButton);

            answerButton.addEventListener('click', function(){
                trivia = "https://opentdb.com/api.php?amount=1&type=multiple&difficulty=" + diffInput.value;
                fetch(trivia)
                .then(function(response){
                    return response.json()
                })
                .then(function(trivia){
                    console.log(trivia)
                    display(trivia);
                });

                if(ansInput == answer4){      //fix score board
                    score = score+15;
                    console.log("Score:", score);
                }else{
                    score = score-5;
                    console.log("Score:", score);
                }
            })
    }
})






function firstanswerclicked(){
    console.log('test')
}
function secondanswerclicked(){
    console.log('test')
}
function thirdanswerclicked(){
    console.log('test')
}
function fourthanswerclicked(){
    console.log('test')
}



