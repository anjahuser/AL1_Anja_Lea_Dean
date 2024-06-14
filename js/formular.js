document
  .getElementById("newsletter_form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form from submitting normally
    let formIsValid = true;

    // Spinner anzeigen
    document.getElementById("spinner").style.display = "block";

    // firstName validieren
    let firstName = document.getElementById("firstName").value.trim();
    if (firstName === "") {
      formIsValid = false;
      alert("Bitte geben Sie Ihren Vornamen ein.");
    }

    // lastName validieren
    let lastName = document.getElementById("lastName").value.trim();
    if (lastName === "") {
      formIsValid = false;
      alert("Bitte geben Sie Ihren Nachnamen ein.");
    }

    // Country validieren
    let country = document.getElementById("country").value.trim();
    if (country === "" || country === "default") {
      formIsValid = false;
      alert("Bitte geben Sie Ihr Land ein.");
    }

    // E-Mail validieren
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      formIsValid = false;
      alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
    }

    if (formIsValid) {
      try {
        // Formulardaten in die Datenbank einfügen
        await databaseClient.insertInto("newsletter_form", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          country: country,
        });
        alert("Anmeldung erfolgreich!"); // Erfolgsmeldung
      } catch (error) {
        console.error("Fehler beim Speichern der Daten:", error);
        alert(
          "Es gab ein Problem bei der Anmeldung. Bitte versuchen Sie es später erneut."
        );
      }
    }

    // Spinner verbergen
    document.getElementById("spinner").style.display = "none";
  });
