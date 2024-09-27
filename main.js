document.getElementById("checkTimeBtn").onclick = function() {
    var time = prompt("Please Enter Time in HH:MM Format (e.g., 14:30):");

    // Check if the input matches the HH:MM format
    var parts = time.split(":");
    var hour = parseInt(parts[0]);

    if (hour >= 12 && hour < 24) {
        alert("It's PM");
    } else if (hour >= 0 && hour < 12) {
        alert("It's AM");
    } else {
        alert("Invalid time! Enter a correct HH:MM format.");
    }
};