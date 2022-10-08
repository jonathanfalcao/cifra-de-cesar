/* SELEÇÃO DE CRIPTOGRAFIA - INÍCIO DO CÓDIGO */
function opcaoEscolhida() {
    let mensagem = document.getElementById('mensagem').value;
    console.log(mensagem);
    if (criptografar.checked) {
        if (cesar.checked) {
            resposta.innerText = codificarCesar(mensagem);
        } else if (base64.checked) {
            resposta.innerText = btoa(mensagem);
        } else {
            resposta.innerText = "Escolha uma criptografia!"
        }
    } else if (descriptografar.checked) {
        if (cesar.checked) {
            resposta.innerText = decodificarCesar(mensagem);
        } else if (base64.checked) {
            resposta.innerText = atob(mensagem);
        } else {
            resposta.innerText = "Escolha uma criptografia!"
        }
    } else {
        resposta.innerText = "Você não informou se deseja criptografar ou descriptografar sua mensagem!";
    }
}
/* SELEÇÃO DE CRIPTOGRAFIA - FINAL DO CÓDIGO */


/*FUNÇÃO CIFRA DE CESAR - INÍCIO DO CÓDIGO*/
function codificarCesar(mensagem) {
    mensagem = mensagem.split("");
    console.log(mensagem);
    let mensagemAtual = mensagem.map((valor) => valor.charCodeAt());
    console.log(mensagemAtual);
    let mensagemInclemento = mensagemAtual.map((valor) => valor + incremento);
    console.log(mensagemInclemento);
    let mensagemNova = mensagemInclemento.map((valor) => String.fromCharCode(valor)).join("");
    console.log(mensagemNova);
    return mensagemNova;
}

function decodificarCesar(mensagem) {
    mensagem = mensagem.split("");
    let mensagemAtual = mensagem.map((valor) => valor.charCodeAt())
    let mensagemInclemento = mensagemAtual.map((valor) => valor - incremento);
    let mensagemNova = mensagemInclemento.map((valor) => String.fromCharCode(valor)).join("");
    console.log(mensagemNova);
    return mensagemNova;
}
/*FUNÇÃO CIFRA DE CESAR - FINAL DO CÓDIGO*/


/* BOTÃO - INÍCIO DO CÓDIGO  */
let criptografar = document.getElementById('criptografar');
let descriptografar = document.getElementById('descriptografar');
let botao = document.getElementById('botao');

function trocaTexto() {
    if (descriptografar.checked) {
        botao.innerText = "Descriptografar";
    } else if (criptografar.checked) {
        botao.innerText = "Criptografar";
    }
}
/* BOTÃO - FINAL DO CÓDIGO */


/* OPÇÃO DE INCREMENTO (DISPLAY) - INÍCIO DO CÓDIGO */
let cesar = document.getElementById('cesar');
let base64 = document.getElementById('base64');
let incrementar = document.getElementById('incrementar');

function mostraIncremento() {
    incrementar.style.display = "block";
}

function escondeIncremento() {
    incrementar.style.display = "none";
}

cesar.addEventListener('change', mostraIncremento);
base64.addEventListener('change', escondeIncremento);

let resposta = document.getElementById('resultado');
let incremento = parseInt(document.getElementById('incrementacao').value);
console.log(incremento);
console.log(typeof incremento);

botao.addEventListener('click', function (event) {
    event.preventDefault();
    opcaoEscolhida();
});
/* OPÇÃO DE INCREMENTO (DISPLAY) - FINAL DO CÓDIGO */