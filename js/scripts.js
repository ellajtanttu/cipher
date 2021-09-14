$(document).ready(function() {

  const userSent = prompt("tell me a sentence that ends with a period:");
  console.log("userSent = " + userSent);
  
  const userCap = userSent.charAt(0).toUpperCase() + userSent.slice(1);
  console.log("userCap = " + userCap);
  
  function trimExtra() {
    return userCap.replaceAll("."," ").trim();
  }
  
  const noPeriod = trimExtra(userCap);
  console.log("noPeriod = " + noPeriod);
  
  const sentLength = parseInt(noPeriod.length) - 1;
  console.log("sentLength = " + sentLength);
  
  
  function capEnd() {
    return noPeriod.charAt(sentLength).toUpperCase();
  }
  
  const lastLetter = capEnd(noPeriod);
  console.log("lastLetter = " + lastLetter);
  
  function finalSentence(string) {
    return string.substring(0, sentLength) + lastLetter + ".";
  }
  
  const firstLastCaps = finalSentence(noPeriod);
  console.log("firstLastCaps = " + firstLastCaps);

  function reverseLets() {
    
}  

});


