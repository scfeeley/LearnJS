function myFilter (arr, funct){
    let output = []; 
    for(let i = 0; i<arr.length;i++){
      if(funct(arr[i])){
        output.push(arr[i]);
      }
    }
    return output;
  }