const form = document.querySelector("#formulario-work-with-us");
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault()
}
const nombre = 0;
const telefono = 0;
const email = 0;
function retornarDatos() {
  const nombre = document.getElementById("nombre").Value;
  const telefono = document.getElementById("telefono").Value;
  const email = document.getElementById("email").Value;
  const datos = (nombre," ",telefono," ",email);
  console.log(datos);
}