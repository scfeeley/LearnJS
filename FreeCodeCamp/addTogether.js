/*Create a function that sums two arguments together. 
If only one argument is provided, then return a function that expects one argument and returns the sum.
Calling this returned function with a single argument will then return the sum
If either argument isn't a valid number, return undefined*/
function addTogether(...args) {
    let first = args[0];
    let second = args[1];
    //if the first argument is a number
    if(typeof(first) === 'number'){
      //if only one argument, return function
      if(args.length === 1){
        function newFunc(num){
          if(typeof(num) === 'number'){
            return num + first;
          }
        }
        return newFunc;
      //if second argument is number
      }else if(typeof(second) === 'number'){
        return first + second;
      }
    }
  }