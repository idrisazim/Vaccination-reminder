function getDOB() {
  // Get the input values
  var dob = new Date(document.getElementById("inputDob").value);
  var currentDate = new Date(document.getElementById("cdate").value);

  // Calculate the difference in days
  var diffDays = Math.floor((currentDate - dob) / (1000 * 60 * 60 * 24));

  // Display the age
  document.getElementById("currentAge").innerHTML =
    "Çocuğun yaşı:  " +
    Math.floor(diffDays / 365) +
    " yıl " +
    Math.floor((diffDays % 365) / 30) +
    " ay ve " +
    (diffDays % 30) +
    " gün." +
    "<br/>";

  // Define vaccine schedule in days
  var vaccineSchedule = {
    0: "Hepatit B 1 doz",
    30: "Hepatit B 2 doz",
    60: "BCG(Verem)",
    120: "DABT-İPA-Hib, KPA",
    180: "Hepatit B 2 doz, DABT-İPA-Hib 2 doz, OPA 1 doz",
    270: "KKK İlave doz",
    365: "KPA Rapel, KKK 1 doz",
    540: "DABT-İPA-Hib Rapel, OPA 2 doz, Hepatit A 1 doz",
    720: "Hepatit A 2 doz",
    1440: "KKK 2 doz, DABT-İPA 1 doz",
    4680: "Td Rapel",
  };

  // Display the reminders based on the schedule
  for (var days in vaccineSchedule) {
    if (diffDays <= days) {
        if (diffDays <= 5){
      alert("En acil zamanda " + vaccineSchedule[days] + " aşısını yaptırınız");}
      displayVaccinationReminder(days, dob, vaccineSchedule[days]);
      break; // Exit the loop after finding the first reminder
    }
  }
}

function getAllShots() {
  // Get the input values
  var dob = new Date(document.getElementById("inputDob").value);
  var currentDate = new Date(document.getElementById("cdate").value);

  var options = { year: "numeric", month: "long", day: "numeric" };
  var formattedDob = dob.toLocaleDateString("tr-TR", options);
  var formattedCurrentDate = currentDate.toLocaleDateString("tr-TR", options);

  // Calculate the difference in months
  var diffMonths =
    (currentDate.getFullYear() - dob.getFullYear()) * 12 +
    currentDate.getMonth() -
    dob.getMonth();

  // Display the age
  document.getElementById("currentAge").innerHTML =
    "Çocuğun yaşı:  " +
    Math.floor(diffMonths / 12) +
    " " +
    "yıl " +
    " " +
    (diffMonths % 12) +
    " ay ve " +
    " " +
    currentDate.getDate() +
    " günlük." +
    "<br/>";
  if (diffMonths <= 0) {
    alert("en acil zamanda Hepatit B 1 doz aşısını yaptırınız");
    displayFutureVaccinationReminder(0, dob, "Hepatit B 1 doz ");
  }
  if (diffMonths <= 1) {
    displayFutureVaccinationReminder(1, dob, "Hepatit B 2 doz ");
  }
  if (diffMonths <= 2) {
    displayFutureVaccinationReminder(2, dob, "BCG(Verem) ");
  }
  if (diffMonths <= 4) {
    displayFutureVaccinationReminder(4, dob, "DABT-İPA-Hib, KPA ");
  }
  if (diffMonths <= 6) {
    displayFutureVaccinationReminder(
      6,
      dob,
      "Hepatit B 2 doz, DABT-İPA-Hib 2 doz, OPA 1 doz "
    );
  }
  if (diffMonths <= 9) {
    displayFutureVaccinationReminder(9, dob, "KKK İlave doz ");
  }
  if (diffMonths <= 12) {
    displayFutureVaccinationReminder(12, dob, "KPA Rapel, KKK 1 doz ");
  }
  if (diffMonths <= 18) {
    displayFutureVaccinationReminder(
      18,
      dob,
      "DABT-İPA-Hib Rapel, OPA 2 doz, Hepatit A 1 doz "
    );
  }
  if (diffMonths <= 24) {
    displayFutureVaccinationReminder(24, dob, "Hepatit A 2 doz ");
  }
  if (diffMonths <= 48) {
    displayFutureVaccinationReminder(48, dob, "KKK 2 doz, DABT-İPA 1 doz ");
  }
  if (diffMonths <= 156) {
    displayFutureVaccinationReminder(156, dob, "Td Rapel ");
  }
}

function displayVaccinationReminder(days, dob, vaccineName) {
  // Calculate the date for the vaccination reminder
  var vaccinationDate = new Date(dob);
  vaccinationDate.setDate(vaccinationDate.getDate() + parseInt(days));

  // Format the date to Turkish
  var options = { year: "numeric", month: "long", day: "numeric" };
  var formattedVaccinationDate = vaccinationDate.toLocaleDateString(
    "tr-TR",
    options
  );

  // Display the reminder if the vaccination date is in the future
  if (vaccinationDate > new Date()) {
    document.getElementById("currentAge").innerHTML +=
      "<br/>" +
      "**" +
      formattedVaccinationDate +
      " tarihinde " +
      vaccineName +
      " aşısını yaptırmalısınız" +
      "**" +
      "<br/>";
  }
}

function displayFutureVaccinationReminder(months, dob, vaccineName) {
    // Calculate the date for the vaccination reminder
    var vaccinationDate = new Date(dob);
    vaccinationDate.setMonth(vaccinationDate.getMonth() + months);
  
    // Format the date to Turkish
    var options = { year: "numeric", month: "long", day: "numeric" };
    var formattedVaccinationDate = vaccinationDate.toLocaleDateString(
      "tr-TR",
      options
    );
  
    // Display the reminder
    document.getElementById("currentAge").innerHTML +=
      "<br/>" +
      "**" +
      formattedVaccinationDate +
      " tarihinde " +
      vaccineName +
      "aşısını yaptırmalısınız" +
      "**" +
      "<br/>";
  }


function age() {
  var dob = new Date(document.getElementById("inputDob").value);
  var currentDate = new Date(document.getElementById("cdate").value);

  var options = { year: "numeric", month: "long", day: "numeric" };
  var formattedDob = dob.toLocaleDateString("tr-TR", options);
  var formattedCurrentDate = currentDate.toLocaleDateString("tr-TR", options);

  // Calculate the difference in months
  var diffMonths =
    (currentDate.getFullYear() - dob.getFullYear()) * 12 +
    currentDate.getMonth() -
    dob.getMonth();

  // Display the age
  document.getElementById("currentAge").innerHTML =
    "Çocuğun yaşı:  " +
    Math.floor(diffMonths / 12) +
    " " +
    "yıl " +
    " " +
    (diffMonths % 12) +
    " ay ve " +
    " " +
    currentDate.getDate() +
    " günlük." +
    "<br/>";
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
