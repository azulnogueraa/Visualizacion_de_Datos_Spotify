var boton = document.getElementById('miBoton');
var modal = document.getElementById('modal');
var imagenModal = document.getElementById('imagenModal');
var close = document.getElementsByClassName('close')[0];

boton.addEventListener('click', function() {
  modal.style.display = 'block';
});

close.addEventListener('click', function() {
  modal.style.display = 'none';
});