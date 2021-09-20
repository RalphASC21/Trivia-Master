let score = 0
let check;
let trivia;
let incArray = [];

//for randomizing questions
function randNumGenerator(integer){
    let randNum = Math.random();
    let Num = randNum * integer;
    let rng = Math.floor(Num);

    return rng;
}

let diffInput = document.querySelector("#difficulty");
let button = document.querySelector(".subButton");
let maincontent = document.querySelector("#MainContent");

//first submit button
button.addEventListener('click', function(){
    trivia = "https://opentdb.com/api.php?amount=10&type=multiple&difficulty=" + diffInput.value;
    
    fetch(trivia)
    .then(function(response){
        return response.json()
    })
    .then(function(trivia){
        console.log(trivia)
        maincontent.innerHTML = "";
        for(i=0;i<trivia.results.length;i++){
            display(trivia);
        }        
        
    });

})

function display(element){
    
    let individualContent = document.createElement('div');
    individualContent.className = "individualContent";
    maincontent.appendChild(individualContent);

        let Scorecontents = document.createElement('div');
            Scorecontents.className = "ScoreContents";
            individualContent.appendChild(Scorecontents);

                let scoreDiv = document.createElement('div');
                scoreDiv.className = "ScoreDiv";
                Scorecontents.appendChild(scoreDiv);

        let Q = document.createElement('div');
        Q.className = "Q";
        individualContent.appendChild(Q);

            let questionDiv = document.createElement('div');
            questionDiv.className = "questionDiv";
            Q.appendChild(questionDiv);

        let A = document.createElement('div');
        A.className = "A";
        individualContent.appendChild(A);

            let answerDiv1 = document.createElement('div');
            answerDiv1.className = "answerDiv1";
            A.appendChild(answerDiv1);

            let answerDiv2 = document.createElement('div');
            answerDiv2.className = "answerDiv2";
            A.appendChild(answerDiv2);

            let answerDiv3 = document.createElement('div');
            answerDiv3.className = "answerDiv3";
            A.appendChild(answerDiv3);

            let answerDiv4 = document.createElement('div');
            answerDiv4.className = "answerDiv4";
            A.appendChild(answerDiv4);

            let ansInput = document.createElement('div');
            ansInput.className = "ansInput";
            A.appendChild(ansInput);

                let Input = document.createElement('input'); 
                Input.className = "answerInput";
                ansInput.appendChild(Input);

                    Input.type = "text";
                    Input.placeholder = "answer";
                    Input.class = "answer";

            let BTN = document.createElement('div');
            BTN.className = "BTN";
            A.appendChild(BTN);

                let ANSBTN = document.createElement('button');
                ANSBTN.className = "answerButton";
                ANSBTN.innerHTML = "submit";
                BTN.appendChild(ANSBTN);

            let theanswer = document.createElement('div');
            theanswer.className = "theanswer";
            A.appendChild(theanswer); 

            let spaceBtwn = document.createElement('hr');
            A.appendChild(spaceBtwn);



        let oneQuestion = document.querySelector('.questionDiv');
        oneQuestion.className = "question";
        oneQuestion.innerHTML = "(" + element.results[i].category + ")" + " " + "Question #" + [i+1] + ":" + " " + element.results[i].question;

        let firstanswer = document.querySelector('.answerDiv1');
        firstanswer.className = "1"

        let secondanswer = document.querySelector('.answerDiv2')
        secondanswer.className = "2";

        let thirdanswer = document.querySelector('.answerDiv3');
        thirdanswer.className = "3";

        let fourthanswer = document.querySelector('.answerDiv4');
        fourthanswer.className = "4";


        let MultipleChoiceFactor = randNumGenerator(4);
        
        if(MultipleChoiceFactor == 0){
            firstanswer.innerHTML = element.results[i].correct_answer;
            if(firstanswer.innerHTML == element.results[i].correct_answer){
                secondanswer.innerHTML = element.results[i].incorrect_answers[randNumGenerator(3)];
                if(secondanswer.innerHTML == element.results[i].incorrect_answers[0]){
                    incArray = [1, 2];
                    thirdanswer.choose = incArray[randNumGenerator(2)];
                    if(thirdanswer.choose == 1){
                        thirdanswer.innerHTML = element.results[i].incorrect_answers[1];
                        fourthanswer.innerHTML = element.results[i].incorrect_answers[2];
                    }
                    else if(thirdanswer.choose == 2){
                        thirdanswer.innerHTML = element.results[i].incorrect_answers[2];
                        fourthanswer.innerHTML = element.results[i].incorrect_answers[1];
                    }
                }
                else if(secondanswer.innerHTML == element.results[i].incorrect_answers[1]){
                    incArray = [0, 2];
                    thirdanswer.choose = incArray[randNumGenerator(2)];
                    if(thirdanswer.choose == 0){
                        thirdanswer.innerHTML = element.results[i].incorrect_answers[0];
                        fourthanswer.innerHTML = element.results[i].incorrect_answers[2];
                    }
                    else if(thirdanswer.choose == 2){
                        thirdanswer.innerHTML = element.results[i].incorrect_answers[2];
                        fourthanswer.innerHTML = element.results[i].incorrect_answers[0];
                    }
                }
                else if(secondanswer.innerHTML == element.results[i].incorrect_answers[2]){
                    incArray = [0, 1];
                    thirdanswer.choose = incArray[randNumGenerator(2)];
                    if(thirdanswer.choose == 0){
                        thirdanswer.innerHTML = element.results[i].incorrect_answers[0];
                        fourthanswer.innerHTML = element.results[i].incorrect_answers[1];
                    }
                    else if(thirdanswer.choose == 1){
                        thirdanswer.innerHTML = element.results[i].incorrect_answers[1];
                        fourthanswer.innerHTML = element.results[i].incorrect_answers[0];
                    }
                }
            } 
        }
        else if(MultipleChoiceFactor == 1){
            secondanswer.innerHTML = element.results[i].correct_answer;
            if(secondanswer.innerHTML == element.results[i].correct_answer){
                thirdanswer.innerHTML = element.results[i].incorrect_answers[randNumGenerator(3)];
                if(thirdanswer.innerHTML == element.results[i].incorrect_answers[0]){
                    incArray = [1, 2];
                    fourthanswer.choose = incArray[randNumGenerator(2)];
                    if(fourthanswer.choose == 1){
                        fourthanswer.innerHTML = element.results[i].incorrect_answers[1];
                        firstanswer.innerHTML = element.results[i].incorrect_answers[2];
                    }
                    else if(fourthanswer.choose == 2){
                        fourthanswer.innerHTML = element.results[i].incorrect_answers[2];
                        firstanswer.innerHTML = element.results[i].incorrect_answers[1];
                    }
                }
                else if(thirdanswer.innerHTML == element.results[i].incorrect_answers[1]){
                    incArray = [0, 2];
                    fourthanswer.choose = incArray[randNumGenerator(2)];
                    if(fourthanswer.choose == 0){
                        fourthanswer.innerHTML = element.results[i].incorrect_answers[0];
                        firstanswer.innerHTML = element.results[i].incorrect_answers[2];
                    }
                    else if(fourthanswer.choose == 2){
                        fourthanswer.innerHTML = element.results[i].incorrect_answers[2];
                        firstanswer.innerHTML = element.results[i].incorrect_answers[0];
                    }
                }
                else if(thirdanswer.innerHTML == element.results[i].incorrect_answers[2]){
                    incArray = [0, 1];
                    fourthanswer.choose = incArray[randNumGenerator(2)];
                    if(fourthanswer.choose == 0){
                        fourthanswer.innerHTML = element.results[i].incorrect_answers[0];
                        firstanswer.innerHTML = element.results[i].incorrect_answers[1];
                    }
                    else if(fourthanswer.choose == 1){
                        fourthanswer.innerHTML = element.results[i].incorrect_answers[1];
                        firstanswer.innerHTML = element.results[i].incorrect_answers[0];
                    }
                }
            }                
        }
        else if(MultipleChoiceFactor == 2){
            thirdanswer.innerHTML = element.results[i].correct_answer;
            if(thirdanswer.innerHTML == element.results[i].correct_answer){
                fourthanswer.innerHTML = element.results[i].incorrect_answers[randNumGenerator(3)];
                if(fourthanswer.innerHTML == element.results[i].incorrect_answers[0]){
                    incArray = [1, 2];
                    firstanswer.choose = incArray[randNumGenerator(2)];
                    if(firstanswer.choose == 1){
                        firstanswer.innerHTML = element.results[i].incorrect_answers[1];
                        secondanswer.innerHTML = element.results[i].incorrect_answers[2];
                    }
                    else if(firstanswer.choose == 2){
                        firstanswer.innerHTML = element.results[i].incorrect_answers[2];
                        secondanswer.innerHTML = element.results[i].incorrect_answers[1];
                    }
                }
                else if(fourthanswer.innerHTML == element.results[i].incorrect_answers[1]){
                    incArray = [0, 2];
                    firstanswer.choose = incArray[randNumGenerator(2)];
                    if(firstanswer.choose == 0){
                        firstanswer.innerHTML = element.results[i].incorrect_answers[0];
                        secondanswer.innerHTML = element.results[i].incorrect_answers[2];
                    }
                    else if(firstanswer.choose == 2){
                        firstanswer.innerHTML = element.results[i].incorrect_answers[2];
                        secondanswer.innerHTML = element.results[i].incorrect_answers[0];
                    }
                }
                else if(fourthanswer.innerHTML == element.results[i].incorrect_answers[2]){
                    incArray = [0, 1];
                    firstanswer.choose = incArray[randNumGenerator(2)];
                    if(firstanswer.choose == 0){
                        firstanswer.innerHTML = element.results[i].incorrect_answers[0];
                        secondanswer.innerHTML = element.results[i].incorrect_answers[1];
                    }
                    else if(firstanswer.choose == 1){
                        firstanswer.innerHTML = element.results[i].incorrect_answers[1];
                        secondanswer.innerHTML = element.results[i].incorrect_answers[0];
                    }
                }
            }                
        }
        else{
            fourthanswer.innerHTML = element.results[i].correct_answer;
            if(fourthanswer.innerHTML == element.results[i].correct_answer){
                firstanswer.innerHTML = element.results[i].incorrect_answers[randNumGenerator(3)];
                if(firstanswer.innerHTML == element.results[i].incorrect_answers[0]){
                    incArray = [1, 2];
                    secondanswer.choose = incArray[randNumGenerator(2)];
                    if(secondanswer.choose == 1){
                        secondanswer.innerHTML = element.results[i].incorrect_answers[1];
                        thirdanswer.innerHTML = element.results[i].incorrect_answers[2];
                    }
                    else if(secondanswer.choose == 2){
                        secondanswer.innerHTML = element.results[i].incorrect_answers[2];
                        thirdanswer.innerHTML = element.results[i].incorrect_answers[1];
                    }
                }
                else if(firstanswer.innerHTML == element.results[i].incorrect_answers[1]){
                    incArray = [0, 2];
                    secondanswer.choose = incArray[randNumGenerator(2)];
                    if(secondanswer.choose == 0){
                        secondanswer.innerHTML = element.results[i].incorrect_answers[0];
                        thirdanswer.innerHTML = element.results[i].incorrect_answers[2];
                    }
                    else if(secondanswer.choose == 2){
                        secondanswer.innerHTML = element.results[i].incorrect_answers[2];
                        thirdanswer.innerHTML = element.results[i].incorrect_answers[0];
                    }
                }
                else if(firstanswer.innerHTML == element.results[i].incorrect_answers[2]){
                    incArray = [0, 1];
                    secondanswer.choose = incArray[randNumGenerator(2)];
                    if(secondanswer.choose == 0){
                        secondanswer.innerHTML = element.results[i].incorrect_answers[0];
                        thirdanswer.innerHTML = element.results[i].incorrect_answers[1];
                    }
                    else if(secondanswer.choose == 1){
                        secondanswer.innerHTML = element.results[i].incorrect_answers[1];
                        thirdanswer.innerHTML = element.results[i].incorrect_answers[0];
                    }
                }
            }
        }

    //call for the answer submit button
    ANSBTN.addEventListener('click', function(){

        let score = document.querySelector('.score');

        let showAnswer = document.createElement('p');
        showAnswer.className = "ShowAnswer";           
        theanswer.appendChild(showAnswer);

        for(i=0;i<element.results.length;i++){

            if(Input.value == element.results[i].correct_answer){
                score = score+15;
                BTN.innerHTML = "";
                showAnswer.innerHTML = "Correct!";
            }
            else if(Input.value == element.results[i].incorrect_answers[0]){
                score = score-5;
                BTN.innerHTML = "";
                showAnswer.innerHTML = "Incorrect. The correct answer was" + " " + element.results[i].correct_answer + ".";
            }
            else if(Input.value == element.results[i].incorrect_answers[1]){
                score = score-5;
                BTN.innerHTML = "";
                showAnswer.innerHTML = "Incorrect. The correct answer was" + " " + element.results[i].correct_answer + ".";
            }
            else if(Input.value == element.results[i].incorrect_answers[2]){
                score = score-5;
                BTN.innerHTML = "";
                showAnswer.innerHTML = "Incorrect. The correct answer was" + " " + element.results[i].correct_answer + ".";
            }
            else if(Input.value == null){
                score = 0;
            }

            let NSRE = document.querySelector('.ScoreDiv');
            NSRE.innerHTML = "";

                let Score = document.createElement('p');
                Score.innerHTML = "Score:" + " " + score;
                Score.className = "score";
                NSRE.appendChild(Score);
           
        }//forloop for "button click function"

    }) //button click function

} // function display()


