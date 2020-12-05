



class Player{

    constructor(){

        this.leaderFound=false;
        //creates 3 boats of length 1, 2, and lastly the 3rd boat is of length 3. n=length, all 1xn boats
        this.hp=5;
        this.board=new Board();
        this.setBoard();


    }
    //map(){
      //  for(let i=0; i<4; i++){
        //    for(let j=0; j<4; j++){
    //            if(i==0 && j==0){
      //              console.log(i+ " ");
        //        }
          //      if(j==0 && i!=0){
//                 console.log(i+ " ");

//             }
//             if(i==0 && j!=0){
//                 console.log(j+ " ");

//             }
//             if(i!=0 && j!=0){
//                 console.log(this.board.boatBoard[i][j]+ " ");
//             }

//         }

//     }
    
// }

//ORIGINALSETBOARD Must fix with async/awaits
ORIGINALsetBoard(){

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
        alert("HEY! Let's Play");
        alert("Place your Leader's coordinate and hit 'Submit Inputs'");
        console.log("Please place your leader");
 //       this.map();
        document.getElementById("Button").addEventListener("click", function(){
            let tr= document.getElementById("rinput").value;
            let tc= document.getElementById("cinput").value;
            this.board.boatBoard[tr-1][tc-1]=99;
            document.getElementById(tr+","+tc).className="hitLead";
        });

        for(let i=1; i<6; i++){
            let placeFound=false;

            alert("Now Please set boat number:"+i);
            while(placeFound!=true){
       
                if(placeFound=false){
                document.getElementById("Button").addEventListener("click",function(){

                        let trow=document.getElementById("rinput").value;
                        let tcol=document.getElementById("cinput").value;
                    



                        if(this.board.boatBoard[trow-1][tcol-1]!=0){
                            console.log("Enter where boat hasn't been placed ");
                            alert("Boat is already at coordinate chosen or outside bounds");
                
                        }
                        else{
                            console.log("Boat has been placed at"+trow+","+tcol);

                            document.getElementById(trow+","+tcol).className="hit";

                        this.board.boatBoard[trow-1][tcol-1]=i;
                            placeFound=true;
                        }
                });
            }
                
            }

           

        }

    }
    setBoard(){

        let row = Math.floor((Math.random()*4));
        let col = Math.floor((Math.random()*4));
        let boatsSet=1;
        this.board.boatBoard[row][col]=99;
        document.getElementById((row+1)+","+(col+1)).className="hitLead";
        
        while(boatsSet<6){


            let tr = Math.floor((Math.random()*4));
            let tc = Math.floor((Math.random()*4));

           
            if((this.board.boatBoard[tr][tc])==0){
                document.getElementById((tr+1)+","+(tc+1)).className="hit";

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

    hpCheck(){
        return this.hp;
    }

//ORIGINALFIRE Must fix with async/awaits
    ORIGINALfire(Enemy){


        let hitFound=false;

        alert("Pick where you will shoot (Row,Col)");

        while(hitFound!=true){
            document.getElementById("Button").addEventListener("click",function(){
                let trow=document.getElementById("rinput");
                let tcol=document.getElementById("cinput");

                if(this.board.isInBounds(trow,tcol)==true){
                    if(Enemy.board.isHitBoard[trow-1][tcol-1]!=true){

                        Enemy.board.isHitBoard[trow-1][tcol-1]=true;


                        if(Enemy.board.boatBoard[trow-1][tcol-1]==99){
                            this.leaderFound=true;
                            console.log("LEADER HIT!!!");
                            document.getElementById("Background").className="hitLead";
                            document.getElementById("a"+trow+","+tcol).className="hitLead";
                            
                        }

                        else if(Enemy.board.boatBoard[trow-1][tcol-1]!=0){
                            
                            console.log("You have a hit boat " + Enemy.board.boatBoard[trow][tcol] + " at location: "+trow+","+tcol );
                            Enemy.hp=Enemy.hp-1;
                            document.getElementById("Background").className="hit";
                            document.getElementById("a"+trow+","+tcol).className="hit";

                        }


                        
                        else{
                            console.log("You have hit water. Location: "+trow+","+tcol);
                            document.getElementById("Background").className="water";
                            document.getElementById("a"+trow+","+tcol).className="ocean";
                        }

                        hitFound=true;
                        
                    }

                

                }
            });

        }


    }


    fire(Enemy){

        let trow= document.getElementById("rinput").value;
        let tcol= document.getElementById("cinput").value;

        if(Enemy.board.boatBoard[(trow-1)][tcol-1]==99){
            this.leaderFound=true;
            alert("LEADER HIT!!!");
            console.log("LEADER HIT!!!");
            document.getElementById("Background").className="hitLead";
            document.getElementById("a"+trow+","+tcol).className="hitLead";
            
        }

        else if(Enemy.board.boatBoard[trow-1][tcol-1]!=0){
            alert("You have a hit boat " + Enemy.board.boatBoard[trow-1][tcol-1] + " at location: "+trow+","+tcol );
            console.log("You have a hit boat " + Enemy.board.boatBoard[trow-1][tcol-1] + " at location: "+trow+","+tcol );
            Enemy.hp=Enemy.hp-1;
            document.getElementById("Background").className="hit";
            document.getElementById("a"+trow+","+tcol).className="hit";

        }


        
        else{

            alert("You have hit water. Location: "+trow+","+tcol);
            console.log("You have hit water. Location: "+trow+","+tcol);
            document.getElementById("Background").className="water";
            document.getElementById("a"+trow+","+tcol).className="ocean";
        }
        



    }



}