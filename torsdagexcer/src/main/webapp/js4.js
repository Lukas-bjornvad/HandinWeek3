/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
function writeTable(arr){
var out = "<table class='table'>";
  out += "<thead>"
      +"<tr>"
        +"<th>id</th>"
        +"<th>year</th>"
        +"<th>make</th>"
        +"<th>model</th>"
        +"<th>price</th>"
      +"</tr>"
    +"</thead>";
out +=arr.map(function(item){
        return "<tr>"
         +"<td>" + item.id + "</td>"
         +"<td>" + item.year + "</td>"
         +"<td>" + item.make + "</td>"
         +"<td>" + item.model + "</td>"
         +"<td>" + item.price + "</td>"
         +"</tr>";

    
}).join('');
out+="</table>";
document.getElementById("d1").innerHTML = out;
}
writeTable(cars);

document.getElementById("btn").onclick = removeBot;
function removeBot(e) {
    e.preventDefault();
   var carsout =cars.filter(function (item){
       if(item.price < document.getElementById("in").value) return item;
       return 0;
   });
    writeTable(carsout);
}