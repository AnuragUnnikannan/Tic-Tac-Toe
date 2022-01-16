let board = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
let playerSign = 'X';
let computerSign = 'O';
let playerWinCondition = 'XXX';
let computerWinCondition = 'OOO';
let cellsUsed = 0;
let currentCellOccupied = false;
function player(clicked)
{
    let flag = 0;
    if(result() == 0)
    {
        while(flag != 1)
        {
            for(let i = 0;i<3;i++)
            {
                for(let j = 0;j<3;j++)
                {
                    let pos = clicked.charAt(clicked.length-1)
                    if(board[i][j] === pos)
                    {
                        document.getElementById(clicked).innerHTML = playerSign;
                        board[i][j] = playerSign;
                        cellsUsed++;
                        currentCellOccupied = false;
                        flag = 1;
                        break;
                    }
                }
            }
            if(flag === 0)
            {
                console.log("Position already occupied");
                currentCellOccupied = true;
                return 0;
            }
        }
    }
    console.log(board);
    return board;
}

function computer()
{
    if(result() == 0 && currentCellOccupied === false)
    {
        let flag = 0;
        let xo_counter = 0;
        while(flag != 1)
        {
            let x = Math.floor(Math.random()*10);
            let pos = x.toString();
            for(let i = 0;i<3;i++)
            {
                for(let j = 0;j<3;j++)
                {
                    if(board[i][j] === pos)
                    {
                        console.log("box"+pos);
                        document.getElementById("box"+pos).innerHTML = computerSign;
                        board[i][j] = computerSign;
                        cellsUsed++;
                        flag = 1;
                        break;
                    }
                    /* else if(board[i][j] === 'X' || board[i][j] === 'O')
                    {
                        xo_counter++;
                    } */
                }
            }
            if(cellsUsed === 9)
            {
                console.log("Position already occupied computer");
                break;
            }
        }
    }
}

function checkRow()
{
    for(let i = 0;i<3;i++)
    {
        let s = "";
        for(let j = 0;j<3;j++)
        {
            s = s + board[i][j];
        }
        if(s === playerWinCondition)
        {
            return 1;
        }
        else if(s === computerWinCondition)
        {
            return 2;
        }
    }
    return 0;
}

function checkColumn()
{
    for(let i = 0;i<3;i++)
    {
        let s = "";
        for(let j = 0;j<3;j++)
        {
            s = s + board[j][i];
        }
        if(s === playerWinCondition)
        {
            return 1;
        }
        else if(s === computerWinCondition)
        {
            return 2;
        }
    }
    return 0;
}

function checkLeftDiagonal()
{
    let s = "";
    for(let i = 0;i<3;i++)
    {
        for(let j = 0;j<3;j++)
        {
            if(i == j)
            {
                s = s + board[i][j];
            }
        }
    }
    if(s === playerWinCondition)
    {
        return 1;
    }
    else if(s === computerWinCondition)
    {
        return 2;
    }
    else
    {
        return 0;
    }
}

function checkRightDiagonal()
{
    let s = "";
    for(let i = 0;i<3;i++)
    {
        for(let j = 0;j<3;j++)
        {
            if(i + j === 2)
            {
                s = s + board[i][j];
            }
        }
    }
    if(s === playerWinCondition)
    {
        return 1;
    }
    else if(s === computerWinCondition)
    {
        return 2;
    }
    else
    {
        return 0;
    }
}

function result()
{
    let flag = 0;
    if(cellsUsed >= 6)
    {
        if(checkRow() === 1)
        {
            console.log("hello from result6");
            document.getElementsByClassName("wrapper")[0].style.display = "flex";
            document.getElementsByClassName("result")[0].innerHTML = "You Win!";
            flag = 1;
            return 1;
        }
        else if(checkRow() === 2)
        {
            document.getElementsByClassName("result")[0].innerHTML = "Computer Wins";
            document.getElementsByClassName("wrapper")[0].style.display = "flex";
            flag = 1;
            return 1;
        }
        else if(checkColumn() === 1)
        {
            document.getElementsByClassName("result")[0].innerHTML = "You Win!";
            document.getElementsByClassName("wrapper")[0].style.display = "flex";
            flag = 1;
            return 1;
        }
        else if(checkColumn() === 2)
        {
            document.getElementsByClassName("result")[0].innerHTML = "Computer Wins";
            document.getElementsByClassName("wrapper")[0].style.display = "flex";
            flag = 1;
            return 1;
        }
        else if(checkLeftDiagonal() === 1)
        {
            document.getElementsByClassName("result")[0].innerHTML = "You Win!";
            document.getElementsByClassName("wrapper")[0].style.display = "flex";
            flag = 1;
            return 1;
        }
        else if(checkLeftDiagonal() === 2)
        {
            document.getElementsByClassName("result")[0].innerHTML = "Computer Wins";
            document.getElementsByClassName("wrapper")[0].style.display = "flex";
            flag = 1;
            return 1;
        }
        else if(checkRightDiagonal() === 1)
        {
            document.getElementsByClassName("result")[0].innerHTML = "You Win!";
            document.getElementsByClassName("wrapper")[0].style.display = "flex";
            flag = 1;
            return 1;
        }
        else if(checkRightDiagonal() === 2)
        {
            document.getElementsByClassName("result")[0].innerHTML = "Computer Wins";
            document.getElementsByClassName("wrapper")[0].style.display = "flex";
            flag = 1;
            return 1;
        }
        else if(flag === 0 && cellsUsed === 9)
        {
            document.getElementsByClassName("result")[0].innerHTML = "Draw";
            document.getElementsByClassName("wrapper")[0].style.display = "flex";
            return 2;
        }
    }
    return 0;
}