

class AI{



    constructor(){

        this.leaderFound=false;
        this.hp=5;
        this.board=new Board();

        
    }
    hpCheck(){
        return this.hp;
    }

    fire(Enemy){
        let hitFound=false;

        while(hitFound!=true){
            let row = Math.floor((Math.random()*4)+1);
            let col = Math.floor((Math.random()*4)+1);
            if(Enemy.board.isHitBoard[row][col]!=true){

                Enemy.board.isHitBoard[row][col]=true;


                if(Enemy.board.boatBoard[row][col]!=0){
                    
                    console.log("AI has hit boat " + Enemy.board.boatBoard[row][col] + " at location: "+row+","+col );
                    Enemy.hp=Enemy.hp-1;

                    if(Enemy.board.boatBoard[row][col]==99){
                        console.log("LEADER HIT!!");
                        this.leaderFound=true;
                    }
                }
                else{
                    console.log("AI has hit water. Location: "+row+","+col);
                }
                hitFound=true;
                
            }

        }

    }

    setAIBoard(){
        let row = Math.floor((Math.random()*4)+1);
        let col = Math.floor((Math.random()*4)+1);
        let boatsSet=1;
        this.board.boatBoard[row][col]=99;

        while(boatsSet<6){

            let tr = Math.floor((Math.random()*4)+1);
            let tc = Math.floor((Math.random()*4)+1);

           
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



