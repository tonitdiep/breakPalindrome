
// Given a palindromic string of lowercase English letters palindrome, replace exactly one character with any lowercase English letter so that the resulting string is not a palindrome and that it is the lexicographically smallest one possible.


/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(str = palindrome) {
    if (str.length <= 1) return '';
    for (let i = 0 ; i < Math.floor(str.length / 2); i++){
            console.log('str status', str)
        if(str[i] != 'a'){
            return str.substr(0, i) + 'a' + str.substr(i + 1)
        }
    }

// console.log(str.length == 1)
//break the palindrome
//Math.floor(something/2)
    return str.substr(0, str.length - 1) + 'b'  
                //return resulting string, not a plaindrome
                //it is lexicongraphically smallest one possible
};
)