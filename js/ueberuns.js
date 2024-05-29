/* JS Code, der nur auf der über uns Page verwendet wird */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletter-form");
  const inputs = form.querySelectorAll("input[required]");
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars
    let allFieldsFilled = true;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        allFieldsFilled = false;
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });

    if (allFieldsFilled) {
      // Hier können Sie den Code hinzufügen, um die Formulardaten zu verarbeiten
      alert("Formular erfolgreich abgeschickt!");
      form.reset();
    } else {
      alert("Bitte füllen Sie alle Felder aus.");
    }
  });

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value.trim() !== "") {
        input.classList.remove("error");
      }
    });
  });
});
