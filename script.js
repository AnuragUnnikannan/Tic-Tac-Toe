let board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
let boxFilled = 0;  //to count number of boxes filled
let winner = "";
let winAudio = new Audio("mixkit-achievement-bell-600.wav");
let loseAudio = new Audio("mixkit-losing-piano-2024.wav");
let soundEffect = new Audio("mixkit-dry-pop-up-notification-alert-2356.wav");

function computer()
{
    let x = Math.floor(Math.random()*9);
    if(board[x] != "X" && board[x] != "O")  //if the position is not occupied
    {
        board[x] = "O";
        document.getElementById("box"+x).textContent = "O";
        boxFilled++;
    }
    else if(boxFilled != 9) //if empty boxes are still left
    {
        computer();
    }
}

function play(clicked)
{
    if(winner === "")   //if winner is not decided yet
    {
        let boxText = document.getElementById(clicked).textContent;
        if(boxText === "")
        {
            document.getElementById(clicked).textContent = "X";
            board[parseInt(clicked.charAt(clicked.length-1))] = "X";    //placing "X" in the position that was clicked, inside the array
            soundEffect.play();
            boxFilled++;
            checkWinner(boxFilled);
            computer();     //tell computer to play after player's turn
            checkWinner(boxFilled);
        }
        else
        {
            console.log("Already Occupied");
        }
    }
}

function checkWinner(boxFilled)
{
    if(board[0] === board[1] && board[1] === board[2])          //1st row
    {
        winner = board[0];
    }
    else if(board[3] === board[4] && board[4] === board[5])     //2nd row
    {
        winner = board[3];
    }
    else if(board[6] === board[7] && board[7] === board[8])     //3rd row
    {
        winner = board[6];
    }
    else if(board[0] === board[3] && board[3] === board[6])     //1st column
    {
        winner = board[0];
    }
    else if(board[1] === board[4] && board[4] === board[7])     //2nd column
    {
        winner = board[1];
    }
    else if(board[2] === board[5] && board[5] === board[8])     //3rd column
    {
        winner = board[2];
    }
    else if(board[0] === board[4] && board[4] === board[8])     //left diagonal
    {
        winner = board[0];
    }
    else if(board[2] === board[4] && board[4] === board[6])     //right diagonal
    {
        winner = board[2];
    }
    else
    {
        if(boxFilled === 9)     //if all boxes are filled and winner is not yet decided
        {
            document.getElementsByClassName("info")[0].textContent = "Draw";
            document.getElementsByClassName("wrapper")[0].style.display = "flex";
            soundEffect.play();
            return "draw";
        }
    }

    if(winner === "X")      //Player win condition
    {
        document.getElementsByClassName("info")[0].textContent = "You win!";
        document.getElementsByClassName("wrapper")[0].style.display = "flex";
        winAudio.play();
    }
    else if(winner === "O")     //Computer win condition
    {
        document.getElementsByClassName("info")[0].textContent = "Computer Wins!";
        document.getElementsByClassName("wrapper")[0].style.display = "flex";
        loseAudio.play();
    }
    return winner;
}

function hideResult()   //for closing dialog box
{
    document.getElementsByClassName("wrapper")[0].style.display = "none";
}