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

//class and template literal
//default parameter's
class student{
    constructor(name="sirisha",id=505,course="B.tech",branch="cse"){
        this.stuname=name;
        this.stuid=id;
        this.stucrs=course;
        this.stubranch=branch;
        this.Details();
    }
    Details(){
        return `student name:${this.stuname}   
student Id:${this.stuid}
student branch:${this.stubranch}
student Course:${this.stucrs}`;
    }
}
obj=new student();
console.log(obj);
console.log(obj.Details());



//spread operator
var arr1=[1,4,6,7];
var arr2=[3,6,44,...arr1];
console.log(arr2);

//rest operator
let add=(a,...args)=>{
    let result=0;
    for(i of args)
    {
           result+=i;      
    }
    console.log(result);
}
add(1,3,4,5);


//destructing array
var nam=["sirisha","shivangi","durgarao","mohsin"];
var [nameA,nameB,nameC,nameD]=nam;
console.log("Her name is:"+nameA);

//destructing object
var object={
    name:'shivangi',
    age:'21'
};
var {name,age}=object;
console.log("student name: "+name);
console.log("student age: "+age);

var person1={
    name:'justin bieber'
};
var person2={
    name:'krystel'
};
var {name:pname1}=person1;
var {name:pname2}=person2;
console.log("Singer : "+pname1);
console.log(pname2);