export function rps(shot){
    const moveSET = ['rock', 'paper', 'scissors'];
    if (shot == undefined){
        return {'player': moveSET[Math.floor(Math.random() * moveSET.length)]};
    }
    else{
        shot = shot.toLowerCase();

        if(!moveSET.includes(shot)){
            return 'error';
        }
        
        let opponent = moveSET[Math.floor(Math.random() * moveSET.length)];

        if(shot === opponent){
            return {'player': shot, 'opponent': opponent, 'result': 'tie'};
        }
      
        if (shot === 'rock' && opponent === 'scissors') {
            return {'player': shot, 'opponent': opponent, 'result': 'win'};
        }
  
        if (shot === 'rock' && opponent === 'paper') {
            return {'player': shot, 'opponent': opponent, 'result': 'lose'};
        }
     
         if (shot === 'paper' && opponent === 'scissors') {
            return {'player': shot, 'opponent': opponent, 'result': 'lose'};
        }
  
        if (shot === 'paper' && opponent === 'rock') {
            return {'player': shot, 'opponent': opponent, 'result': 'win'};
        }
        if (shot === 'scissors' && opponent === 'rock') {
            return {'player': shot, 'opponent': opponent, 'result': 'lose'};

        if (shot === 'scissors' && opponent === 'paper') {
            return {'player': shot, 'opponent': opponent, 'result': 'win'};
        }
    }
}
}