function chooseRock(){
    const randomNumber=Math.random();
    let computerMove='';
    if(randomNumber>=0 && randomNumber<1/3){
         computerMove='rock';
    } else if (randomNumber>=1/3 && randomNumber< 2/3){
         computerMove='paper';
    } else if (randomNumber>=2/3 && randomNumber < 1){
         computerMove='Scissors';
    }
    console.log(computerMove);

    let result = '';
    if (computerMove==='rock'){
        result = 'Tie';
    } else if (computerMove==='paper'){
        result='You lose';
    }else if (computerMove==='Scissors'){
        result='You win';
    }
    alert(`You picked rock. Computer picked ${computerMove}. ${result}.`);
    
}