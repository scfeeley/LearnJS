/*myMap 
Input: array, function
Applies the function to each element of array
Pushes result to output array
Returns output array
Output: array*/
function myMap(arr, funct){
    let output = [];
    for(let i = 0; i<arr.length;i++){
        output.push(funct(arr[i]));
    }
    return output;
}

