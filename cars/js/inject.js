let table = document.getElementById("cars");
fetch("../data/carsData.json").then(e => e.json()).then(function(e) {
    for (let t in e) {
        if (t >= 5){
            break;
        }else {
            let n = document.createElement("tr"),
            d = document.createElement("td"),
            a = document.createElement("td"),
            c = document.createElement("td"),
            l = document.createElement("td");
        (d.innerHTML = e[t].Name),
        (a.innerHTML = e[t].Horsepower),
        (c.innerHTML = e[t].Year),
        (l.innerHTML = e[t].Origin),
        n.appendChild(d),
            n.appendChild(a),
            n.appendChild(c),
            n.appendChild(l),
            table.appendChild(n);
        }
    }
}).catch(e => console.log(e));
