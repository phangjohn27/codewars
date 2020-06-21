function arrayDiff(a, b) {
  
    //the goal is to have 2 arrays and subtract them.
    //First thought is to have a 2D array
    //Possibly have 1 array store whatever number
    //variables a and b are both arrays.
    
    //ONLY COVER SOME CASES
    //This is my original algorithm that does not test for all case
    //However it will passes certain cases.
    
  //   let aTempHolder = [];
  //   let bTempHolder = [];
    
  //   aTempHolder = a;
  //   bTempHolder = b;
    
  //   bTempHolder.sort();
    
  //   console.log("bTempHolder.sort() " + bTempHolder);
    
  //   if(aTempHolder.length === 0){
      
  //     a = aTempHolder;
  //     return a;
  //   }
  //   if(bTempHolder.length === 0){
      
  //     return a;
  //   }
    
    
  //   for(let i = 0; i < aTempHolder.length; aTempHolder++){
  //     for(let j = 0; j < bTempHolder.length; bTempHolder++){
      
  //         console.log("aTempHolder[i]" + aTempHolder[i]);
  //         console.log("bTempHolder[j]" + bTempHolder[j])
      
  //         if(aTempHolder[i] === bTempHolder[j]){
  //             aTempHolder.shift();
  //             a = aTempHolder;
  //         }
  //     }
  //   }
    
  //   return a;
    
    
    //Does not pass all test cases.
    //1 edge case is what if the numbers are not in order?
    //Get both array a and b in ascending or descending order
    
    
    
    //COVERS ALL CASES
    //This was found and helped by others
  
      let arr = new Array(); //create a new Array object called arr
      
      //traverse through Array a.
      for(let i = 0; i < a.length; i++){
          //As long as numbers that belongs in Array b does not belong in Array A
          //push those numbers into Array arr.
          if(b.indexOf(a[i]) < 0){
            console.log("b.indexOf(a[i] < 0) " + b.indexOf(a[i]));
              arr.push(a[i]);
          }
      }
    
      return arr;


      //An alternative approach to solving Array Differences

      //return a.filter(e => !b.includes(e)); //Approach 1

      //return a.filter(function(x) { return b.indexOf(x) == -1; }); //Approach 2

      // Approach 3
      //  b = new Set(b)
      //  return a.filter(v => !b.has(v))
   
  }