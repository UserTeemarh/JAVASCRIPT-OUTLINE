        
        const score = JSON.parse(localStorage.getItem ('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
        }
        updateScoreElement();

 


       


// computerMove function
    function pickComputer() {
            const randomNumber =  Math.random();



            let computerMove = '';


            if (randomNumber > 0 && randomNumber < 1/3 ) {
                computerMove = 'rock';
            } else if (randomNumber > 1 /3 && randomNumber < 2 /3) {
                computerMove = 'paper';
            } else if (randomNumber > 2 /3 && randomNumber <   1) {
                computerMove = 'scissors';
            }


           return computerMove;
        
        }

        document.body.addEventListener('keydown', (event) => {
            if (event.key === 'r') {
                playGame('rock');
            } else if (event.key === 'p'){
                playGame('paper');
            } else if (event.key === 's'){
                playGame('scissors');
            } else if (event.key === 'Backspace') {
                score.wins = 0;
                score.losses = 0;
                score.ties = 0;
                localStorage.removeItem('score');
                updateScoreElement();
            }
        })
    
        // playerMove Function code

        function playGame(playerMove) {
        const computerMove = pickComputer();
       


         console.log(computerMove);


           let result = '';
           if(playerMove === 'scissors') {
            
                if (computerMove === 'rock') {
                    result = 'You lose';
                } else if (computerMove === 'paper') {
                    result = 'You win'
                } else  if (computerMove === 'Scissors') {
                    result = 'Tie';
                }


           } else if (playerMove === 'Paper') {
            
                    if (computerMove === 'rock') {
                    result = 'You lose';
                } else if (computerMove === 'paper') {
                    result = 'You win'
                } else  if (computerMove === 'scissors') {
                    result = 'Tie';
                }

           } else if (playerMove === 'rock'){
            
                    if (computerMove === 'Rock') {
                        result = 'You lose';
                    } else if (computerMove === 'paper') {
                        result = 'You win'
                    } else  if (computerMove === 'scissors') {
                        result = 'Tie';
                    }

           }

           localStorage.setItem('score', JSON.stringify(score))

           if (result === 'You win') {
            score.wins += 1;
           } else if (result === 'You lose') {
            score.losses += 1
           } else if (result === 'Tie') {
            score.ties += 1;
           }

           
           updateScoreElement();
           document.querySelector('.js-result').textContent = result;

           

           document.querySelector('.js-move').innerHTML = `You <img src="/img/${playerMove}-emoji.png" class="move-icon">

            <img src="/img/${computerMove}-emoji.png" class="move-icon">
        Computer`;




        }
        function updateScoreElement() {

            document.querySelector('.text').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`; 
        }

        let isAutoplaying = false;
        let intervalId;

        // const autoplay = () => {

        // }

        const autoplay = document.querySelector('.autoplay');
        autoplay.addEventListener('click', () => {
            if (!isAutoplaying) {
                intervalId =  setInterval(() => {
                     const playerMove = pickComputer();
                     playGame(playerMove);
     
                 }, 1000);
                 isAutoplaying = true;
             } else {
                 clearInterval(intervalId);
                 isAutoplaying = false;
                 autoplay.textContent = 'Stop Playing!'
             }
        });



       document.body.addEventListener('keydown', (event) =>{
        console.log(event.key)
            if (event.key === 'a') {
                autoplay.addEventListener('click', () => {
                    if (!isAutoplaying) {
                        intervalId =  setInterval(() => {
                             const playerMove = pickComputer();
                             playGame(playerMove);
             
                         }, 1000);
                         isAutoplaying = true;
                     } else {
                         clearInterval(intervalId);
                         isAutoplaying = false;
                         autoplay.textContent = 'Stop Playing!'
                     }
                });

            }
       })

        document.querySelector('.js-rock-button').addEventListener('click', () => {
            playGame('rock');
        });
        
        document.querySelector('.js-paper-button').addEventListener('click', () => {
            playGame('paper');
        });

        document.querySelector('.js-scissors-button').addEventListener('click', () => {
            playGame('scissors');
        });

        

      