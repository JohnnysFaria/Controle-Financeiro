//Validação formulario
const fields = document.querySelectorAll('[required]');
function customValidation(event) {
  const field = event.target;

  function verifyErrors() {
    let foundError = false;

    for (let error in field.validity) {
      if (error != 'customError' && field.validity[error]) {
        foundError = error;
      }
    }
    return foundError;
  }
  const error = verifyErrors();

  if (error) {
    field.setCustomValidity('Esse campo é obrigatório');
  } else {
    field.setCustomValidity('');
  }
}
for (let field of fields) {
  field.addEventListener('invalid', customValidation);
}
document.querySelector('form').addEventListener('submit', (event) => {
  console.log('enviar o formulário');
  event.preventDefault();
});
