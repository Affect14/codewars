// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
// 'abba' & 'baab' == true
// 'abba' & 'bbaa' == true
// 'abba' & 'abbba' == false
// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. 
// You should return an array of all the anagrams or an empty array if there are none. For example:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
  var sortword = word.split('').sort();
  var anagrsort = [];
  var arranagr = [];
  var k = 0;
    for(var i = 0; i < words.length; i++)
      {
        anagrsort = words[i].split('').sort();
        if (anagrsort.length == sortword.length) {
          for(var j = 0; j < anagrsort.length; j++)
            {
              if(anagrsort[j] != sortword[j]) k = 1;
            }
            if (k == 0) arranagr.push(words[i]);
            else k = 0;
        }
      }
  return arranagr;
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
