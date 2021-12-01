function closeNav() {
  document.getElementById("navi-toggle").checked = false;
}

function sendMail(event) {
  event.preventDefault();
  document.getElementById("form-button").innerHTML = "Sending...";
  var tempParams = {
    name: document.getElementById("contact-name").value,
    email: document.getElementById("contact-email").value,
    company: document.getElementById("contact-company").value,
    role: document.getElementById("contact-role").value,
    message: document.getElementById("contact-message").value,
  };
  emailjs
    .send("service_dqx1tu1", "template_zb0vluj", tempParams)
    .then(function (res) {
      console.log("Success", res.status);
      document.getElementById("form-button").innerHTML =
        "Thank you for your submission!";
      document.getElementById("form-button").style.color = "green";
    });
  (document.getElementById("contact-name").value = ""),
    (document.getElementById("contact-email").value = ""),
    (document.getElementById("contact-company").value = ""),
    (document.getElementById("contact-role").value = ""),
    (document.getElementById("contact-message").value = "");
}
