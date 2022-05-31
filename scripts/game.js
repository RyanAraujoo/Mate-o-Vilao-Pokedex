// pegar informação através do localStorage */
var select = localStorage.getItem("select")

// pegando informações dos pokemons se atualiza los na raiz
let ataqueJogador = infoPokers[select.value].ataque
let vidaJogador = infoPokers[select.value].vida
let vidaVilao = infoPokers[select.value].vida
let ataqueVilao = infoPokers[select.value].ataque

// ponto de acesso as informações dos pokemons */
var infoGamePokemon = [
    {
        pokeJogador: "Jogador",
        ataque: ataqueJogador,
        vida: vidaJogador
    }, 
    {
        pokeJogador: "Vilao",
        ataque: ataqueVilao,
        vida: vidaVilao
    }
]

//divs (caixa) dos campos que guardam as informações do pokemon jogador
var ataquePokemonEscolhido = document.querySelector(".ataque-pokemon-jogador")
var vidaPokemonEscolhido = document.querySelector(".vida-pokemon-jogador")
//divs (caixa) dos campos que guardam as informações do pokemon vilao
var ataquePokemonVilao = document.querySelector(".ataque-pokemon-vilao")
var vidaPokemonVilao = document.querySelector(".vida-pokemon-vilao")

// função que dá funcionalidade ao ataque do pokemon jogador e ao pokemon vilao
function AtacarPokemon() {
    infoGamePokemon[1].vida -= infoGamePokemon[0].ataque

    if (infoGamePokemon[1].vida <= 0) {
        // a vida não pode ser negativa 
        infoGamePokemon[1].vida = 0
        // quando a vida for 0, vai renderizar a pagina de captura de fim de jogo
        renderizarLandingPageGame()
   }
    
    setTimeout(() => {
        infoGamePokemon[0].vida -= infoGamePokemon[1].ataque
    }, 4000)

    if (infoGamePokemon[0].vida <= 0) {
        // a vida não pode ser negativa 
        infoGamePokemon[0].vida = 0
         // quando a vida for 0, vai renderizar a pagina de captura de fim de jogo
        renderizarLandingPageGame()
    } 
}
// função que dá poder de cura ao pokemon jogador e ataque do pokemon vilao
function CurarPokemon() {
    infoGamePokemon[0].vida += 50 

    if (infoGamePokemon[0].vida >= vidaJogador) {
        //a vida não pode ultrapassar seu nível de vida normal  
        infoGamePokemon[0].vida = vidaJogador
    }

    setTimeout(() => {
        // turno do pokemon vilao e ele te ataca 
        infoGamePokemon[0].vida -= infoGamePokemon[1].ataque
    }, 4000)
}
// função onload do arquivo html que renderiza os pokemons na tela 
function IniciarJogo() {
    
    let nomePokemonEscolhido = document.querySelector(".nome-pokemon-jogador")
    let imgPokemonEscolhido = document.querySelector(".imagem-pokemon-jogador")
    
    let nomePokemonVilao = document.querySelector(".nome-pokemon-vilao")
    let imgPokemonVilao = document.querySelector(".imagem-pokemon-vilao")
    //
    nomePokemonEscolhido.innerHTML = infoPokers[select.value].nome
    ataquePokemonEscolhido.innerHTML = infoGamePokemon[0].ataque
    vidaPokemonEscolhido.innerHTML = infoGamePokemon[0].vida
    imgPokemonEscolhido.src = infoPokers[select.value].src
    //   
    nomePokemonVilao.innerHTML = infoPokers[9].nome
    ataquePokemonVilao.innerHTML = infoGamePokemon[1].ataque
    vidaPokemonVilao.innerHTML = infoGamePokemon[1].vida
    imgPokemonVilao.src = infoPokers[9].src

}
    // função que renderiza a pagina de captura do fim de jogo sendo vencedor ou perdedor.
function renderizarLandingPageGame () {

}