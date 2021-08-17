let score = 0
let trivia = 'https://opentdb.com/api.php?amount=10&type=multiple'
let body = document.querySelector('body');
let MainDiv = document.createElement('div');
body.appendChild(MainDiv)



















fetch(trivia)
.then(function(response){
    return response.json()
})
.then(function(trivia){
    console.log(trivia)
    for(i = 0; i < 1; i++){
        display(trivia);
    }
});

function display(element){
    let oneQuestion = document.createElement('p');
    oneQuestion.innerHTML = element.results[i].question
    MainDiv.appendChild(oneQuestion)
    
 
 let firstanswer = document.getElementById('1');
    firstanswer.innerHTML = element.results[i].incorrect_answers[1]
    MainDiv.appendChild(firstanswer)

    let secondanswer = document.getElementById('2');
    secondanswer.innerHTML = element.results[i].incorrect_answers[0]
    MainDiv.appendChild(secondanswer)

    let thirdanswer = document.getElementById('3');
    thirdanswer.innerHTML = element.results[i].incorrect_answers[2]
    MainDiv.appendChild(thirdanswer)

    let fourthanswer = document.getElementById('4');
    fourthanswer.innerHTML = element.results[i].correct_answer
    MainDiv.appendChild(fourthanswer)

}

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