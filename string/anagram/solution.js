/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false


Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let sDict = {};
  let tDict = {};

  for (let i = 0; i < s.length; i++) {
    if (!sDict[s[i]]) {
      sDict[s[i]] = 1;
    } else {
      sDict[s[i]]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!tDict[t[i]]) {
      tDict[t[i]] = 1;
    } else {
      tDict[t[i]]++;
    }
  }

  for (let letter in sDict) {
    if (!tDict[letter]) {
      return false;
    }
    if (sDict[letter] !== tDict[letter]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram((s = "rat"), (t = "car")));

// calculate if the letters in string s is equal to the letter in string t (order does not matter)
// dictionary for string s and for string t to track the letters in the string and the amount, a dictionary
// "rat" -> {r: 1, a: 1, t: 1}
// "tara" -> {r: 1, a: 2, t: 1}
