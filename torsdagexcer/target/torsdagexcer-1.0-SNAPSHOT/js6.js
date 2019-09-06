/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.getElementById("btn").onclick = function (e) {
    e.preventDefault();
    var inp = document.getElementById("in").value;
    var url = "https://jsonplaceholder.typicode.com/users/" + inp;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                console.log("data", data);
                document.getElementById("d1").innerHTML = "Name: " + data.name + "<br>Phone" + data.phone
                        + "<br><br>Address:"
                        + "<br>Street: " + data.address.street
                        + "<br>City: " + data.address.city
                        + "<br>Zip: " + data.address.zip
                        + "<br>Geo lat/lng: " + data.address.geo.lat + ", " + data.address.geo.lng;

            })
}

document.getElementById("btn1").onclick = function (e) {
    e.preventDefault();
    var url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                console.log("data", data);
                document.getElementById("d1").innerHTML = "<table class='table'>"
                +"<thead>"
                        + "<tr>"
                        + "<th>Name</th>"
                        + "<th>Phone</th>"
                        + "</tr>"
                        + "</thead>"
                        + data.map(function (item) {
                            return "<tr>"
                                    + "<td>" + item.name + "</td>"
                                    + "<td>" + item.phone + "</td>"
                                    + "</tr>";
                        }).join('')
                        + "</table>";
            })
}

