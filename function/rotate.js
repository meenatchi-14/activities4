console.log("------------------------------------------");
console.log("Rotate an array by k times");
var array=[1,2,3,4,5,6];
var n=2;
(function(){                                 // IIFE FUNCTION
  const rotateArray1 = function(nums, k) {   // anonymous function
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    return nums;
  }
  const rotateArray2 = function(nums, k) {   // anonymous function
    function reverse(arr, start, end) {
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
    k %= nums.length;
    reverse(nums, 0, (nums.length - 1));
    reverse(nums, 0, (k - 1));
    reverse(nums, k, (nums.length - 1));
    return nums;
  }
 console.log(rotateArray2(array,n));
})();
