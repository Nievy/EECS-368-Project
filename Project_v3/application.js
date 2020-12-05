
class Application{


constructor(){
    
    alert("Careful setting the AI, both are a gamble");
    let aiDiff=prompt("Type in '1' for AI to shoot randomly or type in '2' for AI to shoot all boats then Captain\nFeeling lucky? Type in '3' for 3 turns to find AI's lead before it finds your lead!");

    alert("Your with your fleet and you come across a smokescreen");
    alert("Win by either destroying all 5 enemy ships or finding the leader, lose by the same metric");
    
    alert("Fire your cannons!!");
    this.ai=new AI(parseInt(aiDiff));
    this.p1=new Player();
    

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

fire(){

    this.p1.fire(this.ai);
    alert("PRESS STATUS REPORT TO CHECK ON YOUR MEN!!!")


}

status(){
    this.ai.fire(this.p1);
    if(this.p1.hp==0){
        alert("You have lost your fleet, you lose!");
        document.getElementById("Background").className="lose";
    }
}

run(){

    let gameOver=false;
    while(gameOver!=true){
        if(this.turn==1){
            
            this.p1.fire(this.ai);
            
            this.turnChange(this.turn);
            if(this.p1.hasFoundLead()==true){
                console.log("YOU ARE THE WINNER");
                alert("LEADER FOUND, YOU ARE THE WINNER!!");
                gameOver=true;
            }
            if(this.p1.hpCheck()<1){
                console.log("ALL AI BOATS ARE DESTROYED, YOU ARE THE WINNER");
                alert("ALL AI BOATS ARE DESTROYED, YOU ARE THE WINNER!!");
                gameOver=true;
            }

        }
        else{
            
            this.ai.fire(this.p1);
            
            this.turnChange(this.turn);
            if(this.ai.hasFoundLead()==true){
                console.log("The AI has found your leader, play again ");
                alert("The AI has found your leader, try again");
                gameOver=true;
            }
            if(this.ai.hpCheck()<1){
                console.log("The AI has destryoed all your boats, play again ");
                alert("The AI has destroyed all your boats, try again");
                gameOver=true;
            }
        }
    }
}

    

    

};


