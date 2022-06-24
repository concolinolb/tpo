document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("newsletter").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;

    if(nombre.length == 0) {
      alert('Completá el casillero con tu nombre y recibí nuestro material exclusivo');
      return;
    }
   if (email.length == 0) {
      alert('Completá el casillero con tu e-mail y recibí nuestro material exclusivo');
      return;
    } else{
        alert("Tu registro fue enviado correctamente. ¡Muchas gracias!")
    }
    this.submit();
  }