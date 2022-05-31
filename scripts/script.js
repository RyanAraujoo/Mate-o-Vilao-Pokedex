/* select, pagina de confirmacao e seu botão etão como variaveis global por serem usadas por mais de um metodo */
var select = document.querySelector(".select-pokemon")
/* guardar informação de uma pagina e levar para outra mesmo com redirecionamento */
function salvarPokemon() {
    sessionStorage.setItem("select",select.value)

    sessionStorage.setItem("infoPokers", JSON.stringify(infoPokers))
}
var btn = document.getElementById("btnHabilitaLandingPage")
var landPage = document.querySelector(".landing-page")

/* audio manipulado para desmutar após os 8 segundos da musica */
let audio = document.getElementById("audio")
setTimeout(() => {
    audio.muted = false
}, 8000)
/* função que apaga a pagina de confirmação e volta a escolha do pokemon */
function DesabilitarLandingPage() {
    landPage.style.display = "none"
    btn.disabled = false
}
/* função que traz os dados do pokemon escolhido para nossa pagina de confirmação */
function RenderizaPokemon() {
    let nome = document.querySelector(".nome-pokemon")
    let ataque = document.querySelector(".ataque-pokemon")
    let vida = document.querySelector(".vida-pokemon")
    let imagem = document.querySelector(".imagem-pokemon")

    nome.innerHTML = `Nome do Pokemon: ${infoPokers[select.value].nome}`
    ataque.innerHTML = `Ataque do Pokemon: ${infoPokers[select.value].ataque}`
    vida.innerHTML = `Vida do Pokemon: ${infoPokers[select.value].vida}`
    imagem.src = infoPokers[select.value].src
}
/* função que retorna pra tela a pagina de confirmação para começar o jogo */
function HabilitarLandingPage() {

    if (select.value !== "default") {
        RenderizaPokemon()
        landPage.style.display = "block"
        btn.disabled = true

    } else {
        alert("Selecione seu pokemon!")
    }
}
/* validação do pokemon escolhido por meio do select */
function verPokemon() {
    let assets = document.getElementById("img-pokemon")

    if (select.value == "default") {
        assets.src = infoPokers[0].src
    } else if (select.value == "1") {
        assets.src = infoPokers[1].src
    } else if (select.value == "2") {
        assets.src = infoPokers[2].src
    } else if (select.value == "3") {
        assets.src = infoPokers[3].src
    } else if (select.value == "4") {
        assets.src = infoPokers[4].src
    } else if (select.value == "5") {
        assets.src = infoPokers[5].src
    } else if (select.value == "6") {
        assets.src = infoPokers[6].src
    } else if (select.value == "7") {
        assets.src = infoPokers[7].src
    } else if (select.value == "8") {
        assets.src = infoPokers[8].src
    }
}




