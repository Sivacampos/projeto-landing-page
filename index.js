var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex"
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
}

function RolarParaEsquerda() {
    setaEsquerda.style ="display:none"
    setaDireita.style ="display:flex"
    Leonardo.style ="display:flex"
    Bruna.style ="display:none"

}