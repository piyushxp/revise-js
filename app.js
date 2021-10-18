var a=10,name="jay",arr=[1,2,3],obj={},b=null,c=undefined;
console.log(typeof a);
console.log(typeof name);
console.log(typeof arr);
console.log(typeof obj);
console.log(typeof b);
console.log(typeof c);

console.log(arr instanceof Array);
console.log(obj instanceof Object);


function Regular(){
  this.name="jay"
}

class Reg{}

console.log(typeof Regular,"typeof function");
console.log(typeof Reg,"typeof class");

const newObj = new Regular();
const newClassObj = new Reg();
console.log(newObj 