console.log("------------------------------------------");
console.log("Return all the palindromes in an array");
const str="mom"
const rev=str.split("").reverse().join("");
if(str==rev)
{
    console.log("It is palindromes")
}
else{
    console.log("It is not palindromes")
}

const ar = ['mom', 'dad', 'abcde', 'racecar', 'momom'];
(function(){
function palindrome(arr) {
  return arr.filter((curr, idx, arr) => {
    const splitArr = curr.split('');
    const reversedString = splitArr.reduceRight((prev, curr) => ( prev + curr ), '');
    if (curr === reversedString) return curr;
  })
}
const a=palindrome(ar);
console.log(a);
})();
const palindrome1 =function(arr) {
  return arr.filter((curr, idx, arr) => {
    const splitArr = curr.split('');
    const reversedString = splitArr.reduceRight((prev, curr) => ( prev + curr ), '');
    if (curr === reversedString) return curr;
  })
}
const a=palindrome1(ar);
console.log(a);