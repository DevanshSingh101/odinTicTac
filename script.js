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

checkWinner();






player = createPlayer('Devansh', 'X');
bot = createPlayer('Bot', 'O');








