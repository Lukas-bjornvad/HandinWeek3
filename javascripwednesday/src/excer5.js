/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var dog = {breed:"Golden retriver", age:"5", color:"white", sex:"male"};
var text = "";
var x;
delete dog.breed;
dog.name = "Borkins";
for (x in dog) {
 console.log(x, dog[x]);
} 


function Person(first, last, age){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  // forstår ikke rigtig hvad de vil have her
    function getInfo(){
        return this.firstName +" "+ this.lastName +" "+ this.age;
    }
}
var p = Person("Leroy", "Jenkins", 29);
//console.log(p.getInfo); giver error