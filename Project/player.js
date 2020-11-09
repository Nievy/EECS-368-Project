



class Player{

    constructor(){

        this.leaderFound=false;
        //creates 3 boats of length 1, 2, and lastly the 3rd boat is of length 3. n=length, all 1xn boats
        this.hp=5;
        this.board=new Board();


    }
    map(){
        for(let i=0; i<5; i++){
            for(let j=0; j<5; j++){
                if(i==0 && j==0){
                    console.log(i+ " ");
                }
                if(j==0 && i!=0){
                    console.log(i+ " ");

                }
                if(i==0 && j!=0){
                    console.log(j+ " ");

                }
                if(i!=0 && j!=0){
                    console.log(this.board.boatBoard[i][j]+ " ");
                }

            }

        }
    }

    setBoard(){

        alert("You will now be asked to place your Leader");
        console.log("Please place your leader");
        this.map();
        let tr=prompt("Your Row: ");
        let tc=prompt("Your Col: ");
        this.board.boatBoard[tr][tc]=99;

        for(let i=1; i<5; i++){
            let placeFound=false;

            console.log(this.board.boatBoard);
            alert(this.board.boatBoard);
            this.map();

            while(placeFound!=true){

                let trow=prompt("Your Row: ");
                let tcol=prompt("Your Col: ");



                if(this.board.boatBoard[trow][tcol]!=0){
                    console.log("Enter where boat hasn't been placed ");
                    alert("Boat is already at coordinate chosen or outside bounds");
              
                }
                else{
                    console.log("Boat has been placed at"+trow+","+tcol);
                
                 this.board.boatBoard[trow][tcol]=i;
                     placeFound=true;
                }
                    
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

    hpCheck(){
        return this.hp;
    }

    fire(Enemy){


        let hitFound=false;

        console.log(this.board.attemptLog);

        while(hitFound!=true){

            let trow=prompt("Your Row: ");
            let tcol=prompt("Your Col: ");

            if(this.board.isInBounds(trow,tcol)==true){
                if(Enemy.board.isHitBoard[trow][tcol]!=true){

                    Enemy.board.isHitBoard[trow][tcol]=true;
                    Enemy.hp=Enemy.hp-1;
    
                    if(Enemy.board.boatBoard[trow][tcol]!=0){
                        console.log("You have a hit boat " + Enemy.board.boatBoard[trow][tcol] + " at location: "+trow+","+tcol );
                        if(Enemy.board.boatBoard[trow][tcol]==99){
                            this.leaderFound=true;
                            console.log("LEADER HIT!!!");
                        }
                    }
                    else{
                        console.log("You have hit water. Location: "+trow+","+tcol);
                    }
                    this.board.attemptLog[trow,tcol]=""
                    hitFound=true;
                    
                }

               

            }

        }


    }

    



}