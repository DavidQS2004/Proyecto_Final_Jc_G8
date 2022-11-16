const form = document.querySelector("#formulario-work-with-us");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
}
function retornarDatos() {
  let nombreContacto = document.getElementById("nombre").Value;
  let telefonoContacto = document.getElementById("telefono").Value;
  let emailContacto = document.getElementById("email").Value;
  let persona = (nombreContacto, " ", telefonoContacto, " ", emailContacto);
  alert(persona);
}
