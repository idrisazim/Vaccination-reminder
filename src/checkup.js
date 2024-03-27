var reminderr = "";

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

function checkupFuture() {
  reminderr = "";

  // Get the input values
  var dob = new Date(document.getElementById("inputDob").value);
  var currentDate = new Date(document.getElementById("cdate").value);

  var options = { year: "numeric", month: "long", day: "numeric" };
  var formattedDob = dob.toLocaleDateString("tr-TR", options);
  var formattedCurrentDate = currentDate.toLocaleDateString("tr-TR", options);

  // Calculate the difference in days
  var diffDays = Math.floor((currentDate - dob) / (1000 * 60 * 60 * 24));

  document.getElementById("currentAge").innerHTML =
  "Çocuğun yaşı:  " +
  Math.floor(diffDays / 365) +
  " yıl " +
  Math.floor((diffDays % 365) / 30) +
  " ay ve " +
  (diffDays % 30) +
  " gün." +
  "<br/>";

  if (diffDays >= 0 && diffDays <= 7) {
    // For babies younger than 1 week
    document.getElementById("currentAge").innerHTML =
      "Bebeğin ilk haftalık 3-5 günlük ilk kontrolü ve İşitme taraması yapılmalıdır. ";
      reminderr += "Bebeğin ilk haftalık 3-5 günlük ilk kontrolü ve İşitme taraması yapılmalıdır.\n";
  }if (diffDays <= 30) {
    displayCheckupReminder(30, dob, "1 aylık sağlık kontrolü ");
  }if (diffDays <= 60) {
    displayCheckupReminder(60, dob, "2 aylık sağlık kontrolü ve işitme taraması ");
  }if (diffDays <= 120) {
    displayCheckupReminder(120, dob, "4 aylık sağlık kontrolü ");
  }if (diffDays <= 180) {
    displayCheckupReminder(180, dob, "6 aylık sağlık kontrolü ");
  }if (diffDays <= 270) {
    displayCheckupReminder(270, dob, "9 aylık sağlık kontrolü ve HB(Hemoglobin) kontrolü ");
  } if (diffDays <= 365) {
    displayCheckupReminder(365, dob, "12 aylık görme taraması ");
  }if (diffDays <= 450) {
    displayCheckupReminder(450, dob, "15 aylık sağlık kontrolü ");
  }if (diffDays <= 540) {
    displayCheckupReminder(540, dob, "18 aylık sağlık kontrolü ");
  }if (diffDays <= 900) {
    displayCheckupReminder(900, dob, "30 aylık sağlık kontrolü ");
  }if (diffDays <= 720) {
    displayCheckupReminder(720, dob, "2 yaşındaki sağlık kontrolü ");
  }if (diffDays <= 1080) {
    displayCheckupReminder(1080, dob, "3 yaşındaki sağlık kontrolü, görme ve işitme taraması ");
  }if (diffDays <= 1440) {
    displayCheckupReminder(1440, dob, "4 yaşındaki sağlık kontrolü, görme ve işitme taraması ");
  }if (diffDays <= 1800) {
    displayCheckupReminder(1800, dob, "5 yaşındaki sağlık kontrolü, görme ve işitme taraması ");
  }if (diffDays <= 2160) {
    displayCheckupReminder(2160, dob, "6 yaşındaki sağlık kontrolü, görme ve işitme taraması ");
  }if (diffDays <= 2520) {
    displayCheckupReminder(2520, dob, "7 yaşındaki sağlık kontrolü ");
  }
  return reminderr;
}


  function checkup() {
    reminderr = "";

    // Get the input values
    var dob = new Date(document.getElementById("inputDob").value);
    var currentDate = new Date(document.getElementById("cdate").value);
    var options = { year: "numeric", month: "long", day: "numeric" };
    var formattedDob = dob.toLocaleDateString("tr-TR", options);
    var formattedCurrentDate = currentDate.toLocaleDateString("tr-TR", options);
  
    // Calculate the difference in days
    var diffDays = Math.floor((currentDate - dob) / (1000 * 60 * 60 * 24));

    document.getElementById("currentAge").innerHTML =
    "Çocuğun yaşı:  " +
    Math.floor(diffDays / 365) +
    " yıl " +
    Math.floor((diffDays % 365) / 30) +
    " ay ve " +
    (diffDays % 30) +
    " gün." +
    "<br/>";
  
    if (diffDays >= 0 && diffDays <= 7) {
      
      // For babies younger than 1 week
      document.getElementById("currentAge").innerHTML =
        "Bebeğin ilk haftalık 3-5 günlük ilk kontrolü ve işitme taraması yapılmalıdır.";
        reminderr += "Bebeğin ilk haftalık 3-5 günlük ilk kontrolü yapılmalıdır.\n";
        displayCheckupReminder(30, dob, "1 aylık sağlık kontrolü ");
    } else if (diffDays <= 30) {
      displayCheckupReminder(30, dob, "1 aylık sağlık kontrolü ");
    } else if (diffDays <= 60) {
      displayCheckupReminder(60, dob, "2 aylık sağlık kontrolü ve ve işitme taraması ");
    } else if (diffDays <= 120) {
      displayCheckupReminder(120, dob, "4 aylık sağlık kontrolü ");
    } else if (diffDays <= 180) {
      displayCheckupReminder(180, dob, "6 aylık sağlık kontrolü ");
    } else if (diffDays <= 270) {
      displayCheckupReminder(270, dob, "9 aylık sağlık ve HB(Hemoglobin) kontrolü ");
    } else if (diffDays <= 365) {
      displayCheckupReminder(365, dob, "12 aylık görme taraması ");
    }else if (diffDays <= 450) {
      displayCheckupReminder(450, dob, "15 aylık sağlık kontrolü ");
    } else if (diffDays <= 540) {
      displayCheckupReminder(540, dob, "18 aylık sağlık kontrolü ");
    } else if (diffDays <= 900) {
      displayCheckupReminder(900, dob, "30 aylık sağlık kontrolü ");
    } else if (diffDays <= 720) {
      displayCheckupReminder(720, dob, "2 yaşındaki sağlık kontrolü ");
    } else if (diffDays <= 1080) {
      displayCheckupReminder(1080, dob, "3 yaşındaki sağlık kontrolü, işitme ve görme taraması ");
    } else if (diffDays <= 1440) {
      displayCheckupReminder(1440, dob, "4 yaşındaki sağlık kontrolü, işitme ve görme taraması ");
    } else if (diffDays <= 1800) {
      displayCheckupReminder(1800, dob, "5 yaşındaki sağlık kontrolü, işitme ve görme taraması ");
    } else if (diffDays <= 2160) {
      displayCheckupReminder(2160, dob, "6 yaşındaki sağlık kontrolü, işitme ve görme taraması ");
    } else if (diffDays <= 2520) {
      displayCheckupReminder(2520, dob, "7 yaşındaki sağlık kontrolü ");
    }
    return reminderr;
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
        reminderr += "**" + formattedCheckupDate + " tarihinde " + reminder + "yapılmalıdır" + "**\n";
    }
  }

  var subjectt = "Sağlık kontrolü hatırlatma";
  var sender = "Sağlık kontrolü";
  

function sendMail(){

  var params = {
    sendername: sender,
    to: document.getElementById("to").value,
    subject: subjectt,
    message: reminderr,
  };


  var serviceID = "service_t2sezij";
  var templateID = "template_u0m4i0f";

  emailjs.send(serviceID, templateID, params)
  alert("E-posta başarılı bir şekilde gönderildi!")
  .then( res => {
    alert("Email sent successfully!");
  })
  .catch();
    
  }
