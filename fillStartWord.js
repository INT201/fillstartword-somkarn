const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if(word == null){
    return undefined
  }
  else if(word == undefined){
    return undefined
  }
 else if(startWord == 'first'){
  return word
 }
else {
  return startWord+word
}
}
module.exports = fillStartWord
