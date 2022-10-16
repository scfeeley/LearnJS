function myMap(arr, funct){
    let output = [];
    for(let i = 0; i<arr.length;i++){
        output.push(funct(arr[i]));
    }
    return output;
}
