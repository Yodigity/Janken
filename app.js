var playerScore = 0;
var compScore = 0;
var playerScore_span = document.getElementById("player-score");
var compScore_span = document.getElementById("comp-score");
var scoreboard_div = document.querySelector(".scoreboard");
var result_div = document.querySelector(".result > p")
var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")




function game(userChoice){
    var computerChoice = getCompChoice()



    if(userChoice === computerChoice){
        draw()
    } else{
        switch(userChoice + computerChoice){
            case("rockscissors"):
            case("paperrock"):
            case("scissorspaper"):
                win(userChoice,  computerChoice);
                break;
            case("rockpaper"):
            case("paperscissors"):
            case("scissorsrock"):
                lose(userChoice, computerChoice);
                break;
    
        }
    }

    console.log(userChoice, computerChoice)
    
}



function getCompChoice(){
    var choices = ["rock", "paper", "scissors"]

    var randomNumber = Math.floor(Math.random(choices) * 3)

    var computerChoice = choices[randomNumber]

    return computerChoice
}

function win(userChoice, computerChoice){
    playerScore++
    playerScore_span.innerHTML = playerScore
    compScore_span.innerHTML = compScore

    result_div.innerHTML = `${userChoice} beats ${computerChoice}. You win!`
    reset()
}

function lose(userChoice, computerChoice){
    compScore++
    compScore_span.innerHTML = compScore
    playerScore_span.innerHTML = playerScore

    result_div.innerHTML = `${computerChoice} beats ${userChoice}. You lose.`

    reset()
}

function draw(){
    result_div.innerHTML = "Draw!"
    reset()
}

function reset(){
    setTimeout(function(){result_div.innerHTML = "Make your move!"}, 3000)
    
}

rock.addEventListener('click', function(){
    game("rock")
})

paper.addEventListener('click', function(){
    game("paper")
})

scissors.addEventListener('click', function(){
    game("scissors")
})

