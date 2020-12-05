

class Board{

    constructor(){

        this.boatBoard=[];
        this.isHitBoard=[];


        for(let i=0; i<4; i++){

            //keeps track of your ships
            this.boatBoard.push([0,0,0,0]);
            //Keeps track of if your hit at a location
            this.isHitBoard.push([false, false, false, false]);
            //Keeps track of if you have attempted a location
  //          this.attemptLog.push(["","","",""]);
        }
    }
    
//unfinished
    //setBoat(num, row1, col1, row2, col2){
                
      //  if(row1==row2){
           
    //        for(let i=this.smallerInt(col1,col2); i<=this.largerInt(col1,col2); i++){
//
  //              this.boatBoard[row1][i]=num;
    //        }
      //  }
//        else{
  //          for(let i=this.smallerInt(row1,row2); i<=this.largerInt(row1,row2); i++){
    //            this.boatBoard[i][col1]=num;
  //          }
 //       }    

//    }
//can be used for upper level class
    isInBounds(row,col){

        if(((row-1 || col-1) > 3) || ((row-1||col-1)<0)){
            return false;
        }
        else{
            return true;
        }
    }

    //can be used in for loop with temp value being true until it bings false then gets out of while loop
    canBoatBeSetAt(row,col){

        if(this.boatBoard[row-1][col-1]==0){
            return true;
        }
        else{
            return false;
        }
    }

}