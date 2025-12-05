let score = JSON.parse(localStorage.getItem('score')) ||
             {
               Wins: 0,
               Losess: 0,
               Ties: 0
            };

            scoreupdate();

            /*
            if(score === null) {
                score = {
                    wins: 0,
                    losess: 0,
                    ties: 0
                };
            }
            */

            function gameres(playermove) {
                const compmove = pickcompmove();

                let res='';

                if (playermove === 'scissors'){
                    if(compmove === 'rock'){
                        res= 'You lose..'
                    }
                    else if(compmove === 'paper'){
                        res= 'You win..!'
                    }
                    else if(compmove === 'scissors'){
                        res= 'That is tie.'
                    }
                }

                else if(playermove === 'paper'){
                     if(compmove === 'rock'){
                        res= 'You win..!'
                    }
                    else if(compmove === 'paper'){
                        res= 'That is tie.'
                    }
                    else if(compmove === 'scissors'){
                        res= 'You lose..'
                    }
                }

                else if(playermove === 'rock'){
                    if(compmove === 'rock'){
                        res= 'That is tie.'
                    }
                    else if(compmove === 'paper'){
                        res= 'You lose..'
                    }
                    else if(compmove === 'scissors'){
                        res= 'You win..!'
                    }
                }


                if(res === 'You win..!'){
                    score.Wins += 1;
                }
                else if(res === 'You lose..'){
                    score.Losess += 1;
                }
                else if(res === 'That is tie.'){
                    score.Ties += 1;
                }

                localStorage.setItem('score', JSON.stringify(score));

                
                scoreupdate();

                document.querySelector('.result').innerHTML = res;

                document.querySelector('.choices').innerHTML = `Your pick
            <img src="images/${playermove}-emoji.png" class="move-icon">
            <img src="images/${compmove}-emoji.png" class="move-icon">
            computer pick`;

            }

            function scoreupdate(){
                document.querySelector('.streak') .innerHTML = `Wins = ${score.Wins},Losess = ${score.Losess},Ties = ${score.Ties}`;
                
            }
        


            function pickcompmove(){
                const randnum = Math.random();
                let compmove = '';
                if(randnum >=0 && randnum < 1/3){
                    compmove = 'rock';
                }
                else if(randnum >= 1/3 &&  randnum < 2/3){
                    compmove ='paper';
                }
                else if(randnum >= 2/3 && randnum < 1){
                    compmove='scissors';
                }
              return compmove;
            }