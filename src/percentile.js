function percentile() {
    // Get input values
    var dob = new Date(document.getElementById("inputDob").value);
    var weight = parseFloat(document.getElementById("kilo").value);
    var height = parseFloat(document.getElementById("height").value);
    var headCircumference = parseFloat(document.getElementById("head").value);
    var gender = document.getElementById("gender").value;

    // Perform percentile calculation here
    // This section will vary depending on your specific formula for calculating percentile

    // Example calculation (replace this with your actual calculation)
    var percentile = Math.random() * 100; // Just a random value for demonstration

    // Display result
    document.getElementById("percentileResult").innerHTML = "Percentile: " + percentile.toFixed(2);
}
