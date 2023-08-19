//Haz tú validación en javascript acá

const mensajesDeError = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío",
    },
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido ej: Programador@hotmail.com",
      },
      asunto: {
        valueMissing: "El campo nombre no puede estar vacío",
        typeMismatch: "Al menos 6 caracteres, máximo 50",
      },
      mensage: {
        valueMissing: "El campo nombre no puede estar vacío",
        typeMismatch: "Al menos 6 caracteres, máximo 300",
      }
    }

    const botonEnviar = document.getElementById("botonEnviar");
    const asunto = document.getElementById("Asunto")

    asunto.addEventListener("input", function () {
        const camposCompletos = Array.from(asunto.elements).every(
          (elemento) => elemento.value !== ""
        );
        botonEnviar.disabled = !camposCompletos;
      });
    

      asunto.addEventListener("submit", function (event) {
        event.preventDefault();
    
        const mensajeHTML = "<p>¡Formulario enviado correctamente!</p>";
        document.getElementById("mensaje-html").innerHTML = mensajeHTML;
      });
  