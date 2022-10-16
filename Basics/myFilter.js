/*myFilter
Input: array, function
* Returns a new array with only values from originial 
array that return true when function is applied
Output: array */
function myFilter (arr, funct){
    let output = []; 
    for(let i = 0; i<arr.length;i++){
      if(funct(arr[i])){
        output.push(arr[i]);
      }
    }
    return output;
  }