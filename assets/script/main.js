const form = document.querySelector("#formulario-work-with-us");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
}

function retornarDatos() {
  let nombre = document.getElementById("nombre").value;
  let telefono = document.getElementById("telefono").value;
  let email = document.getElementById("email").value;
  let descripcion = document.getElementById("descripcion").value;
  let persona = [nombre, telefono, email, descripcion];
  console.log(persona);
}
