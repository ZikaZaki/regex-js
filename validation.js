/* ***********META CHARACTERS****************
* [abc] A single character of a...
* [^abc] A character except a..
* [a-z] Matches any characters between a and z, including a and z.
* [^a-z] Matches any characters except those in the range a-z.
* [a-zA-Z] Matches any characters between a-z or A-Z. You can combine as much as you please.
* . Matches any character other than newline (or including line terminators with the /s flag). Example: (/.+/
* a|b Matches either what is before the | or what is after it - in this case `a` or `b`. You can use alternates locally as part of a
  capturing/non-capturing group. For example: /I love (?:cats|dogs) but hate snakes/
*/
/* ***********SPECIAL CHARACTERS****************
* '+' The one-or-many quantifier
* '\' The escape character
* '[]' The character set
* '[^]' The negate symbol in a character set
*  '^' Asserts position at start of the string 
* '?' The zero-or-one quantifier (makes a preceding char optional)
* '.' Any character whatsoever (except the newline character)
* '*' The 0-or-more quantifier (a bit like +)
*/

// Validate script here
var reg = /[a-z]/ig;
var regex = new RegEx(/[a-z]/, "i");

// DOM inputs
const inputs = document.querySelectorAll("input");

