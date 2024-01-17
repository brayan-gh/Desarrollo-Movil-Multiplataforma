const pantalla = document.getElementById('pantalla');

let puntoHabilitado = true;

function limpiarPantalla() {
  pantalla.value = '';
  puntoHabilitado = true;
}

function limpiarTodo() {
  pantalla.value = '';
  puntoHabilitado = true;
}

function borrarUltimo() {
  pantalla.value = pantalla.value.slice(0, -1);
  puntoHabilitado = !pantalla.value.includes('.');
}

function agregarCaracter(caracter) {
  if (pantalla.value === '0' && caracter !== '.') {
    pantalla.value = caracter;
  } else {
    pantalla.value += caracter;
    if (caracter === '.') {
      puntoHabilitado = false;
    }
  }
}

function agregarPunto() {
  if (puntoHabilitado) {
    pantalla.value += '.';
    puntoHabilitado = false;
  }
}

function calcular() {
  try {
    pantalla.value = eval(pantalla.value);
    puntoHabilitado = !pantalla.value.includes('.');
  } catch (error) {
    pantalla.value = 'Error';
  }
}