/*Rewrite sumPrimes so it returns the sum of all prime numbers 
that are less than or equal to num.*/
function sumPrimes(num) {
    let sum = 0;
    for(let i = 2; i <= num; i++){
      let isPrime = true;
      for(let j = 2; j < i; j++){
        if(i % j === 0){
          isPrime = false;
          break;
        }
      }
      if(isPrime){
        sum += i;
      }
    }
    return sum;
  }
  