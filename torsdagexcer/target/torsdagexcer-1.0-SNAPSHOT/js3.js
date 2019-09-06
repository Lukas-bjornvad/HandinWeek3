/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Ole"];

function loadNames() {
    var out = "<ul>";
    for (i = 0; i < names.length; i++) {
        out += "<li>" + names[i] + "</li>"
    }
    ;
    out += "<ul>";

    document.getElementById("d1").innerHTML = out;
}
loadNames();
document.getElementById("btn").onclick = click;
var inp = document.getElementById("in");
function click(e) {
    e.preventDefault();
    names.push(inp.value);
    loadNames();

}
document.getElementById("btnb").onclick = removeBot;
function removeBot(e) {
    e.preventDefault();
    names.pop();
    loadNames();
}
document.getElementById("btnt").onclick = removeTop;
function removeTop(e) {
    e.preventDefault();
    names.shift();
    loadNames();
}
   