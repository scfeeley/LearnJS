/*Given a positive integer num, return the sum of all odd Fibonacci numbers 
that are less than or equal to num.*/
function sumFibs(num) {
    //if num is 1, return 2
    if(num === 1){
      return 2;
    }
    //initialize sum and start at 2 
    let prev = 1;
    let curr = 2;
    let sum = 2; 
    //sum only odd fibonnaci numbers
    while(curr <= num){
      if(curr % 2 === 1){
        sum += curr; 
      }
      curr += prev;
      prev = curr - prev;
    }
    return sum;
  }