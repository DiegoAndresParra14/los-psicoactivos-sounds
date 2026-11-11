document.getElementById('checkout-form').addEventListener('submit', event => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  // Esta maqueta no envía, almacena ni añade a la URL los datos del formulario.
  window.location.assign('success.html');
});
