/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Person(name){
  this.name = name;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+this.name);  //Explain this
   /*setTimeout virker på den måde at den isolere det der er defineret
    * det bliver kørt(executed) seperart for den generelle kontext 
    * det gør at den ikke har adgang til "this" functionen
    * */
  },2000);
}
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: "+ name);  //Explain this
/*
 * Name er blevet sat via this, det gør at den er gemt på det globale object
 * hvilket betyder aller metoder/funktioner har adgang til det.
 */

var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
console.log("I'm global: "+ name);  //What’s different ?
//problem dukkeer op efter den tidligere person er ud commenteret
// porblemet opstår fordi når functionen bliver forbundet til et variable, bliver informationer
// ikke længere opbevaret på global

//function Person(name){
//  this.name = name;
//  var self = this;
//  console.log("Name: "+ this.name);
//  setTimeout(function(){
//    console.log("Hi  "+self.name);  
//  },2000);
//}
//
//function Person(name){
//  this.name = name;  
//  console.log("Name: "+ this.name);
//  setTimeout(function(){
//    console.log("Hi  "+this.name);  
//  }.bind(this),2000);
//}
//to andre eksempler der skal kunne tage sig af problemet
