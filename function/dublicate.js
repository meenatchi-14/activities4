console.log("--------------------------------------------")
console.log(`Remove duplicates from an array`)
let arr1 = ["apple", "mango", "apple","orange", "mango", "mango"];
///IIFE FUNCTION
(function() {
    function remove(arr1)
    {
    return [...new Set(arr1)];
    }
    console.log(remove(arr1));
})(); 

// anonymous
const removeDuplicates= function(arr) {
    return [...new Set(arr)];
};
  
console.log(removeDuplicates(arr1));