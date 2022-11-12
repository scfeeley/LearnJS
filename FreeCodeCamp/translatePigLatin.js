//Translate lowercase word to pig latin
function translatePigLatin(str) {
    //find if word starts with vowel
    let startsVowel = /(^[aeiouAEIOU])/;
    //find the chunk of consonants at beginning of word
    let consts = /(^[^aeiouAEIOU]+)(.+)/;
    //conatins atleast one vowel
    let hasVowel = /.?[aeiouAEIOU]+.?/;
    //if word starts with vowel add 'way' to the end
    if(startsVowel.test(str)){
      return str + 'way';
    //if word contains atleast one vowel
    }if(hasVowel.test(str)){
      //if word starts with consonants and has vowel move consonants + 'ay' to end 
      return str.replace(consts, '$2$1ay')
    //word is all consonants
    }else{
      return str + 'ay'
    }
  }
  