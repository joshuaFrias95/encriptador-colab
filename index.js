const texto = document.getElementById("texto").value;
const tituloMensaje = document.getElementById("titulo-mensaje");
const parrafo = document.getElementById("parrafo");
const resultado = document.getElementById("resultado");
const muñeco = document.getElementById("muñeco");
const btncopiar = document.getElementById("btncopiar");
let textoCifrado;

btncopiar.style.display = "none";


function encriptar() {
  
  textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    
  if (texto.length != 0) {

      tituloMensaje.textContent = "Texto encriptado con éxito";
      resultado.textContent = textoCifrado;
      parrafo.textContent = "";
      muñeco.src = "./img/encriptado.jpg";
      btncopiar.style.display = "block";

      console.log(textoCifrado);

    } else {

      muñeco.src ="./img/Muñeco2.png";
      tituloMensaje.textContent = "Ningun mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      alert("Debes ingresar algún texto");

    }
}

function desencriptar() {

  textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");  

  if (texto.length != 0) {

    tituloMensaje.textContent = "Texto desencriptado con éxito";
    resultado.textContent = textoCifrado;
    parrafo.textContent = "";
    muñeco.src = "./img/encriptado.jpg";
    btncopiar.style.display = "block";

    console.log(textoCifrado);

  } else {

    muñeco.src ="./img/Muñeco2.png";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Debes ingresar algún texto");

  }
}

function copiar() {
  
  navigator.clipboard.writeText(resultado.innerHTML);
  console.log(resultado.innerHTML)
}