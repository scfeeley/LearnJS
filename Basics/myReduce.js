/*myReduce
Input: array, function, initial value
* If initial value is not given, uses first element of array
and iteration starts at 2nd element
* Returns single value by performing function on the current
element with the return value from the previous element
Output: array */
function myReduce(arr, funct, initial) {
    //if not initial val passed, use 1st val in array as initial 
    let result;
    if(initial == undefined){
      result = arr[0];
     //if a value is passed, perform function on initial and 1st val in array
    }else{
      result = funct(initial, arr[0]);
    }
    for (let i = 1; i < arr.length; i++){
      result = funct(result, arr[i]);
    }
    return result;
  }
  
//   console.log(myReduce([3,2,3,4], (a,b) => a*b,8));
//   console.log([3,2,3,4].reduce((a,b) =>a*b,8));