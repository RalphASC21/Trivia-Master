let score = 0
let check;
let trivia;


let body = document.querySelector('body');
let MainDiv = document.createElement('div');
MainDiv.id = "MainDiv";
body.appendChild(MainDiv);

let choose = document.createElement('div');
choose.id = "choose";
MainDiv.appendChild(choose);

//difficulty div
let difficulty = document.createElement('div')
difficulty.id = "questiondifficulty";
choose.appendChild(difficulty);

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
button.className = "subButton";
button.innerHTML = "submit";
choose.appendChild(button);


//for randomizing questions
function randNumGenerator(integer){
    let randNum = Math.random();
    let Num = randNum * integer;
    let rng = Math.floor(Num);

    return rng;
}

let QAcontents = document.createElement('div');
QAcontents.className = "QandA";
MainDiv.appendChild(QAcontents);




//Divs for the first submit button
let questionDiv = document.createElement('div');
questionDiv.id = "questionDiv";
questionDiv.innerHTML = "";
QAcontents.appendChild(questionDiv);

let answerDiv1 = document.createElement('div');
answerDiv1.id = "answerDiv1";
answerDiv1.innerHTML = "";
QAcontents.appendChild(answerDiv1);

let answerDiv2 = document.createElement('div');
answerDiv2.id = "answerDiv2";
answerDiv2.innerHTML = "";
QAcontents.appendChild(answerDiv2);

let answerDiv3 = document.createElement('div');
answerDiv3.id = "answerDiv3";
answerDiv3.innerHTML = "";
QAcontents.appendChild(answerDiv3);

let answerDiv4 = document.createElement('div');
answerDiv4.id = "answerDiv4";
answerDiv4.innerHTML = "";
QAcontents.appendChild(answerDiv4);

let answerInputDiv = document.createElement('div')
answerInputDiv.id = "answerInputDiv";
answerInputDiv.innerHTML = "";
QAcontents.appendChild(answerInputDiv);

let ansbuttonDiv = document.createElement('div');
ansbuttonDiv.id = "answerbuttonDiv";
answerInputDiv.innerHTML = "";
QAcontents.appendChild(ansbuttonDiv);

let scoreContents = document.createElement('div');
scoreContents.id = "ScoreContents";
MainDiv.appendChild(scoreContents);

let scoreDiv = document.createElement('div');
scoreDiv.className = "scoreDiv";
scoreDiv.innerHTML = "";
scoreContents.appendChild(scoreDiv);

//first submit button
button.addEventListener('click', function(){
    trivia = "https://opentdb.com/api.php?amount=1&category=19&type=multiple&difficulty=" + diffInput.value;
    
    fetch(trivia)
    .then(function(response){
        return response.json()
    })
    .then(function(trivia){
        console.log(trivia)
        display(trivia);
        
    });

    function display(element){
        for(i = 0; i < 10; i++){
//  + [i-8]
            let oneQuestion = document.querySelector('#questionDiv');
            oneQuestion.innerHTML = "Question" + ":" + " " + element.results[0].question;
        }
            let answerArray = [];

        
            let firstanswer = document.querySelector('#answerDiv1');
            firstanswer.innerHTML = element.results[0].incorrect_answers[0];
            firstanswer.onclick = "firstanswerclicked()"
            firstanswer.className = "1"
            answerArray.push(firstanswer);

            let secondanswer = document.querySelector('#answerDiv2');
            secondanswer.innerHTML = element.results[0].incorrect_answers[2]
            secondanswer.onclick = "secondanswerclicked()";
            secondanswer.className = "2";
            answerArray.push(secondanswer);

            let thirdanswer = document.querySelector('#answerDiv3');
            thirdanswer.innerHTML = element.results[0].correct_answer
            thirdanswer.onclick = "thirdanswerclicked()";
            thirdanswer.className = "3";
            answerArray.push(thirdanswer);

            let fourthanswer = document.querySelector('#answerDiv4');
            fourthanswer.innerHTML = element.results[0].incorrect_answers[1]
            fourthanswer.onclick = "fourthanswerclicked()";
            fourthanswer.className = "4";
            answerArray.push(fourthanswer);


            let answer1 = answerArray[0];
            let answer2 = answerArray[1];
            let answer3 = answerArray[3];
            let answer4 = answerArray[2];

            //answer submit div
            let Input = document.querySelector('#answerInputDiv');
            Input.innerHTML = "";

                // let anstext = document.createElement('p');
                // anstext.className = "anstext";
                // Input.appendChild(anstext);
            
                    let ansInput = document.createElement('input');
                    ansInput.type = "text";
                    ansInput.placeholder = "answer";
                    ansInput.id = "answer";
                    Input.appendChild(ansInput);

            let ANSBTN = document.querySelector('#answerbuttonDiv');
            ANSBTN.innerHTML = "";

                let answerButton = document.createElement('button');
                answerButton.innerHTML = "submit";
                ANSBTN.appendChild(answerButton);

        //call for the answer submit button
        answerButton.addEventListener('click', function(){
            
            trivia = "https://opentdb.com/api.php?amount=1&category=19&type=multiple&difficulty=" + diffInput.value;
            fetch(trivia)
            .then(function(response){
                return response.json()
            })
            .then(function(trivia){
                console.log(trivia)
                
            });
        
            if(ansInput.value == answer4.textContent){      //fix score board
                score = score+15;
                console.log("Score:", score) 

                // check = document.createElement('img');
                // check.src = "https://static.vecteezy.com/system/resources/thumbnails/000/572/885/small_2x/vector61-193-01.jpg";
                // check.className = "correct";
                // NSRE.appendChild(check);

            }else if(ansInput.value == answer1.textContent){
                score = score-5;
                console.log("Score:", score)
            }else if(ansInput.value == answer3.textContent){
                score = score-5;
                console.log("Score:", score);
            }else if(ansInput.value == answer2.textContent){
                score = score-5;
                console.log("Score:", score);
            }    
            let NSRE = document.querySelector('.scoreDiv');
            NSRE.innerHTML = "";

                let Score = document.createElement('p');
                Score.innerHTML = "Score:" + " " + score;
                Score.id = "score";
                NSRE.appendChild(Score);
            
        })  
    }
})
let form = document.createElement('form');
MainDiv.appendChild(form);

let database = firebase.database().ref()
firebase.auth().currentUser
const db = firebase.database();
const ref = db.ref('users/' + user.uid);

score = document.getElementById('score');

const scoreButton = document.createElement('button');
scoreButton.id = "scoreButton";
form.appendChild(scoreButton);

scoreButton.addEventListener('click',updateUserScore);


function updateUserScore(event2){
    event2.preventDefauld();
    const newscore = score.value;

    score.value = "";

    let value = {
        SCORE: newscore
    }

    database.push(value);

    ref.update({
        "score": newscore,
    })

    database.push(ref);
}







ref.update({ data })