// Get form elements
const form = document.getElementById("appointment-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const date = document.getElementById("date");
const time = document.getElementById("time");
const message = document.getElementById("message");

// Form submit event listener
form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  // Validate form input
  if (name.value === "" || email.value === "" || date.value === "" || time.value === "") {
    message.innerHTML = "Please fill in all fields.";
    return;
  }

  // Send form data to server (assuming you have a server set up to handle this)
  // ...

  // Clear form and display success message
  message.innerHTML = "Appointment booked successfully!";
  clearForm();
}

function clearForm() {
  name.value = "";
  email.value = "";
  date.value = "";
  time.value = "";
}
