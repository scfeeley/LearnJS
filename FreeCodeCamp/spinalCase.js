//Translate string to spinal case
function spinalCase(str) {
    //find all instances of lowercase letter followed by uppercase letter
    let lowerUpper = /([a-z])([A-Z])/g
    //find all instances of non-alphanumeric characters or underscores
    let spaceUnderScore = /([\W]|_+)/g
    //replace lower-upper instances with lowercase letter 'space' uppercase letter
    let lowerUpperToSpace = str.replace(lowerUpper, '$1 $2')
    //replace all non-alphanumeric or underscores with a dash
    let spinal = lowerUpperToSpace.replace(spaceUnderScore, '-').toLowerCase();
    return spinal;
  }