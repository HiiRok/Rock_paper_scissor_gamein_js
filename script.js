let userscore=0;
let compscore=0;
const us_span=document.getElementById("user-score");
const cs_span=document.getElementById("computer-score");
const scoreboard_div =document.querySelector(".score-board");
const result_div=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getcompchoice()
{
    const choices=['r','p','s'];
    const random_number=Math.floor(Math.random()*3);
    return choices[random_number];
}

function convert(letter)
{
    if(letter==="r")return "Rock";
    if(letter==="p")return "Paper";
    if(letter==="s")return "Scissor";
}

function win(user,comp)
{
    userscore++;
    us_span.innerHTML =userscore;
    cs_span.innerHTML =compscore;
    result_div.innerHTML= convert(user) +" (user) beats "+convert(comp)+" (computer) .You win!!";
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){
        document.getElementById(user).classList.remove('green-glow')
    },500);
}

function lose(user,comp)
{
    compscore++;
    us_span.innerHTML =userscore;
    cs_span.innerHTML =compscore;
    result_div.innerHTML= convert(comp) +" (computer) beats "+convert(user)+" (user) .You lose!!";
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function(){
        document.getElementById(user).classList.remove('red-glow')
    },300);
}


function draw(user,comp)
{
    result_div.innerHTML= convert(user) +" (user) equals "+convert(comp)+" (computer) .Draw!!";
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(function(){
        document.getElementById(user).classList.remove('grey-glow')
    },300);
}


function game(userchoice)
{
    const computer_choice=getcompchoice();
    switch(userchoice+computer_choice) {
        case "rs":
        case "pr":
        case "sp":
            win(userchoice,computer_choice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userchoice,computer_choice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice,computer_choice);
            break;
    }
    
}

function main() {
rock_div.addEventListener('click',function()
{
    game("r");

})

paper_div.addEventListener('click',function()
{
    game("p");
})

scissor_div.addEventListener('click',function()
{
    game("s");
})
}

main();