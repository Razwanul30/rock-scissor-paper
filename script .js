let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const user_scorePara = document.querySelector("#user-score");
const comp_scorePara = document.querySelector("#comp-score");

const gen_comp_choice = () => {
    const options=["rock", "paper", "scissor"];
    const rand_idx=Math.floor(Math.random()*3);
    return options[rand_idx];
}

const draw = () => {
    //console.log("it is draw");
    msg.innerText="Game is draw! Try again.";
    msg.style.backgroundColor = "#081b31";
}

const show_winner = (win, user_choice, comp_choice) => {
    if (win) {
        user_score++;
        user_scorePara.innerText = user_score;
        msg.innerText=`You win! Your ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        comp_score++;
        comp_scorePara.innerText = comp_score;
        msg.innerText=`You lose! ${comp_choice} beats your ${user_choice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (user_choice)=> {
    console.log(user_choice,"was clicked by you.");
    //computer choice
    const comp_choice=gen_comp_choice();
    console.log(comp_choice,"was clicked by computer.");
    var comp=9;
    if (user_choice===comp_choice) {
        draw();
    } else {
        let user_win=true;
        if (user_choice === "rock") {
            //paper, scissor
            user_win = comp_choice === "paper" ? false : true;
        }

        else if (user_choice === "paper") {
            //rock, scissor
            user_win = comp_choice === "scissor" ? false : true;
        }
        else {
            //rock paper
            user_win = comp_choice === "rock" ? false : true;
        }
        show_winner(user_win,user_choice,comp_choice);        
    }
}

choices.forEach ((choice) =>{
    choice.addEventListener("click", ()=> {
        const userchoice=choice.getAttribute("id");
        // console.log(userchoice,"was clicked.");
        playgame(userchoice);
    })
})