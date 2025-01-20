// Manejo del formulario de afiliación
const affiliateForm = document.getElementById("affiliate-form");

affiliateForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Capturar los datos del formulario
    const name = document.getElementById("affiliate-name").value;
    const email = document.getElementById("affiliate-email").value;
    const phone = document.getElementById("affiliate-phone").value;
    const address = document.getElementById("affiliate-address").value;
    const password = document.getElementById("affiliate-password").value;

    // Validación básica
    if (name && email && phone && address && password) {
        alert(`¡Gracias por registrarte, ${name}! Tu cuenta será revisada.`);
        // Aquí puedes implementar la lógica para enviar los datos al servidor
    } else {
        alert("Por favor, completa todos los campos.");
    }

    // Resetear el formulario
    affiliateForm.reset();
});

// Manejo del formulario de afiliación
const affiliateForm = document.getElementById("affiliate-form");

affiliateForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Capturar los datos del formulario
    const name = document.getElementById("affiliate-name").value;
    const email = document.getElementById("affiliate-email").value;
    const phone = document.getElementById("affiliate-phone").value;
    const address = document.getElementById("affiliate-address").value;
    const password = document.getElementById("affiliate-password").value;

    // Validación básica
    if (name && email && phone && address && password) {
        alert(`¡Gracias por registrarte, ${name}! Tu cuenta será revisada.`);
        // Aquí puedes implementar la lógica para enviar los datos al servidor
    } else {
        alert("Por favor, completa todos los campos.");
    }

    // Resetear el formulario
    affiliateForm.reset();
});
const affiliateForm = document.getElementById("affiliate-form");

affiliateForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Capturar los datos del formulario
    const name = document.getElementById("affiliate-name").value;
    const email = document.getElementById("affiliate-email").value;
    const phone = document.getElementById("affiliate-phone").value;
    const address = document.getElementById("affiliate-address").value;
    const password = document.getElementById("affiliate-password").value;

    // URL de tu Google Apps Script
    const scriptURL = "https://script.google.com/macros/s/AKfycbwH2e0P7zeutixA_dGp8h-cum3XfrjPn0I-8d40WxUV-fqGC-rLPiZSKZZx2nP3OcTvRQ/exec"; // Reemplaza con tu URL

    // Crear el cuerpo de la solicitud
    const formData = new URLSearchParams();
    formData.append("nombre", name);
    formData.append("email", email);
    formData.append("telefono", phone);
    formData.append("direccion", address);
    formData.append("contrasena", password);

    // Enviar datos a Google Sheets
    fetch(scriptURL, { method: "POST", body: formData })
        .then((response) => {
            if (response.ok) {
                alert("¡Registro exitoso!");
                affiliateForm.reset();
            } else {
                alert("Hubo un error al enviar los datos.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Error al enviar los datos.");
        });
});

