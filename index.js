let score =  20;

let highscore = 0;

let number = Math.floor(Math.random() * 20 + 1)

let guess;

document.querySelector('.check').addEventListener('click' , function(){
    guess =  Number(document.querySelector('.guess').value)
      if(!guess){
       getMessage("You  haven't entered any number")
      }else{
         if(guess === number){
            document.querySelector('.number').textContent = number
            document.querySelector('.number').style.fontSize = '70px'
          getMessage("Congratulation!!!!🥳🎉")
          document.body.style.backgroundColor=`green`
          if(highscore<score){
            highscore = score;
            document.querySelector(".highscore").innerHTML=score
          }

      }
      else if(guess !== number){
			if(score > 0 ){
				displayMessage();	
			}else{
                document.querySelector('.message').textContent = "GAME OVER!!!🥲";
                document.body.style.backgroundColor = `red`
			}
      }
      
      }
      document.querySelector('.guess').value = ''
})

 document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.number').innerHTML = '?'
    document.querySelector('.score').innerHTML = score;
    getMessage('Start guessing...')
    number = Math.floor(Math.random() * 20 + 1)
   document.body.style.backgroundColor = '#222'
})
// ------functions for messgae----------
var displayMessage = function(){
   document.querySelector(".message").textContent=( guess > number ? 'Number is too high📈' : 'Number is too low📉')
   score--;
   document.querySelector(".score").innerHTML=score

}

function getMessage(msg){
   document.querySelector('.message').innerHTML = msg;
}



