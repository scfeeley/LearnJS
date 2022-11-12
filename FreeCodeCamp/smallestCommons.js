/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.*/
function smallestCommons(arr) {
    //ensure arr is in numerical order
    if(arr[0] > arr[1]){
      arr = [arr[1], arr[0]];
    }
    //build list of nums & max num
    let nums = [];
    let max = 1;
    for(let i = arr[0]; i <= arr[1]; i++){
      nums.push(i);
      max *= i;
    }
    //find the number that is divisible by all nums
    let divisible = false;
    let lcm = arr[1];
    while(!divisible && lcm < max){
      if(nums.every(ele => lcm % ele === 0)){
        return lcm;
      }else{
        lcm++;
      }
    }
    return max;
  }
  