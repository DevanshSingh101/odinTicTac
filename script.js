gameboard = [['','',''],['','',''],['','','']];
let status = document.getElementById('status');
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');


function clear(){
    gameboard = [['','',''],['','',''],['','','']];
}



function createPlayer(name, style, score) {return {name, style, score}}

function isOdd(a){
    return a%2;
}

function createClick(){

    let cell = document.querySelectorAll('.cell');
    let getRowId = (e)=>{return e.parentElement.id - 30;};
    let getColId = (e)=>{return e.id - ((e.parentElement.id - 30)*3) - 1;};
    let changeStyle = (e, val)=>{e.firstChild.innerHTML = val;};
    let updateGameBoard = (row, col, val)=>{gameboard[row][col] = val;};
    
    return {cell, getRowId, getColId, changeStyle, updateGameBoard};
    
    }

function startGame(p1, p2){

    status.innerHTML = 'Game Status: Running';
    clickObj = createClick();
    turn = 1;
    winner = '';

    function renderScores(){
        score1.innerHTML = p1.name + ':' + p1.score;
        score2.innerHTML = p2.name + ':' + p2.score;
    }

    clickObj.cell.forEach((e) => {
    e.onclick = ()=>{
    if(e.firstChild.innerHTML == '' && checkWinner()=='draw'){    
        if(turn%2){
            
            clickObj.changeStyle(e, p1.style);
            clickObj.updateGameBoard(clickObj.getRowId(e), clickObj.getColId(e), p1.style);
            e.firstChild.style = 'color:red;';
            turn += 1;
        }else{
            console.log('clicked');
            clickObj.changeStyle(e, p2.style);
            clickObj.updateGameBoard(clickObj.getRowId(e), clickObj.getColId(e), p2.style);
            e.firstChild.style = 'color:blue;';
            turn += 1;
        }
        winner = checkWinner();
        console.log(winner);
        
        if(turn != 10){
            if(winner != 'draw'){
                if(winner == 'X'){
                    status.innerHTML = 'The winner is ' + p1.name;
                    p1.score+=1;
                    renderScores();
                }else{
                    status.innerHTML = 'The winner is ' + p2.name;
                    p2.score+=1;
                    renderScores();
                }
            }
        }else{  
                status.innerHTML = 'Thy are equals';
        }
        }
}
    

    




    });


}

function checkWinner(){
    similarityCount = 0;
    winner = 'draw';

    //rows
    main: for(x = 0; x<=2;x++){
        for(i = 1; i<=2; i++){

            val = gameboard[x][i];
            prev = gameboard[x][i-1];
            if(val != '' && val==prev){
                similarityCount+=1;
                if(similarityCount == 2){
                    if(val == gameboard[x][i-2]){  
                        winner = val;
                        console.log('By row'); 
                        break main;
            }}
            }

        }
    }
    //columns
    if(winner == 'draw'){

        main: for(x = 0; x<=2;x++){
            for(i = 1; i<=2; i++){

                val = gameboard[i][x];
                prev = gameboard[i-1][x];
                if(val != '' && val==prev){
                    similarityCount+=1;
                    if(similarityCount == 2){
                        if(val == gameboard[x][i-2]){  
                            winner = val;
                            console.log('By column'); 
                            break main;
                }
                }
                }

            }
        }

    }
    
    if(winner == 'draw'){
        if(gameboard[0][0] == gameboard[1][1] && gameboard[1][1] == gameboard[2][2] && gameboard[2][2]!=''){
            winner = gameboard[2][2];
            console.log('By D'); 
        }else if(gameboard[0][2] == gameboard[1][1] && gameboard[1][1] == gameboard[2][0] && gameboard[2][0]!=''){
            winner = gameboard[2][0];
            console.log('By D'); 
        }

    }

    return winner;
}

function renderGrid(){

    

    for(x=1; x<=3;x++){
        
        for(i=1; i<=3;i++){

            let row = document.querySelector('.gamebox > div:nth-child(' + x + ')');
            let rowSelector = '.gamebox > div:nth-child(' + x + ')';
            let cell = document.querySelector(rowSelector + '> div:nth-child(' + i + ')' + ' > p');
            // console.log(cell);
            val = gameboard[x-1][i-1];
            cell.innerHTML = val;


        }
    }

}

const newGame = document.getElementById('newGame');
let name1 = '';
let name2 = '';
newGame.onclick = ()=>{
    name1 = document.getElementById('p1Name').value;
    name2 = document.getElementById('p2Name').value;
    p1 = createPlayer(name1, 'X', 0);
    p2 = createPlayer(name2, 'O', 0);
    clear();
    renderGrid();
    startGame(p1, p2);
}





// console.log(checkWinner());












