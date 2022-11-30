// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

const btn1=document.createElement("button");
btn1.textContent="rock";
document.body.appendChild(btn1);


const btn2=document.createElement("button");
btn2.textContent="paper";
document.body.appendChild(btn2);


const btn3=document.createElement("button");
btn3.textContent="scissor"
document.body.appendChild(btn3);


const display=document.createElement("div");


function getComputerChoice () {
    const array=["rock","paper","scissor"];
    const random=array[Math.floor(Math.random()*array.length)];
    return (random);
    
}

function playOneRound(playerSelection,computerChoice) {
    let log="";
    if (playerSelection==="rock"){
        if (computerChoice==="rock"){
            log="its a tie";
        }
        else if (computerChoice==="paper"){
            
            log="you lose";
        }
        else if (computerChoice==="scissor"){
                        
            log="you win";
        }
    }
    else if (playerSelection==="paper"){
        if (computerChoice==="paper"){
            log="its a tie";
        }
        else if (computerChoice==="scissor"){
            
            log="you lose";
        }
        else if (computerChoice==="rock"){
            
           log="you win";
        }
    }
    else if (playerSelection==="scissor"){
        if (computerChoice==="scissor"){
            log="its a tie";
        }
        else if (computerChoice==="rock"){
            
           log="you lose";
        }
        else if (computerChoice==="paper"){
            
            log="you win";
        }
    }
return (log);
}





let counter =0;
let a=0;
let b=0;





    
    
    
   
    btn1.addEventListener("click", ()=> {
        counter+=1;
        
        let select="rock";
      let result= playOneRound(select,getComputerChoice ());
     alert(result);
     if(result==="you win"){
        a+=1;
     }
     else if(result==="you lose"){
        b+=1;
     }
     if (counter===5){
        if(a>b){
        alert("hahaha you win the game ");
        counter=0;
        a=0;
        b=0;
    }
    else if(a<b){
        alert("reallyµ?you lose");
        counter=0;
        a=0;
        b=0;
    }
    else{
        alert("well its a tie in the end");
        counter=0;
        a=0;
        b=0;
    }
    
    }
    console.log(a);
    console.log(b);
    console.log(counter);

    });
    btn2.addEventListener("click", ()=> {
        counter+=1;
        let select="paper";
       let result= playOneRound(select,getComputerChoice ());
        alert(result);
        if(result==="you win"){
           a+=1;
        }
        else if(result==="you lose"){
           b+=1;
        }
        if (counter===5){
           if(a>b){
           alert("hahaha you win the game ");
           counter=0;
           a=0;
           b=0;
       }
       else if(a<b){
           alert("reallyµ?you lose");
           counter=0;
           a=0;
           b=0;
       }
       else{
        alert("well its a tie in the end");
        counter=0;
        a=0;
        b=0;
    }
       
       }
       console.log(a);
    console.log(b);
    console.log(counter);

    });
    btn3.addEventListener("click",() => {
        counter+=1;
        let select="scissor";
      let result=  playOneRound(select,getComputerChoice ());
        alert(result);
        if(result==="you win"){
           a+=1;
        }
        else if(result==="you lose"){
           b+=1;
        }
        if (counter===5){
           if(a>b){
           alert("hahaha you win the game ");
           counter=0;
           a=0;
           b=0;
       }
       else if(a<b){
           alert("reallyµ?you lose");
           counter=0;
           a=0;
           b=0;
       }
       else{
        alert("well its a tie in the end");
        counter=0;
        a=0;
        b=0;
    }
       
       }
       console.log(a);
    console.log(b);
    console.log(counter);


    });
  

 
