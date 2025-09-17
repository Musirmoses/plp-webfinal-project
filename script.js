// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkModeToggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode") 
      ? "☀️ Light Mode" 
      : "🌙 Dark Mode";
  });

  // Dynamic Greeting
  const greeting = document.getElementById("greeting");
  if (greeting) {
    const hour = new Date().getHours();
    if (hour < 12) {
      greeting.textContent = "Good Morning!";
    } else if (hour < 18) {
      greeting.textContent = "Good Afternoon!";
    } else {
      greeting.textContent = "Good Evening!";
    }
  }

  // Contact Form Validation
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const msg = document.getElementById("message").value.trim();

      if (name && email && msg) {
        message.textContent = "✅ Message sent successfully!";
        message.style.color = "limegreen";
        form.reset();
      } else {
        message.textContent = "❌ Please fill out all fields correctly.";
        message.style.color = "red";
      }
    });
  }
});
