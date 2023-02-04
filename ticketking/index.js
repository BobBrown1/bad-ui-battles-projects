function loadSeats() {
    var tixDiv = document.getElementById("select");
    rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"];
    sections = [102, 103, 104, 105, 201, 202, 204, 205, 206, 207, 208, 209, 301, 303, 304, 305, 306, 307, 308, 309];

    for (var i = 0; i < 9; i++) {
        var options = document.createElement("span")
        options.innerHTML = "Row " + rows[Math.floor(Math.random() * rows.length)] + " Section " + sections[Math.floor(Math.random() * sections.length)] + " - <button onclick='checkout()'>Proceed to Checkout</button><br><br>";
        tixDiv.appendChild(options)
    }
}

function checkout() {
    results = ["This seat has already been taken, please choose another one", "This seat is currently broken.", "This seat has been reserved for someone else.", "You must have a premium subscription to buy this seat.", "You must have a gold platinum subscription to buy this seat."]
    alert(results[Math.floor(Math.random() * results.length)])
}