/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.getElementById("container").addEventListener("click", handler);
var disp = document.getElementById("display");
var flag = false;
function handler(e) {
    if (flag) {
        flag = false;
        disp.innerHTML = "";
    }
    if (e.target.innerText != "=")
        disp.innerHTML += e.target.innerText;
    else {
        disp.innerHTML = "=" + eval(disp.innerHTML);
        flag = true;
    }
}

