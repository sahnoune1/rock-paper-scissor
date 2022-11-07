
function game() {
    let a=0;
    let b=0;
    for (let x = 0; x < 5; x++) {
       
function getComputerChoice () {
    const list=["rock","paper","scissor"];

    const pick=list[Math.floor(Math.random()*list.length)];
    return pick;    

}

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

    else{
    return alert ("u declared a wrong entry")} 
}





    
       
        let seif=prompt("whats ur choice");
        play (seif,getComputerChoice());
        alert("player win rounds="+a +"\n"+" computer win rounds="+b);
    }
    }
    game();
    


    
       
        
        
   
    