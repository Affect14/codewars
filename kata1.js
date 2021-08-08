// This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
//
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	var word = s.split("");
  var result = [];
  for(var i=0; i<word.length; i++){
    result.push(word[i].toUpperCase());
    for(var j=0; j<i; j++)
      result.push(word[i]);
    result.push("-");}
    return result.slice(0,-1).join();
}

console.log(accum("abracadabra"));
