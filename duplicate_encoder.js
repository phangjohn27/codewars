function duplicateEncode(word){
    // ...
    
    //Totally wrong
//     console.log("word contain " + word);
//     let encoder = [];
    
//     for(let i = 0; i <= word.length; i++){
//       for(let j = i + 1; j <= word.length; j++){
      
//       console.log("word[j] " + word[j]);
//       console.log(" ");
//       console.log("word[i] " + word[i]);
//           if(word[j] === word[i]){
//               encoder.push(")");
//           }else{
//               encoder.push("(");
//           }
//       }
//     }
    
//     return encoder.toString();

    let unique = '';
    word = word.toLowerCase(); //completely get all characters to lowercase or uppercase doesn't matter. your choice
    for(let i = 0; i < word.length; i++){
    
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){

            unique += '(';
            
        }
        else{
            unique += ')';
        }
    }
    return unique;
}
