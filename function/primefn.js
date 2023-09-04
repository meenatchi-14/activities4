console.log("---------------------------------------------")
console.log("Return all the prime numbers in an array");

//normal function
var numArray = [9,6,4,2,7,5,9,16,49,35,3];
 var sort= numArray.sort(function(a,b){return a - b});
 let pr = [];
function isPrime(sort1) {  
if(sort1< 2) 
{return false;
}
  for (let i=2;i<sort1;i++)
  {
    if(sort1 % i == 0)
    {
    return false;
  }}
  return true;

}
sort.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    pr.push(element);
  }
});
console.log(pr);
isPrime(sort);

//IIFE FUNCTION
(function () {
  let p = [];
  function isPrime(sort1) {
    if (sort1 < 2) {
      return false;
    }
    for (let i = 2; i < sort1; i++) {
      if (sort1 % i == 0) {
        return false;
      }
    }
    return true;
  }
  sort.forEach(function (element) {
    const item = isPrime(element);
    if (item) {
      p.push(element);
    }
  });

  console.log(p);
})();


// anonymous
var p2=[];
const primes=function(sort3){
  if(sort3< 2) return false;

  for (let i=2;i<sort3;i++)
  {
    if(sort3 % i == 0)
    {
    return false;
  }}
  return true;
}; 
sort.forEach(function(element){
  const item=primes(element);
  if(item){
    p2.push(element);
  }
});
console.log(p2)
//ARROW FUNCTION
var p3=[];
const prime2=(sort4)=>{
  if(sort4< 2) return false;

  for (let i=2;i<sort4;i++)
  {
    if(sort4 % i == 0)
    {
    return false;
  }}
  return true;
}; 
sort.forEach(function(element){
  const item=prime2(element);
  if(item){
    p3.push(element);
  }
});
console.log(p3)
