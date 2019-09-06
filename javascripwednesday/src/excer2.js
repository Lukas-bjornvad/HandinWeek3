/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//1
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Ole"];
var namesless = names.filter(function segr(a){
    if(a.length <= 3)return a;
    return 0;
});
names.forEach(name => console.log(name));

namesless.forEach(namesl => console.log(namesl));
//2
var upper = names.map(function(item, index) {
    return item.toUpperCase();
});
console.log(upper);


//3
var out ="<ul>";
names.forEach(name => out +="<li>"+name+"</li>");
out+="<ul>";
console.log(out);

//4 
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
var carfil= cars;
var out = carfil.filter(function(car){return car.year > 1999;
    });
console.log(out);

 var carfil= cars;
 var nout = carfil.filter(function(car){return car.make === "Volvo";
 });
console.log(nout);
 var carfil= cars;
var vout = carfil.filter(function(car){return car.price < 5000;
    });
console.log(vout);

//5(4a)
var sout ="INSERT INTO cars (id,year,make,model,price) VALUES";
sout += cars.map(function(car){
        return " ( " + car.id + ", "+ car.year + ", " + car.make + ", " + car.model + ", " + car.price + " )";
         }); sout +=";";
console.log(sout);