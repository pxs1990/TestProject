function chooseScissors(){
    
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
        result = 'You lose';
    } else if (computerMove==='paper'){
        result='You win';
    }else if (computerMove==='Scissors'){
        result='Tie';
    }
    alert(`You picked scissors. Computer picked ${computerMove}. ${result}.`);
    
}