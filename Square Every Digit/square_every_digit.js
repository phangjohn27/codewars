function squareDigits(num){
    //may the code be with you
    
    //My method sucks.....
    
  //   let numArray = [];
  //   let tempStore = [];
  //   let squareEveryDigit = [];
  //   let newNum = 0;
  //   numArray = num.toString().split('');
  //   //nsole.log("numArray is " + numArray);
    
  //   for(let i = 0; i < numArray.length; i++){
  //     tempStore.push(Math.pow(numArray[i], 2));
  //     squareEveryDigit = tempStore;
  //     newNum = squareEveryDigit;
  //   }
    
  //   console.log("newNum is " + newNum);
  
  
  //Better Method
  
      let string = num.toString(); //convert to string;
      let results = [];
      for (let i = 0; i < string.length; i++){
          results[i] = string[i] * string[i];
      }
      return Number(results.join(''));
  
  }