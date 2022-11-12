/*Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.*/
function fearNotLetter(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let start = alphabet.indexOf(str[0]);
    for(let i = 0; i < str.length; i++){
      let letter = alphabet[i + start];
      if(letter !== str[i]){
        return letter;
      }
    }
  }