// Define funtion to get calculated Age
function getDOB() {
    // Get the input values
    var dob = new Date(document.getElementById("inputDob").value);
    var currentDate = new Date(document.getElementById("cdate").value);

    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDob = dob.toLocaleDateString('tr-TR', options);
    var formattedCurrentDate = currentDate.toLocaleDateString('tr-TR', options);

    // Calculate the difference in months
    var diffMonths = (currentDate.getFullYear() - dob.getFullYear()) * 12 + currentDate.getMonth() - dob.getMonth();

    // Display the age
    document.getElementById("currentAge").innerHTML = "Çocuğun yaşı:  " + Math.floor(diffMonths / 12) + " " + "yıl " + " " + diffMonths % 12 + " ay ve " + " " + currentDate.getDate() + " günlük." + "<br/>";
    if (diffMonths <= 0) {
        alert('en acil zamanda Hepatit B 1 doz aşısını yaptırınız');
        displayVaccinationReminder(0, dob, "Hepatit B 1 doz ");
    }
    if (diffMonths <= 1) {
        displayVaccinationReminder(1, dob, "Hepatit B 2 doz ");
    }
    if (diffMonths <= 2) {
        displayVaccinationReminder(2, dob, "BCG(Verem) ");
    }
    if (diffMonths <= 4) {
        displayVaccinationReminder(4, dob, "DABT-İPA-Hib, KPA ");
    }
    if (diffMonths <= 6) {
        displayVaccinationReminder(6, dob, "Hepatit B 2 doz, DABT-İPA-Hib 2 doz, OPA 1 doz ");
    }
    if (diffMonths <= 9) {
        displayVaccinationReminder(9, dob, "KKK İlave doz ");
    }
    if (diffMonths <= 12) {
        displayVaccinationReminder(12, dob, "KPA Rapel, KKK 1 doz vaccinations ");
    }
    if (diffMonths <= 18) {
        displayVaccinationReminder(18, dob, "DABT-İPA-Hib Rapel, OPA 2 doz, Hepatit A 1 doz ");
    }
    if (diffMonths <= 24) {
        displayVaccinationReminder(24, dob, "Hepatit A 2 doz ");
    }
    if (diffMonths <= 48) {
        displayVaccinationReminder(48, dob, "KKK 2 doz, DABT-İPA 1 doz ");
    }
    if (diffMonths <= 156) {
        displayVaccinationReminder(156, dob, "Td Rapel ");
    }
}

function displayVaccinationReminder(months, dob, vaccineName) {
    // Calculate the date for the vaccination reminder
    var vaccinationDate = new Date(dob);
    vaccinationDate.setMonth(vaccinationDate.getMonth() + months);

    // Format the date to Turkish
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var formattedVaccinationDate = vaccinationDate.toLocaleDateString('tr-TR', options);

    // Display the reminder
    document.getElementById("currentAge").innerHTML += "<br/>" + "**" + formattedVaccinationDate + " tarihinde " + vaccineName + "aşısını yaptırmalısınız" + "**" + "<br/>";
}

// Function to provide default date value
function currentDate() {
	console.log(formatted());
	let d = document.getElementById("cdate");
	d.value = formatted();
}

function formatted(date = new Date()) {
	return [
		date.getFullYear(),
		short(date.getMonth() + 1),
		short(date.getDate()),
	].join("-");
}
function short(num) {
	return num.toString().padStart(2, "0");
}

// Calling current date function to set default date value
currentDate();
