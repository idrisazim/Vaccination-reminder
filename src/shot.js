var reminder = "";
var reminderAll = "";


  

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


function getDOB() {
  // Get the input values
  var dob = new Date(document.getElementById("inputDob").value);
  var currentDate = new Date(document.getElementById("cdate").value);

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

  // Initialize the output string
  var output = "Çocuğun yaşı:  " +
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
      if (diffDays <= 5) {
        alert("En acil zamanda " + vaccineSchedule[0] + " aşısını yaptırınız");
        output += "En acil zamanda " + vaccineSchedule[0] + " aşısını yaptırınız\n";
      }
      displayVaccinationReminder(days, dob, vaccineSchedule[days]);
      break; // Exit the loop after finding the first reminder
    }
  }

  return output;
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

  // Initialize the reminder string

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
  alert("Email sent successfully!")
  .then( res => {
    alert("Email sent successfully!");
  })
  .catch();
    
  }

  


function getAllShots() {
  document.getElementById("currentAge").innerHTML = "";

  // Get the input values
  var dob = new Date(document.getElementById("inputDob").value);
  var currentDate = new Date(document.getElementById("cdate").value);


  // Calculate the difference in days
  var diffDays = Math.floor((currentDate - dob) / (1000 * 60 * 60 * 24));



  var output = "Çocuğun yaşı:  " +
    Math.floor(diffDays / 365) +
    " yıl " +
    Math.floor((diffDays % 365) / 30) +
    " ay ve " +
    (diffDays % 30) +
    " gün." +
    "<br/>";


  // Calculate years, months, and remaining days
  var years = Math.floor(diffDays / 365);
  var months = Math.floor((diffDays % 365) / 30);
  var days = diffDays % 30;

  // Define vaccine schedule in months
  var vaccineSchedule = {
    0: "Hepatit B 1 doz",
    1: "Hepatit B 2 doz",
    2: "BCG(Verem)",
    4: "DABT-İPA-Hib, KPA",
    6: "Hepatit B 2 doz, DABT-İPA-Hib 2 doz, OPA 1 doz",
    9: "KKK İlave doz",
    12: "KPA Rapel, KKK 1 doz",
    18: "DABT-İPA-Hib Rapel, OPA 2 doz, Hepatit A 1 doz",
    24: "Hepatit A 2 doz",
    48: "KKK 2 doz, DABT-İPA 1 doz",
    156: "Td Rapel",
  };

  // Create a container for the list of vaccinations
  var vaccinationListContainer = document.createElement("div");
  vaccinationListContainer.id = "vaccinationList";
  vaccinationListContainer.style.maxHeight = "200px"; // Set the maximum height for the container
  vaccinationListContainer.style.overflowY = "auto"; // Enable vertical scrolling

  // Append the container to the page
  document.getElementById("currentAge").appendChild(vaccinationListContainer);


  for (var days in vaccineSchedule) {
    if (diffDays <= days) {
        if (diffDays <= 5){
      alert("En acil zamanda " + vaccineSchedule[0] + " aşısını yaptırınız");
      output += "En acil zamanda " + vaccineSchedule[0] + " aşısını yaptırınız\n";
      displayFutureVaccinationReminder(months, dob, vaccineSchedule[0], vaccinationListContainer);
      break; // Exit the loop after finding the first reminder
    }
  }
}
  // Display the reminders for future vaccinations
  for (var months in vaccineSchedule) {
    if ((years * 12 + parseInt(months)) >= diffDays / 30) {
      displayFutureVaccinationReminder(months, dob, vaccineSchedule[months], vaccinationListContainer);
    }
  }
  return output;
}

function displayFutureVaccinationReminder(months, dob, vaccineName, container) {
  // Calculate the date for the vaccination reminder
  var vaccinationDate = new Date(dob);
  vaccinationDate.setMonth(vaccinationDate.getMonth() + parseInt(months));

  // Format the date to Turkish
  var options = { year: "numeric", month: "long", day: "numeric" };
  var formattedVaccinationDate = vaccinationDate.toLocaleDateString(
    "tr-TR",
    options
  );

  // Create a paragraph element for the reminder
  var reminderParagraph = document.createElement("p");
  reminderParagraph.textContent =
    "**" +
    formattedVaccinationDate +
    " tarihinde " +
    vaccineName +
    " aşısını yaptırmalısınız" +
    "**";



    reminderAll += "**" +
    formattedVaccinationDate +
    " tarihinde " +
    vaccineName +
    " aşısını yaptırmalısınız" +
    "**\n";
  // Append the paragraph to the container
  container.appendChild(reminderParagraph);
  
}

function sendMailAll(){
  var params = {
    sendername: sender,
    to: document.getElementById("to").value,
    subject: subjectt,
    message: reminderAll,
  };


  var serviceID = "service_t2sezij";
  var templateID = "template_rsmbjid";

  emailjs.send(serviceID, templateID, params)
  alert("Email sent successfully!")
  .then( res => {
    alert("Email sent successfully!");
  })
  .catch();
    
  }
