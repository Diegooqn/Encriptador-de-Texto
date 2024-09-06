function mostrarResultado(texto) {
    document.getElementById("contenidoMuneco").style.display = "none";
    let resultado = document.getElementById("resultado");
    let copiar = document.getElementById("copiar");

    copiar.style.display = "block";
    resultado.style.display = "block";
    resultado.textContent = texto;
}

function encriptar(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

function procesarTexto(accion) {
    let textoUsuario = document.getElementById("entradaTexto").value;
    let resultado = accion === 'encriptar' ? encriptar(textoUsuario) : desencriptar(textoUsuario);
    mostrarResultado(resultado);
    console.log(resultado);
}

function copiar() {
    let resultado = document.getElementById("resultado");
    navigator.clipboard.writeText(resultado.textContent)
        .then(() => alert("Texto copiado al portapapeles"))
        .catch(err => console.error('Error al copiar', err));
}

