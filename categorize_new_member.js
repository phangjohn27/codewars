function openOrSenior(data){
    // ...
    
    //console.log("Testing: " + data);
    //console.log("Testing: " + data.length);
  //   let storedData = 0;
  //   for(let i = 0; i < data.length; i++){
    
  //     storedData = data.slice(i, i + 1);
      
  //     console.log("Testing1: " + storedData);
      
  //       console.log("Testing3: " + storedData.length);
  //       for(let j = 0; j < storedData.length; j++){
        
  //           //console.log("storedData[i] is " + storedData[i] + " and " + " storedData[i  + 1] is " + storedData[i + 1]);
  //           if(storedData[i] >= 55 && storedData[i  + 1] > 7){
                  
  //                 return 'senior';
  //           }else{
  //                 return 'open';
  //           }
  //       }
      
      
  //   }
  
  
  
  
  
    // ...
    
    //console.log("Testing: " + data);
    //console.log("Testing: " + data.length);
  //   let storedData = [];
  //   let arr = [];
  //   let counter = 0;
  //   //console.log("Testing: " + data.length);
  //   for(let i = 0; i < data.length; i++){
      
  //     storedData = data.shift();
  //     //console.log("Testing1: " + storedData);
  //     //console.log("Testing2: " + storedData.length);
      
  //       for(let j = 0; j < storedData.length; j++){
        
  //           if(storedData[j] >= 55 && storedData[j + 1] > 7){
            
  //             arr.push('Senior');
  //             return arr;
  //           }else{
  //             arr.push('Open');
  //             return arr;
  //           }
  //       }
      
  //   }
  
  
  
    let getOpenOrSenior = [];
    for(i=0; i<data.length; i++){
      if(data[i][0]>=55 && data[i][1]>7){
        getOpenOrSenior.push("Senior");
      }else{
        getOpenOrSenior.push("Open");
      }
    }
    return getOpenOrSenior;
  
  }