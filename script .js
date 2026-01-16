let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const user_scorePara = document.querySelector("#user-score");
const comp_scorePara = document.querySelector("#comp-score");

const gen_comp_choice = () => {
    const options = ["rock", "paper", "scissor"];
    const rand_idx = Math.floor(Math.random() * 3);
    return options[rand_idx];
};

/* ===== DRAW ===== */
const draw = () => {
    msg.innerText = "😐 Game is Draw! Try again.";

    // 🔥 important
    msg.classList.remove("win", "lose");
    msg.classList.add("draw");
};

/* ===== WIN / LOSE ===== */
const show_winner = (user_win, user_choice, comp_choice) => {
    msg.classList.remove("win", "lose", "draw"); // reset

    if (user_win) {
        user_score++;
        user_scorePara.innerText = user_score;

        msg.innerText = `🎉 You Win! Your ${user_choice} beats ${comp_choice}`;
        msg.classList.add("win");
    } else {
        comp_score++;
        comp_scorePara.innerText = comp_score;

        msg.innerText = `😢 You Lose! ${comp_choice} beats your ${user_choice}`;
        msg.classList.add("lose");
    }
};

/* ===== GAME LOGIC ===== */
const playgame = (user_choice) => {
    const comp_choice = gen_comp_choice();

    if (user_choice === comp_choice) {
        draw();
    } else {
        let user_win = true;

        if (user_choice === "rock") {
            user_win = comp_choice === "paper" ? false : true;
        } else if (user_choice === "paper") {
            user_win = comp_choice === "scissor" ? false : true;
        } else {
            user_win = comp_choice === "rock" ? false : true;
        }

        show_winner(user_win, user_choice, comp_choice);
    }
};

/* ===== CLICK EVENTS ===== */
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
