//Return an English translated sentence of the passed binary string.
function binaryAgent(str) {
    let binaryList = str.split(' ');
    let result = '';
    binaryList.forEach(ele => {
      //convert binary to decimal
      let decimal = parseInt(ele, 2);
      //convert decimal to character
      result += String.fromCharCode(decimal)
    })
    return result;
  }