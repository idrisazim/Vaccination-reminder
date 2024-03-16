// Define funtion to get calculated Age
function getDOB() {
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
    displayVaccinationReminder(
      6,
      dob,
      "Hepatit B 2 doz, DABT-İPA-Hib 2 doz, OPA 1 doz "
    );
  }
  if (diffMonths <= 9) {
    displayVaccinationReminder(9, dob, "KKK İlave doz ");
  }
  if (diffMonths <= 12) {
    displayVaccinationReminder(12, dob, "KPA Rapel, KKK 1 doz ");
  }
  if (diffMonths <= 18) {
    displayVaccinationReminder(
      18,
      dob,
      "DABT-İPA-Hib Rapel, OPA 2 doz, Hepatit A 1 doz "
    );
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

function checkup() {
    document.getElementById("currentAge").innerHTML = "";

    // Get the input values
    var dob = new Date(document.getElementById("inputDob").value);
    var currentDate = new Date(document.getElementById("cdate").value);
  
    var options = { year: "numeric", month: "long", day: "numeric" };
    var formattedDob = dob.toLocaleDateString("tr-TR", options);
    var formattedCurrentDate = currentDate.toLocaleDateString("tr-TR", options);
  
    // Calculate the difference in days
    var diffDays = Math.floor((currentDate - dob) / (1000 * 60 * 60 * 24));
  
    if (diffDays >= 0 && diffDays <= 7) {
      // For babies younger than 1 week
      document.getElementById("currentAge").innerHTML =
        "Bebeğin ilk haftalık 3-5 günlük ilk kontrolü yapılmalıdır.";
    } else if (diffDays <= 30) {
      displayCheckupReminder(30, dob, "1 aylık sağlık kontrolü ");
    } else if (diffDays <= 60) {
      displayCheckupReminder(60, dob, "2 aylık sağlık kontrolü ");
    } else if (diffDays <= 120) {
      displayCheckupReminder(120, dob, "4 aylık sağlık kontrolü ");
    } else if (diffDays <= 180) {
      displayCheckupReminder(180, dob, "6 aylık sağlık kontrolü ");
    } else if (diffDays <= 270) {
      displayCheckupReminder(270, dob, "9 aylık sağlık kontrolü ");
    } else if (diffDays <= 450) {
      displayCheckupReminder(450, dob, "15 aylık sağlık kontrolü ");
    } else if (diffDays <= 540) {
      displayCheckupReminder(540, dob, "18 aylık sağlık kontrolü ");
    } else if (diffDays <= 900) {
      displayCheckupReminder(900, dob, "30 aylık sağlık kontrolü ");
    } else if (diffDays <= 720) {
      displayCheckupReminder(720, dob, "2 yaşındaki sağlık kontrolü ");
    } else if (diffDays <= 1080) {
      displayCheckupReminder(1080, dob, "3 yaşındaki sağlık kontrolü ");
    } else if (diffDays <= 1440) {
      displayCheckupReminder(1440, dob, "4 yaşındaki sağlık kontrolü ");
    } else if (diffDays <= 1800) {
      displayCheckupReminder(1800, dob, "5 yaşındaki sağlık kontrolü ");
    } else if (diffDays <= 2160) {
      displayCheckupReminder(2160, dob, "6 yaşındaki sağlık kontrolü ");
    } else if (diffDays <= 2520) {
      displayCheckupReminder(2520, dob, "7 yaşındaki sağlık kontrolü ");
    }
  }
  
  function displayCheckupReminder(days, dob, reminder) {
    // Calculate the date for the checkup reminder
    var checkupDate = new Date(dob);
    checkupDate.setDate(checkupDate.getDate() + days);
  
    // Check if the checkup date is in the future
    var currentDate = new Date();
    if (checkupDate > currentDate) {
      // Format the date to Turkish
      var options = { year: "numeric", month: "long", day: "numeric" };
      var formattedCheckupDate = checkupDate.toLocaleDateString("tr-TR", options);
  
      // Display the reminder
      document.getElementById("currentAge").innerHTML +=
        "<br/>" + "**" + formattedCheckupDate + " tarihinde " + reminder + "yapılmalıdır" + "**" + "<br/>";
    }
  }

function percentile() {
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
}

function displayVaccinationReminder(months, dob, vaccineName) {
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
