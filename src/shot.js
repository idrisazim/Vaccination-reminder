var reminder = "";
var reminderAll = "";

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

  document.getElementById("currentAge2").innerHTML =
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


function getDOB() {
  reminder = "";
  var dob = new Date(document.getElementById("inputDob").value);
  var currentDate = new Date(document.getElementById("cdate").value);

  var diffDays = Math.floor((currentDate - dob) / (1000 * 60 * 60 * 24));

  document.getElementById("currentAge2").innerHTML =
    "Çocuğun yaşı:  " +
    Math.floor(diffDays / 365) +
    " yıl " +
    Math.floor((diffDays % 365) / 30) +
    " ay ve " +
    (diffDays % 30) +
    " gün." +
    "<br/>";

  var output = "Çocuğun yaşı: " +
    Math.floor(diffDays / 365) +
    " yıl " +
    Math.floor((diffDays % 365) / 30) +
    " ay ve " +
    (diffDays % 30) +
    " gün." +
    "<br/>";

  var vaccineSchedule = {
    30: "Hepatit B 2. doz",
    60: "BCG(Verem)",
    120: "DABT-İPA-Hib, KPA",
    180: "Hepatit B 3. doz, DABT-İPA-Hib 2. doz, OPA 1. doz",
    270: "KKK İlave doz",
    365: "KPA Rapel, KKK 1. doz, suçiçek 1. doz",
    540: "DABT-İPA-Hib Rapel, OPA 2. doz, Hepatit A 1. doz",
    720: "Hepatit A 2. doz",
    1440: "KKK 2. doz, DABT-İPA doz",
    4680: "Td Rapel",
  };

  for (var days in vaccineSchedule) {
    if (diffDays <= days) {
      if (diffDays <= 5) {
        alert("En acil zamanda Hepatit B 1. doz aşısını yaptırınız.");
        document.getElementById("currentAge2").innerHTML += "En acil zamanda Hepatit B 1. doz aşısını yaptırınız."
        reminder += "En acil zamanda " + vaccineSchedule[0] + " aşısını yaptırınız\n";
      }
      displayVaccinationReminder(days, dob, vaccineSchedule[days]);
      break;
    }
  }

  return reminder;
}



function displayVaccinationReminder(days, dob, vaccineName) {
  var vaccinationDate = new Date(dob);
  vaccinationDate.setDate(vaccinationDate.getDate() + parseInt(days));

  var options = { year: "numeric", month: "long", day: "numeric" };
  var formattedVaccinationDate = vaccinationDate.toLocaleDateString(
    "tr-TR",
    options
  );

  if (vaccinationDate > new Date()) {

    document.getElementById("currentAge2").innerHTML +=
      "<br/>" +
      "**" +
      formattedVaccinationDate +
      " tarihinde " +
      vaccineName +
      " aşısını yaptırmalısınız" +
      "**" +
      "<br/>";


    reminder += "**" +
      formattedVaccinationDate +
      " tarihinde " +
      vaccineName +
      " aşısını yaptırmalısınız" +
      "**\n";
  }
}



var subjectt = "Aşı";
var sender = "Aşı hatırlatma";

function sendMail(){
  var params = {
    sendername: sender,
    to: document.getElementById("to").value,
    subject: subjectt,
    message: reminder,
  };


  var serviceID = "service_t2sezij";
  var templateID = "template_rsmbjid";

  emailjs.send(serviceID, templateID, params)
  .then( res => {
    alert("E-posta gönderildi!");
  })
  .catch();
    
  }

  


function getAllShots() {
  reminder = "";
  document.getElementById("currentAge2").innerHTML = "";

  // Get the input values
  var dob = new Date(document.getElementById("inputDob").value);
  var currentDate = new Date(document.getElementById("cdate").value);


  var diffDays = Math.floor((currentDate - dob) / (1000 * 60 * 60 * 24));



  var output = "Çocuğun yaşı:  " +
    Math.floor(diffDays / 365) +
    " yıl " +
    Math.floor((diffDays % 365) / 30) +
    " ay ve " +
    (diffDays % 30) +
    " gün." +
    "<br/>";


  var years = Math.floor(diffDays / 365);
  var months = Math.floor((diffDays % 365) / 30);
  var days = diffDays % 30;

  var vaccineSchedule = {
    0: "Hepatit B 1. doz",
    1: "Hepatit B 2. doz",
    2: "BCG(Verem)",
    4: "DABT-İPA-Hib, KPA",
    6: "Hepatit B 3. doz, DABT-İPA-Hib 2. doz, OPA 1. doz",
    9: "KKK İlave doz",
    12: "KPA Rapel, KKK 1. doz, suçiçek",
    18: "DABT-İPA-Hib Rapel, OPA 2 doz, Hepatit A 1. doz",
    24: "Hepatit A 2. doz",
    48: "KKK 2. doz, DABT-İPA 1. doz",
    156: "Td Rapel",
  };

  var vaccinationListContainer = document.createElement("div");
  vaccinationListContainer.id = "vaccinationList";
  vaccinationListContainer.style.maxHeight = "200px"; 
  vaccinationListContainer.style.overflowY = "auto";

  document.getElementById("currentAge2").appendChild(vaccinationListContainer);


  for (var days in vaccineSchedule) {
    if (diffDays <= days) {
        if (diffDays <= 5){
      alert("En acil zamanda Hepatit B 1. doz aşısını yaptırınız");
      reminder += "En acil zamanda Hepatit B 1. doz aşısını yaptırınız\n";
      displayFutureVaccinationReminder(months, dob, vaccineSchedule[0], vaccinationListContainer);
      break;
    }
  }
}

  for (var months in vaccineSchedule) {
    if ((years * 12 + parseInt(months)) >= diffDays / 30) {
      displayFutureVaccinationReminder(months, dob, vaccineSchedule[months], vaccinationListContainer);
    }
  }
  return output;
}

function displayFutureVaccinationReminder(months, dob, vaccineName, container) {
  var vaccinationDate = new Date(dob);
  vaccinationDate.setMonth(vaccinationDate.getMonth() + parseInt(months));

  var options = { year: "numeric", month: "long", day: "numeric" };
  var formattedVaccinationDate = vaccinationDate.toLocaleDateString(
    "tr-TR",
    options
  );

  var reminderParagraph = document.createElement("p");
  reminderParagraph.textContent =
    "**" +
    formattedVaccinationDate +
    " tarihinde " +
    vaccineName +
    " aşısını yaptırmalısınız" +
    "**";



    reminder += "**" +
    formattedVaccinationDate +
    " tarihinde " +
    vaccineName +
    " aşısını yaptırmalısınız" +
    "**\n";
  container.appendChild(reminderParagraph);
  
}

function sendMailAll(){
  var params = {
    sendername: sender,
    to: document.getElementById("to").value,
    subject: subjectt,
    message: reminder,
  };


  var serviceID = "service_t2sezij";
  var templateID = "template_rsmbjid";

  emailjs.send(serviceID, templateID, params)
  alert("E-posta başarılı bir şekilde gönderildi!")
  .then( res => {
    alert("E-posta başarılı bir şekilde gönderildi!");
  })
  .catch();
    
  }
