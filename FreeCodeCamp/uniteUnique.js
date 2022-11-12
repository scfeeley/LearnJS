/*Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/
function uniteUnique(...arr) {
    return arr.reduce((prev, curr) => {
      for(let i = 0; i < curr.length; i++){
        let index = prev.indexOf(curr[i])
        if(index === -1){
          prev.push(curr[i]);
        }
      }
      return prev;
    }, []);
  }