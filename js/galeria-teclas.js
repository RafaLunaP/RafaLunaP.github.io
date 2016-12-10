// Código js para la galería
var teclas =
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    ESC: 27
}

document.addEventListener("keyup", teclado);

function teclado(datos)
{
    //Guardo en "codigo" el número de la tecla oprimida.
    var codigo = datos.keyCode;

    if (codigo == teclas.UP)
    {
        plusSlides(1);
    }
    
    if (codigo == teclas.DOWN)
    {
        plusSlides(-1);
    }

    if (codigo == teclas.LEFT)
    {
        plusSlides(-1);
    }

    if (codigo == teclas.RIGHT)
    {
        plusSlides(1);
    }

    if (codigo == teclas.ESC)
    {
        closeModal();
    }
}

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

// var slideIndex = 1;
//   showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}