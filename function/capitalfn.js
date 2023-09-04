console.log("--------------------------------------------------");
console.log("Convert all the strings to title caps in a string array");
const name=['meena','krishna','janani','kalpu','baby'];
var word1=[];
var word2=[];
var word3=[];

//IIFE FUNCTION

 (function() {
    for (let i = 0; i < name.length; i++) {
        const firstLetter = name[i].split("")[0].toUpperCase();
        const rest = name[i].slice(1).toLowerCase();
        name[i] = firstLetter + rest;
        word1.push(name[i]);
      }
      console.log(word1);
 })();
 //anonymous
 const anon=function(name){
    for (let i = 0; i < name.length; i++) {
        const firstLetter = name[i].split("")[0].toUpperCase();
        const rest = name[i].slice(1).toLowerCase();
        name[i] = firstLetter + rest;
        word2.push(name[i]);
      }
      console.log(word2);
 };
 anon(name);
//arrow

arrow=(name)=>{
    for(let i=0;i<name.length;i++){
    
    const frist =name[i].split("")[0].toUpperCase();
    const last=name[i].slice(1).toLowerCase();
    name[i] = frist + last;
    word3.push(name[i]);
    }
    console.log(word3); 
};
arrow(name);
