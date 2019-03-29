/*
Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
Words will be separated by only one space. 
 */

 function LetterCapitalize(str){
    return str.toLowerCase().split(' ').map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
         }).join(' ');
 }
 
 console.log(LetterCapitalize("hello coderbyte"));