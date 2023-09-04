console.log("Print odd numbers in an array");

const arr=[1,2,3,4,5,6,7,8]
//IIFE FUNCTION
var v1=[];

(function () 
 {
    for (let i = 0; i < arr.length; i++) 
    {
      if (arr[i] % 2 != 0) { 
         v1.push(arr[i]);
      }
    }console.log(v1);
})();
// anonymous
var v2=[];
const printOddAn = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        v2.push(arr[i]); 
      }
    }console.log(v2);
  };
  printOddAn(arr);

  // arrow
  var v3=[];
  const printOddARR = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        v3.push(arr[i]);
      }
    }console.log(v3);
  };
  printOddARR(arr);

