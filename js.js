const cajas = document.querySelectorAll(".caja");
const imagenes = document.querySelectorAll("#rom img");
let imagenArrastrada = null;

function empezarArrastre(evento) {
  imagenArrastrada = evento.target;
  imagenArrastrada.classList.add("arrastre");
}

function duranteArrastre(evento) {
  evento.preventDefault();
}

function soltarImagen(evento) {
  if (evento.target.classList.contains("caja")) {
    evento.target.appendChild(imagenArrastrada);
  }
  imagenArrastrada.classList.remove("arrastre");
  imagenArrastrada = null;
}

imagenes.forEach((imagen) => {
  imagen.addEventListener("dragstart", empezarArrastre);
  imagen.addEventListener("dragover", duranteArrastre);
  imagen.addEventListener("dragend", soltarImagen);
});

function reiniciarJuego() {
  cajas.forEach((caja) => {
    caja.innerHTML = "Arrastre y suelte aqui la imagen.";
  });
  imagenes.forEach((imagen) => {
    imagen.parentNode.removeChild(imagen);
    document.getElementById("rom").appendChild(imagen);
  });
}

document.getElementById("reset").addEventListener("click", reiniciarJuego);
