/*Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.*/
function convertHTML(str) {
    //create a list of regexps and replacements
    let regex = [[/&/g, '&amp;'], [/>/g, '&gt;'],
    [/</g, '&lt;'], [/"/g, '&quot;'], [/'/g, '&apos;']];
    //iterate over list executing replacements
    for(let i = 0; i < regex.length; i++){
      str = str.replace(regex[i][0], regex[i][1]);
    }
    return str;
  }