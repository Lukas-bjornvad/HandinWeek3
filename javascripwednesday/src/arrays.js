/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var boys = ["Peter", "Lars", "Ole"];
var girls = ["Janne", "Hanne", "Sanne"];

var all = boys.concat(girls);
console.log(all);
var comma = all.join();
var hyph = all.join("-");

all.push("lone", "Gitte");
all.unshift("Hans", "Kurt");
console.log(all);

all.shift();
all.pop();

all.splice(3,2);
console.log(all);

all.reverse();
console.log(all);

all.sort();
console.log(all);

all.sort(function capitalizedSort(a, b){
    a= a.toLowerCase();
    b= b.toLowerCase();
    if(a===b)return 0;
    return a < b ? -1 :1;
});
console.log(all);

var dum =all.map(function(item, index) {
    return item.toUpperCase();
});
console.log(dum);

var seg = all.filter(function segr(a){
    if(a.startsWith("L")|| a.startsWith("l"))return a;
    return 0;
});
console.log(seg);
