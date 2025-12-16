document.getElementById("contactform").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("msg-status");

  if (name == "" || email == "" || message == "") {
    status.style.color = "red";
    status.innerHTML = "Please fill the details.";
    return;
  }

  // Email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    status.style.color = "red";
    status.innerText = "Please enter a valid email address.";
    return;
  }

  status.style.color = "green";
  status.innerText = "Thank you! Your message has been sent.";

  const subject = "Portfolio Contact from " + name;
  const body =
    "Name: " +
    name +
    "%0D%0A" +
    "Email: " +
    email +
    "%0D%0A%0D%0A" +
    "Message:%0D%0A" +
    message;

  window.location.href =
    "mailto:aasanalalani25@gmail.com?subject=" + subject + "&body=" + body;

  document.getElementById("contactform").reset();

  const menuIcon = document.getElementById("menuIcon");
  const navbar = document.getElementById("navbar");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
});
