console.log("--------------------------------------------------");
console.log("Sum of all numbers in an array");
var value=[3,4,6,3,2,1,5,6];
var sum1=0;
var sum2=0;
var sum3=0;
//IIFE FUNCTION
((value)=>{
    for(let i=0;i<value.length;i++)
    {
        sum1 +=value[i];
    }
    console.log(sum1);
})(value);
//ANONYMOUS FUNCTION
const sumfn=function(value){
    for(let i=0;i<value.length;i++)
    {
        sum2 +=value[i];
    }
    console.log(sum2);
};
sumfn(value);
//ARROW FUNCTION
const sumfn1=(value)=>{
    for(let i=0;i<value.length;i++)
    {
        sum3 +=value[i];
    }
    console.log(sum3);
};
sumfn1(value);