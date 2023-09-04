console.log("------------------------------------------");
console.log("Rotate an array by k times");

const rotateArray1 = function(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    return nums;
  }
  const rotateArray2 = function(nums, k) {
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
  var array=[1,2,3,4,5,6];
  var n=2;
 console.log(rotateArray2(array,n));
