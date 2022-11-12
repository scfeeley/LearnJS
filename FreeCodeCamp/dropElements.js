/*Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
until the function func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.*/
function dropElements(arr, func) {
    return arr.reduce((prev, curr) => {
      if(func(curr)){
        prev.push(curr);
      }else if(prev.length > 0){
        prev.push(curr);
      }
      return prev;
    }, []);
  }