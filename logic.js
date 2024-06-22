let userScore=0;
let comScore=0;

const msg =document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const userscorepara=document.querySelector("#user-score");
const comscorepara=document.querySelector("#com-score");



const gencomChoice=()=>{
  //rock,paper,scissor
  //Math.random()//it gives a random number
  const options=["rock","paper","scissor"];
   const randIDX=Math.floor(Math.random()*3);
   return options[randIDX];

}
const drawgame=()=>{
  msg.innerText="Game Was Draw Play Again!";
  msg.style.backgroundColor="darkslategrey";

};

const showwinner=(userwin,userchoice,comChoice)=>{
  if(userwin){
    userScore++;
    userscorepara.innerText=userScore;
    msg.innerText=`You Win . ${userchoice} beats ${comChoice}`;
    msg.style.backgroundColor="green";


  }
else{
  
  msg.innerText=`You Lose . ${comChoice} beats ${userchoice}`;
  msg.style.backgroundColor="red";

}
};

const playGame=(userchoice)=>{
//com generating
const comChoice=gencomChoice();
if(userchoice===comChoice){
  //drawgame
  drawgame();
}else
  {
    let userwin=true;
    if(userchoice==="rock"){
    userwin=comChoice==="paper"? false : true;
     } else if(userchoice==="paper")
     {
     
    userwin=comChoice==="scissor"? false : true;
     } 
    // if(null){

     //}
     else {
userwin=comChoice==="rock"? false : true;
      
     }
showwinner(userwin,userchoice,comChoice);
     
    }
  };






choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
  const userchoice=choice.getAttribute("id");
    
playGame(userchoice);
  });
});