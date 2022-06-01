// pegar informação através do localStorage 
/* neste topico, as informações se perdiam após a renderização, isso guarda a informação na maquina */
var infoPokersGame = JSON.parse(sessionStorage.infoPokers)

// pegando informações dos pokemons se atualiza los na raiz
// ponto de acesso as informações dos pokemons */
var infoGamePokemon = [
    {
        pokeJogador: infoPokersGame[sessionStorage.select].nome,
        ataque: infoPokersGame[sessionStorage.select].ataque,
        vida: infoPokersGame[sessionStorage.select].vida,
        src: infoPokersGame[sessionStorage.select].src
    }, 
    {
        pokeJogador: infoPokersGame[9].nome,
        ataque: infoPokersGame[9].ataque,
        vida: infoPokersGame[9].vida,
        src: infoPokersGame[9].src
    }
]
// diretório da caixa(div) para manipular os dados dos pokemons
let caixaPokemonJogador = document.getElementById("pokemon-jogador")
let caixaPokemonVilao = document.getElementById("pokemon-vilao")

// diretorio da caixa(div) da pagina de confirmação da vitória/derrota
var landPage = document.querySelector(".landing-page")
// diretorio do texto onde se dirige o status de vitoria ou derrota
var resulGame = document.querySelector(".resultado-game")

// função que dá funcionalidade ao ataque do pokemon jogador e ao pokemon vilao
function AtacarPokemon() {
    disabledBotao(true)
    infoGamePokemon[1].vida -= infoGamePokemon[0].ataque
    AtualizarJogo()
    efeitoTelaCor(caixaPokemonVilao, "backgroundRed")
    validarVidaPokemon()
    setTimeout(() => {
        AtaqueDoVilao()
        efeitoTelaCor(caixaPokemonJogador, "backgroundRed")
        AtualizarJogo() 
        validarVidaPokemon()
    }, 1000)
    disabledBotao(false)
}
// função que dá poder de cura ao pokemon jogador e ataque do pokemon vilao
function CurarPokemon() {
    disabledBotao(true)
    infoGamePokemon[0].vida += 50
    AtualizarJogo()
    validarVidaPokemon() 
    efeitoTelaCor(caixaPokemonJogador, "backgroundGren")
    setTimeout(() => {
       AtaqueDoVilao()
       efeitoTelaCor(caixaPokemonJogador, "backgroundRed")
        AtualizarJogo() 
        validarVidaPokemon() 
    },1000)
    disabledBotao(false)
}
// função onload do arquivo html que renderiza os pokemons na tela 
function AtualizarJogo() {
    let nomePokemonEscolhido = document.querySelector(".nome-pokemon-jogador")
    let imgPokemonEscolhido = document.querySelector(".imagem-pokemon-jogador")
    let ataquePokemonEscolhido = document.querySelector(".ataque-pokemon-jogador")
    let vidaPokemonEscolhido = document.querySelector(".vida-pokemon-jogador")
    let nomePokemonVilao = document.querySelector(".nome-pokemon-vilao")
    let imgPokemonVilao = document.querySelector(".imagem-pokemon-vilao")
    let ataquePokemonVilao = document.querySelector(".ataque-pokemon-vilao")
    let vidaPokemonVilao = document.querySelector(".vida-pokemon-vilao")

    nomePokemonEscolhido.innerHTML = infoGamePokemon[0].pokeJogador
    ataquePokemonEscolhido.innerHTML = infoGamePokemon[0].ataque
    vidaPokemonEscolhido.innerHTML = infoGamePokemon[0].vida
    imgPokemonEscolhido.src = infoGamePokemon[0].src
    //   
    nomePokemonVilao.innerHTML = infoGamePokemon[1].pokeJogador
    ataquePokemonVilao.innerHTML = infoGamePokemon[1].ataque
    vidaPokemonVilao.innerHTML = infoGamePokemon[1].vida
    imgPokemonVilao.src = infoGamePokemon[1].src

}
    // função que renderiza a pagina de captura como vencedor 
function VitoriaGame () {
resulGame.innerHTML = "Voce Perdeu!!"
resulGame.style.color = "#ff0000"
abrirLanding()
}
    // função que renderiza a pagina de captura como derrota
function DerrotaGame () {
resulGame.innerHTML= "Voce Ganhou!!"
resulGame.style.color = "#228B22"
abrirLanding()
}
// função que chama a pagina de captura 
function abrirLanding () {return landPage.style.display = 'block'}

// função que valida se o pokemon está derrotado ou não.
function validarVidaPokemon() {
    if (infoGamePokemon[0].vida <= 0) {
        // a vida não pode ser negativa 
        infoGamePokemon[0].vida = 0
         // quando a vida for 0, vai renderizar a pagina de captura de fim de jogo
         VitoriaGame()
    } 

    if (infoGamePokemon[1].vida <= 0) {
        // a vida não pode ser negativa 
        infoGamePokemon[1].vida = 0
        // quando a vida for 0, vai renderizar a pagina de captura de fim de jogo
        DerrotaGame()
   }
}
// efeito para a div de pokemon ao realizar ataque ou cura
function efeitoTelaCor (xPokemon, tomDeTela ) {
        xPokemon.classList.add(tomDeTela)
        setTimeout(() => {
            xPokemon.classList.remove(tomDeTela)
        },1000)
} 
// função que traz a ação do pokemon vilão 
function AtaqueDoVilao () {
    return infoGamePokemon[0].vida -= infoGamePokemon[1].ataque
}
//função que desabilita os botoes enquanto há uma ação entre os pokemons e depois habilita na chamada 
function disabledBotao (x) {
    console.log("ação no botão")
    $('.btn').on('click',function() {
        $(this).prop("disabled",x);
    });
}

