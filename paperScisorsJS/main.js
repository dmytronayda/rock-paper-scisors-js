    let scoreHuman = 0;
    let scoreMachine = 0;


    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose your destiny! Type 'paper', 'scisors' or 'rock' to start...")

        // Randomly picks one of rock, paper, or scisors
        function computerPlay() {
            const items = ["rock", "paper", "scisors"];
            let item = items[Math.floor(Math.random() * items.length)];
            return item;
        };


        const computerSelection = computerPlay();

        // Defines who wins in each round of Rock, Paper, Scisors
        function playRound(playerSelection, computerSelection) {
            // your code here!
            let formatedPlayerSelection = playerSelection.toLowerCase();

            if (formatedPlayerSelection === computerSelection) {
                return (`EVEN == Play again, you and Machine both had the same -- ${formatedPlayerSelection}! \
                \n Press "ENTER" to play another round.`);
            } else if (formatedPlayerSelection === "paper" && computerSelection === "rock") {
                return ("WIN == Machine had ROCK. Human Wins!\
                \n Press 'ENTER' to play another round.");
            } else if (formatedPlayerSelection === "paper" && computerSelection === "scisors") {
                return ("LOSE == Human LOSE! Machine had scisors.\
                \n Press 'ENTER' to play another round.");
            } else if (formatedPlayerSelection === "scisors" && computerSelection === "rock") {
                return ("LOSE == Machine had ROCK. You Lose!\
                \n Press 'ENTER' to play another round.");
            } else if (formatedPlayerSelection === "scisors" && computerSelection === "paper") {
                return ("WIN == Machine had Paper. You Win!\
                \n Press 'ENTER' to play another round.");
            } else if (formatedPlayerSelection === "rock" && computerSelection === "paper") {
                return ("LOSE == Machine had Paper. You lose!\
                \n Press 'ENTER' to play another round.");
            } else if (formatedPlayerSelection === "rock" && computerSelection === "scisors") {
                return ("WIN == Machine had scisors. You Win!\
                \n Press 'ENTER' to play another round.");
            } else {
                return ("You can only choose: rock, paper, or scisors! Play again.\
                \n Press 'ENTER' to play another round.");
            }
        };

        alert(playRound(playerSelection, computerSelection))
        let roundResult = playRound(playerSelection, computerSelection);
        // Add score after each round
        if (roundResult.includes("WIN")) {
            scoreHuman += 1;
        } else if (roundResult.includes("LOSE")) {
            scoreMachine += 1;
        }
    }



    if (scoreHuman < scoreMachine) {
        alert(`YOU LOSE! Human ${scoreHuman}: ${scoreMachine} Machine`);
    } else if (scoreHuman > scoreMachine) {
        alert(`YOU BEAT THE MACHINE!  Human - ${scoreHuman} : ${scoreMachine} - Machine`);
    } else {
        alert(`EVEN. Play another game to beat the Machine.`);
    }


    alert("Press 'ENTER' to start another game");

    setTimeout(function () {
        location.reload();
    }, 1000);