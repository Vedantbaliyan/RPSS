let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#compscore");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});

const gencompchoice=()=>{
   const options=["rock","paper","scissor"];
  const  randidx=Math.floor(Math.random()*3);
    return options[randidx];
}

const playgame=(userchoice)=>{
    const compchoice=gencompchoice();
    if(userchoice===compchoice){
        drawgame(0);
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    };
};

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const drawgame=()=>{
    msg.innerText="game was draw! play again...";
    msg.style.backgroundColor="#081b31";
}