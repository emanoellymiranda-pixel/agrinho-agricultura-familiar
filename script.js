
/* ACCORDION */

const accordions =
document.querySelectorAll(".accordion-header");

accordions.forEach(item => {

    item.addEventListener("click", () => {

        const parent =
        item.parentElement;

        parent.classList.toggle("active");

    });

});

/* TAMANHO DA FONTE */

let tamanhoFonte = 16;

document
.getElementById("aumentarFonte")
.addEventListener("click", () => {

    tamanhoFonte += 2;

    document.documentElement.style.fontSize =
    tamanhoFonte + "px";

});

document
.getElementById("diminuirFonte")
.addEventListener("click", () => {

    tamanhoFonte -= 2;

    if(tamanhoFonte < 12){
        tamanhoFonte = 12;
    }

    document.documentElement.style.fontSize =
    tamanhoFonte + "px";

});

/* TEMA */

document
.getElementById("alternarTema")
.addEventListener("click", () => {

    document.body.classList.toggle("light");

});

/* LEITURA POR VOZ */

let falaAtual = null;

const conteudo =
document.getElementById(
"conteudoPrincipal"
);

document
.getElementById("lerConteudo")
.addEventListener("click", () => {

    window.speechSynthesis.cancel();

    falaAtual =
    new SpeechSynthesisUtterance(
        conteudo.innerText
    );

    falaAtual.lang = "pt-BR";
    falaAtual.rate = 1;
    falaAtual.pitch = 1;

    window.speechSynthesis.speak(
        falaAtual
    );

});

document
.getElementById("pararLeitura")
.addEventListener("click", () => {

    window.speechSynthesis.cancel();

});

/* FORMULÁRIO */

document
.querySelector("form")
.addEventListener("submit", (e)=>{

    e.preventDefault();

    alert(
        "Inscrição realizada com sucesso!"
    );

});