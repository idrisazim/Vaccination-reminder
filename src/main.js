function getDOB() {
    var dob = new Date(document.getElementById("inputDob").value);
    var currentDate = new Date(document.getElementById("cdate").value);

    var diffTime = Math.abs(currentDate - dob);

    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    document.getElementById("currentAge").innerHTML =
        "Çocuğun yaşı:  " +
        Math.floor(diffDays / 365) +
        " yıl " +
        Math.floor((diffDays % 365) / 30) +
        " ay ve " +
        (diffDays % 30) +
        " gün." +
        "<br/>";

    if (diffDays <= 0) {
        alert("En acil zamanda Hepatit B 1 doz aşısını yaptırınız");
        displayVaccinationReminder(0, dob, "Hepatit B 1 doz ");
    }
    if (diffDays <= 30) {
        displayVaccinationReminder(30, dob, "Hepatit B 2 doz ");
    }
    if (diffDays <= 60) {
        displayVaccinationReminder(60, dob, "BCG(Verem) ");
    }
    if (diffDays <= 120) {
        displayVaccinationReminder(120, dob, "DABT-İPA-Hib, KPA ");
    }
    if (diffDays <= 180) {
        displayVaccinationReminder(
            180,
            dob,
            "Hepatit B 2 doz, DABT-İPA-Hib 2 doz, OPA 1 doz "
        );
    }
    if (diffDays <= 270) {
        displayVaccinationReminder(270, dob, "KKK İlave doz ");
    }
    if (diffDays <= 365) {
        displayVaccinationReminder(365, dob, "KPA Rapel, KKK 1 doz ");
    }
    if (diffDays <= 540) {
        displayVaccinationReminder(
            540,
            dob,
            "DABT-İPA-Hib Rapel, OPA 2 doz, Hepatit A 1 doz "
        );
    }
    if (diffDays <= 720) {
        displayVaccinationReminder(720, dob, "Hepatit A 2 doz ");
    }
    if (diffDays <= 1440) {
        displayVaccinationReminder(1440, dob, "KKK 2 doz, DABT-İPA 1 doz ");
    }
    if (diffDays <= 4680) {
        displayVaccinationReminder(4680, dob, "Td Rapel ");
    }
}


function checkup() {
    document.getElementById("currentAge").innerHTML = "";

    var dob = new Date(document.getElementById("inputDob").value);
    var currentDate = new Date(document.getElementById("cdate").value);
  
    var options = { year: "numeric", month: "long", day: "numeric" };
    var formattedDob = dob.toLocaleDateString("tr-TR", options);
    var formattedCurrentDate = currentDate.toLocaleDateString("tr-TR", options);

    var diffDays = Math.floor((currentDate - dob) / (1000 * 60 * 60 * 24));
  
    if (diffDays >= 0 && diffDays <= 7) {
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
    var checkupDate = new Date(dob);
    checkupDate.setDate(checkupDate.getDate() + days);
    var currentDate = new Date();
    if (checkupDate > currentDate) {
      var options = { year: "numeric", month: "long", day: "numeric" };
      var formattedCheckupDate = checkupDate.toLocaleDateString("tr-TR", options);

      document.getElementById("currentAge").innerHTML +=
        "<br/>" + "**" + formattedCheckupDate + " tarihinde " + reminder + "yapılmalıdır" + "**" + "<br/>";
    }
  }

function percentile() {
  var dob = new Date(document.getElementById("inputDob").value);
  var currentDate = new Date(document.getElementById("cdate").value);

  var options = { year: "numeric", month: "long", day: "numeric" };
  var formattedDob = dob.toLocaleDateString("tr-TR", options);
  var formattedCurrentDate = currentDate.toLocaleDateString("tr-TR", options);

  var diffMonths =
    (currentDate.getFullYear() - dob.getFullYear()) * 12 +
    currentDate.getMonth() -
    dob.getMonth();

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

function displayFutureVaccinationReminder(months, dob, vaccineName) {
  var vaccinationDate = new Date(dob);
  vaccinationDate.setMonth(vaccinationDate.getMonth() + months);

  var options = { year: "numeric", month: "long", day: "numeric" };
  var formattedVaccinationDate = vaccinationDate.toLocaleDateString(
    "tr-TR",
    options
  );

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

  var diffMonths =
    (currentDate.getFullYear() - dob.getFullYear()) * 12 +
    currentDate.getMonth() -
    dob.getMonth();

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

currentDate();
