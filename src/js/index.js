/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionado
    - passo 5 - esconder a imagem anteriormente selecionada
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    - passo 7 - esconder a informação do dragão anteriormente selecionado
    - passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

//- passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");
// - passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        //remove marcação do ultimo botão
        let botaoSelec = document.querySelector('.selecionado')
        botaoSelec.classList.remove('selecionado')

        //oculta ultima img
        let imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");

        //oculta infomações 
        let informacoesAtiva = document.querySelector(".informacoes.ativa");
        informacoesAtiva.classList.remove("ativa");
        // Linhas:29-31 |Ativa o contéudo selecionado
        botao.classList.add('selecionado')
        imagens[indice].classList.add('ativa')
        informacoes[indice].classList.add('ativa')

        document.documentElement.style.setProperty('--corAtiva', `var(--dg${indice})`)
        //Abaixo funções da versão antiga em ordem.
        /* desativarBotaoSelecionado();
        marcarBotaoSelecionado(botao);
        esconderImagemAtiva();
        mostrarImagemDeFundo(indice);
        esconderInformacoesAtivas();
        mostrarInformacoes(indice); */
    });
});

/* function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    let informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    let imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    let botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
} */