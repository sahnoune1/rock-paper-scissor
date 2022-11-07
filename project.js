     
function game() {
    // the whole program
    let a=0;
    let b=0;

    for (let x = 0; x < 5; x++) { 
        //  this loop will give us 5 rounds 

// this is to call for the confirm function and let the magic happens 
confirm();


// this function sums the random choice and the compare function ,this where the magic Begins 
// this is where we enter a value and see if we win or lose or tie with computer
        function confirm() {
              let seif=prompt("whats ur choice")
            if (seif.toUpperCase()==="rock".toUpperCase() || seif.toUpperCase()==="paper".toUpperCase() || seif.toUpperCase()==="scissor".toUpperCase()) {
              play (seif,getComputerChoice());
              alert("player win rounds="+a +"\n"+" computer win rounds="+b);
            } else { 
              alert( "wrong answer");
              confirm()
            }
        }

// first function getcomputerchoice is to give a random value from the rock paper scissor list

        function getComputerChoice () {
            const list=["rock","paper","scissor"];
        
            const pick=list[Math.floor(Math.random()*list.length)];
            return pick;    
        
        }
 
        
// second function is to prepare for the game by writing a function that will do the comparaison 
// between the value entered by the player and the random value chose n by the computer 
// we use this function to compare when we enter a value 

        function play (x,computer) {
                 
            if (x.toUpperCase()==="rock".toUpperCase()) {
                if (computer.toUpperCase()==="rock".toUpperCase()) { 
                return alert("tie")}
                else if (computer.toUpperCase()==="scissor".toUpperCase()) {
                    a=a+1
                return alert ("u win")
            }
                else {
                    b=b+1
                return alert ("u lose")
            } 
            }
            else if (x.toUpperCase()==="scissor".toUpperCase()) {
                if (computer.toUpperCase()==="rock".toUpperCase()) {
                    b=b+1
                return alert ("u lose")
             }
                else if (computer.toUpperCase()==="paper".toUpperCase()) { 
                    a=a+1
                return alert ("u win") 
            }
                else {
                return alert ("tie") }
        
            }
            else if (x.toUpperCase()==="paper".toUpperCase()) {
                if (computer.toUpperCase()==="rock".toUpperCase()) {
                    a=a+1
                return alert ("u win") 
            }
                else if (computer.toUpperCase()==="paper".toUpperCase()) { 
                return alert ("tie") }
                else {
                    b=b+1
                return alert ("u lose")
            }                    
            }
            else { 
                 alert("wrong")
            }
        }
         
   }   


if (a>b) { alert("player wins")}
else if (a<b) { alert("computer wins")}
else {alert ("its  a fucking tie ")}

}  
    
    game();
//    to call for the whole program to begin  
   
    // var max_count = 5;

    // function showConfirm() {
    //   var company = (prompt("What the name of the company that developed the javascript language?", ""));
    //   if (company == 'netscape') {
    //     alert("correct answer!");
    //   } else {
    //     alert("wrong answer");
    //     // to limit user for limited count
    //     if (--max_count > 0)
    //       showConfirm()
    //   }
    // }
    // showConfirm();
