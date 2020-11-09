
class Application{


constructor(){

    ai=new AI();
    p1=new Player();
    
    ai.setAIBoard();
    p1.setBoard();
    this.turn=1;
}

turnChange(num){

    if(this.num==1){
        this.turn=2;
    }
    if(this.num==2){
        this.turn=1;
    }
}

run(){

    let gameOver=false;
    while(gameOver!=true){
        if(this.turn==1){
            p1.fire(ai);
            
            this.turnChange(this.turn);
            if(p1.hasFoundLead()==true){
                console.log("YOU ARE THE WINNER");
                alert("LEADER FOUND, YOU ARE THE WINNER!!");
                gameOver=true;
            }
            if(p1.hpCheck()<1){
                console.log("ALL AI BOATS ARE DESTROYED, YOU ARE THE WINNER");
                alert("ALL AI BOATS ARE DESTROYED, YOU ARE THE WINNER!!");
                gameOver=true;
            }

        }
        else{
            ai.fire(p1);
            this.turnChange(this.turn);
            if(ai.hasFoundLead()==true){
                console.log("The AI has found your leader, play again ");
                alert("The AI has found your leader, try again");
                gameOver=true;
            }
            if(ai.hpCheck()<1){
                console.log("The AI has destryoed all your boats, play again ");
                alert("The AI has destroyed all your boats, try again");
                gameOver=true;
            }
        }
    }
}

    

    

};


