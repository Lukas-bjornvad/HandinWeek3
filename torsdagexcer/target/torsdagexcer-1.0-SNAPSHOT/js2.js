/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.getElementById("outer").addEventListener("click", handler);
var p =document.getElementById("par");
function handler(e){

  p.innerHTML ="Hi from " + this.id+" Hi from " + e.target.id;
}

      

