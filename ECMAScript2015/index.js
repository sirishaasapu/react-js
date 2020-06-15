// anonymous function
let names=function(firstName,lastName){
        return "fullName:"+firstName+" "+lastName;
}
console.log(names("sirisha","asapu"));

// arrow function
let fullnames=(a,b)=>{
    return "sum of given numbers:"+(a+b);
}
console.info(fullnames(2,3));

//Array methods
//map
var arr1=["shivangi","sirisha","krystel"];
arr1.map(function(i){
    console.log(i);
})

//map using arrow function
var arr1=["mohsin","shivangi","sirisha","krystel"];
arr1.map(function(i){
    console.log(i);
   
})
arr1.map(function(i,index){
    console.log(index);
})

//find
var arra=[25,65,53,43,23,222,3];
var divisibleByTwo=arra.find(divisible);

function divisible(value,index,array){
    return value%5==0
}
console.log(divisibleByTwo);

//filter 

var array=[1,3,5,52,53,222,43,23];
var divisibleByThree=array.filter(divisible);

function divisible(value,index,arr){
    return value%3==0;
}
document.write("Divisible By 3 : "+divisibleByThree);
 
//findIndex
// var arra=[25,53,222,43,23];
var divisibleByTwo=arra.findIndex(divisible);

function divisible(value,index,array){
    return value%2==0;
}
console.log(divisibleByTwo);
