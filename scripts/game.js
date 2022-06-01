// pegar informação através do localStorage */

var infoPokersGame = JSON.parse(sessionStorage.infoPokers)

console.log(infoPokersGame[9].nome)
// pegando informações dos pokemons se atualiza los na raiz
let nomePokemonJogador = infoPokersGame[sessionStorage.select].nome
let ataqueJogador = infoPokersGame[sessionStorage.select].ataque
let vidaJogador = infoPokersGame[sessionStorage.select].vida
let imgPokerJogador = infoPokersGame[sessionStorage.select].src
let nomePokemonVilao = infoPokersGame[9].nome
let vidaVilao = infoPokersGame[9].vida
let ataqueVilao = infoPokersGame[9].ataque
let imgPokerVilao = infoPokersGame[9].src

var statusGame = document.querySelector(".statusGame").innerHTML = "Que começem os jogos!"
// ponto de acesso as informações dos pokemons */
var infoGamePokemon = [
    {
        pokeJogador: nomePokemonJogador,
        ataque: ataqueJogador,
        vida: vidaJogador,
        src: imgPokerJogador
    }, 
    {
        pokeJogador: nomePokemonVilao,
        ataque: ataqueVilao,
        vida: vidaVilao,
        src: imgPokerVilao
    }
]

let caixaPokemonJogador = document.getElementById("pokemon-jogador")
let caixaPokemonVilao = document.getElementById("pokemon-vilao")

//divs (caixa) dos campos que guardam as informações do pokemon jogador
var ataquePokemonEscolhido = document.querySelector(".ataque-pokemon-jogador")
var vidaPokemonEscolhido = document.querySelector(".vida-pokemon-jogador")
//divs (caixa) dos campos que guardam as informações do pokemon vilao
var ataquePokemonVilao = document.querySelector(".ataque-pokemon-vilao")
var vidaPokemonVilao = document.querySelector(".vida-pokemon-vilao")

// função que dá funcionalidade ao ataque do pokemon jogador e ao pokemon vilao
function AtacarPokemon() {
    infoGamePokemon[1].vida -= infoGamePokemon[0].ataque
    AtualizarJogo()
    efeitoTela(caixaPokemonVilao, "backgroundRed")
    validarVidaPokemon()
    setTimeout(() => {
        infoGamePokemon[0].vida -= infoGamePokemon[1].ataque
        efeitoTela(caixaPokemonJogador, "backgroundRed")
        AtualizarJogo() 
        validarVidaPokemon()
    }, 1000)
}
// função que dá poder de cura ao pokemon jogador e ataque do pokemon vilao
function CurarPokemon() {
    infoGamePokemon[0].vida += 50
    AtualizarJogo()
    validarVidaPokemon() 
    efeitoTela(caixaPokemonJogador, "backgroundGren")
    setTimeout(() => {
        infoGamePokemon[0].vida -= infoGamePokemon[1].ataque
       efeitoTela(caixaPokemonJogador, "backgroundRed")
        AtualizarJogo() 
        validarVidaPokemon() 
    },1000)
}
// função onload do arquivo html que renderiza os pokemons na tela 
function AtualizarJogo() {
    
    let nomePokemonEscolhido = document.querySelector(".nome-pokemon-jogador")
    let imgPokemonEscolhido = document.querySelector(".imagem-pokemon-jogador")
    
    let nomePokemonVilao = document.querySelector(".nome-pokemon-vilao")
    let imgPokemonVilao = document.querySelector(".imagem-pokemon-vilao")

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
    // função que renderiza a pagina de captura do fim de jogo sendo vencedor ou perdedor.
    var landPage = document.querySelector(".landing-page")
    var resulGame = document.querySelector(".resultado-game")
    
function VitoriaGame () {
resulGame.innerHTML = "Voce Perdeu!!"
resulGame.style.color = "#ff0000"
abrirLanding()
}

function DerrotaGame () {
resulGame.innerHTML= "Voce Ganhou!!"
resulGame.style.color = "#228B22"
abrirLanding()
}
function abrirLanding () {return landPage.style.display = 'block'}

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

function efeitoTela (xPokemon, tomDeTela ) {
        xPokemon.classList.add(tomDeTela)
        setTimeout(() => {
            xPokemon.classList.remove(tomDeTela)
        },1000)
} 

