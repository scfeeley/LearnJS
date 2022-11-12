//Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
    //while arr contains sub arrays, reduce arr
    while(arr.some(ele => Array.isArray(ele))) {
      arr = arr.reduce((prev,curr) => {
        //if curr is array add all elements to prev
        if(Array.isArray(curr)){
          for(let i = 0; i < curr.length; i++){
            prev.push(curr[i]);
          }
        //if curr is not array, push to prev
        }else{
          prev.push(curr);
        }
        return prev;
      }, [])
    }
    return arr;
  }