var entradaTexto = document.querySelector("textarea#input__entrada");
var saidaTexto = document.querySelector("textarea#input__saida");

function copiaTexto() {
    let text = entradaTexto.value;
    if (/[A-Z-À-Ú-à-ù]/.test(text)) {
        saidaTexto.innerHTML = 'Não é possível copiar palavras com letras maiúsculas ou acentuação.'
    } else if (entradaTexto.value.length === 0) {
        saidaTexto.innerHTML = "Digite para poder copiar!";
    } else {
        var copyText = saidaTexto.innerHTML;
        navigator.clipboard.writeText(copyText).then(() => {
            saidaTexto.innerHTML = "Seu texto foi copiado com sucesso. Divirta-se!";
        });
    }
}