/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//    var styler = document.getElementsByTagName('div');
//    for(i = 0; i < styler.length; i++) {
//
//    styler[i].style.backgroundColor = 'yellow';
//    }
//    
document.getElementById("btn").onclick = click;
    function click(){
       var divs = document.getElementsByTagName('div');
       divs[0].style.backgroundColor = "red";
       divs[1].style.backgroundColor = "blue";
       divs[2].style.backgroundColor = "green";
   }