

class AI{



    constructor(){

        this.leaderFound=false;
        this.hp=5;
        this.board=new Board();
        this.setAIBoard();
        
    }
    hpCheck(){
        return this.hp;
    }

    fire(Enemy){
        let hitFound=false;

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
                    alert("AI has hit water. Location: "+row+","+col);

                    console.log("AI has hit water. Location: "+row+","+col);
                    document.getElementById("Background").className="water";
                }
                hitFound=true;
                
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



