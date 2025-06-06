function changetheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}
let themeButton = document.querySelector(".cambiartema");
themeButton.addEventListener("click", changetheme);

document
  .getElementById("formularioInscripcion")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const charla = document.getElementById("charla").value;
    const email = document.getElementById("email").value;
    alert(
      nombre +
        ", gracias por inscribirte a la charla " +
        charla +
        ". Te contactaremos al correo: " +
        email
    );

    this.reset();
  });

botoninscribirse.addEventListener("click", inscribirse);

function validar() {
  let usuario = document.getElementById("usuario").value.trim();
  let clave = document.getElementById("clave").value;

  if (!usuario || !clave) {
    alert("Por favor complete el usuario y la contraseña.");
    return;
  }

  let claveGuardada = localStorage.getItem("user_" + usuario);

  if (claveGuardada === null) {
    alert("Usuario no encontrado. Registrate primero.");
    return;
  }

  if (claveGuardada === clave) {
    alert("¡Bienvenido, " + usuario + "!");
    window.location.href = "./home.html";
  } else {
    alert("Contraseña incorrecta.");
  }
}

function registrar() {
  const usuario = document.getElementById("nuevoUsuario").value.trim();
  const clave = document.getElementById("nuevaClave").value;

  if (!usuario || !clave) {
    alert("Completá usuario y contraseña.");
    return;
  }

  if (localStorage.getItem("user_" + usuario)) {
    alert("El usuario ya existe. Elegí otro.");
    return;
  }

  localStorage.setItem("user_" + usuario, clave);
  alert("Registro exitoso. Ya podés iniciar sesión.");
  window.location.href = "index.html";
}
