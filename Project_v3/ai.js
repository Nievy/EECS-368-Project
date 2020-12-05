

class AI{



    // constructor(){

    //     this.leaderFound=false;
    //     this.hp=5;
    //     this.board=new Board();
    //     this.setAIBoard();
        
    // }

    constructor(difficulty){

        this.difficulty=difficulty;
        this.leaderFound=false;
        this.hp=5;
        this.board=new Board();
        this.setAIBoard();
        this.turn=0;
        
    }

    hpCheck(){
        return this.hp;
    }

    fire(Enemy){
        let hitFound=false;
        //if this.difficulty is set to 1 then completely random
        if(this.difficulty==1){

            while(hitFound!=true){
                let row = Math.floor((Math.random()*4));
                let col = Math.floor((Math.random()*4));
                if(Enemy.board.isHitBoard[row][col]!=true){

                    Enemy.board.isHitBoard[row][col]=true;

                    document.getElementById((row+1)+","+(col+1)).className="miss";

                    if(Enemy.board.boatBoard[row][col]==99){
                        alert("LEADER HAS BEEN HIT BY AI AT "+(row+1)+","+(col+1));

                        console.log("LEADER HAS BEEN HIT AT "+(row+1)+","+(col+1));
                        document.getElementById("Background").className="lose";


                        this.leaderFound=true;

                    }
                    else if(Enemy.board.boatBoard[row][col]!=0){
                        alert("AI has hit boat #" + Enemy.board.boatBoard[row][col] + " at location: "+(row+1)+","+(col+1) );
                        
                        console.log("AI has hit boat #" + Enemy.board.boatBoard[row][col] + " at location: "+(row+1)+","+(col+1) );
                        Enemy.hp=Enemy.hp-1;
                        document.getElementById("Background").className="hit";
                        



                    }
                    else{
                        alert("AI has hit water. Location: "+(row+1)+","+(col+1));

                        console.log("AI has hit water. Location: "+(row+1)+","+(col+1));
                        document.getElementById("Background").className="water";
                    }
                    hitFound=true;
                    
                }

            }
        }
        //AI hits randomly for 3 turns then hits the player's leader on 4th turn.
        else if(this.difficulty==3){
            while(hitFound!=true){
                let row = Math.floor((Math.random()*4));
                let col = Math.floor((Math.random()*4));
                if(this.turn<2){
                    if((Enemy.board.isHitBoard[row][col]!=true)&&(Enemy.board.boatBoard[row][col]!=0)&&(Enemy.board.boatBoard[row][col]!=99)){

                        Enemy.board.isHitBoard[row][col]=true;

                        document.getElementById((row+1)+","+(col+1)).className="miss";

                        alert("AI has hit boat #" + Enemy.board.boatBoard[row][col] + " at location: "+(row+1)+","+(col+1) );
                            
                        console.log("AI has hit boat #" + Enemy.board.boatBoard[row][col] + " at location: "+(row+1)+","+(col+1) );
                        Enemy.hp=Enemy.hp-1;                    
                        document.getElementById("Background").className="hit";
                        if(Enemy.hpCheck<1){
                            alert("AI has finished your fleet, you lose");
                            document.getElementById("Background").className="lose";
                        }
                        this.turn=this.turn+1;
                        hitFound=true;
                    }
                }
                else{
                    if(Enemy.board.boatBoard[row][col]==99){

                        alert("LEADER HAS BEEN HIT BY AI AT "+(row+1)+","+(col+1));

                        console.log("LEADER HAS BEEN HIT AT "+(row+1)+","+(col+1));
                        document.getElementById("Background").className="lose";


                        this.leaderFound=true;

                        hitFound=true;
                    }
                }

                    
            }
        }
        else{

            while(hitFound!=true){
                let row = Math.floor((Math.random()*4));
                let col = Math.floor((Math.random()*4));
                if((Enemy.board.isHitBoard[row][col]!=true)&&(Enemy.board.boatBoard[row][col]!=0)&&(Enemy.board.boatBoard[row][col]!=99)){

                    Enemy.board.isHitBoard[row][col]=true;

                    document.getElementById((row+1)+","+(col+1)).className="miss";

                    alert("AI has hit boat #" + Enemy.board.boatBoard[row][col] + " at location: "+(row+1)+","+(col+1) );
                        
                    console.log("AI has hit boat #" + Enemy.board.boatBoard[row][col] + " at location: "+(row+1)+","+(col+1) );
                    Enemy.hp=Enemy.hp-1;                    
                    document.getElementById("Background").className="hit";
                    if(Enemy.hpCheck<1){
                        alert("AI has finished your fleet, you lose");
                        document.getElementById("Background").className="lose";
                    }
                    
                    hitFound=true;
                }


                    
            }

        }
    }
    

    setAIBoard(){
        //ranges
        let row = Math.floor((Math.random()*4));
        let col = Math.floor((Math.random()*4));
        let boatsSet=1;
        this.board.boatBoard[row][col]=99;

        while(boatsSet<6){
//ranges changed
            let tr = Math.floor((Math.random()*4));
            let tc = Math.floor((Math.random()*4));

           
            if((this.board.boatBoard[tr][tc])==0){

                this.board.boatBoard[tr][tc]=boatsSet;
                boatsSet=boatsSet+1;
                    
            }
             
        }
    }

    hasFoundLead(){
        if(this.leaderFound==true){
            return true;
        }
        else{
            return false;
        }
    }

}



