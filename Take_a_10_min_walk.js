function isValidWalk(walk) {
    //insert brilliant code here
    
    // We do not need to check if the Array is empty because: 
    // Note: you will always receive a valid array containing a random assortment of direction letters 
    // 'n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
    
    
    //case 1: check for length
    //if 1 block === 1min assume n,s,w,e moving 1 direction is 1 block so that's 1min.
    //walk is an array.
    
    //console.log("Testing: " + walk.length);
  //   if(walk.length === 10){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
    
    //NEW CODE
    
    let counter1 = 0; // n
    let counter2 = 0; // s
    let counter3 = 0; // e
    let counter4 = 0; // w
    
    for(let i = 0; i < walk.length; i++){
      
      //nsole.log("Testing: " + walk[i]);
      //nsole.log(" ");
      
      if(walk[i] === 'n'){
        counter1++;
        //console.log("counter1++: " + ++counter1);
      }else if(walk[i] === 's'){
        counter2++;
        //console.log("counter2++: " + ++counter2);
      }else if(walk[i] === 'e'){
        counter3++;
        //console.log("counter3++: " + ++counter3);
      }else if(walk[i] === 'w'){
        counter4++;
        //console.log("counter4++: " + ++counter4);
      }
    }
    
    //console.log("counter1 is " + counter1 + " and " + " counter2 is " + counter2);
    
    if(walk.length === 10 && counter1 === counter2 && counter3 === counter4){
      
      return true;
      
    }else{
    
      return false;
      
    }
    
  }
   