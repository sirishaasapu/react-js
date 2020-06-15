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
