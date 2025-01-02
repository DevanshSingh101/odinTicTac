gameboard = [['','',''],['','',''],['','','']];



function createPlayer(name, style) {return {name, style, position:[]}}

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
                winner = val; 
                break main;
            }
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
                    winner = val; 
                    break main;
                }
                }

            }
        }

    }
    
    if(winner=='draw'){
        if(gameboard[0][0] == gameboard[1][1] && gameboard[1][1] == gameboard[2][2] && gameboard[2][2]!=''){
            winner = gameboard[2][2];
        }else if(gameboard[0][2] == gameboard[1][1] && gameboard[1][1] == gameboard[2][0] && gameboard[2][0]!=''){
            winner = gameboard[2][0];
        }

    }

    console.log(winner);
}

function renderGrid(){

    

    for(x=1; x<=3;x++){
        
        for(i=1; i<=3;i++){

            let row = document.querySelector('.gamebox > div:nth-child(' + x + ')');
            let rowSelector = '.gamebox > div:nth-child(' + x + ')';
            let cell = document.querySelector(rowSelector + '> div:nth-child(' + i + ')' + ' > p');
            console.log(cell);
            val = gameboard[x-1][i-1];
            cell.innerHTML = val;


        }
    }

}



renderGrid();






player = createPlayer('Devansh', 'X');
bot = createPlayer('Bot', 'O');








