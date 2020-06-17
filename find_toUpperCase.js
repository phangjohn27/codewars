const capitals = function (word) {
	// Write your code here
  let temp1 = word; //string
  let string2Char = temp1.split(''); //String converted to char array
  let temp2HoldAllCapitalIndexes = [];
  
  //console.log(" Testing: " + string2Char);
  
  for(let i = 0; i < string2Char.length; i++){
  
  //nsole.log(" Testing2: " + string2Char.length);
  
    //Correct comparison
    if(string2Char[i] === string2Char[i].toUpperCase()){
       //console.log("testing3: " + string2Char[i])
       //console.log("testing4 " + string2Char.indexOf(string2Char[i]));
        
    temp2HoldAllCapitalIndexes = temp2HoldAllCapitalIndexes.concat(string2Char.indexOf(string2Char[i]));
        
   // console.log("testing4 " + string2Char.indexOf(string2Char[i]));
        
        //console.log("Testing4: " + temp2HoldAllCapitalIndexes);
    }
    
  }
   return temp2HoldAllCapitalIndexes;
};