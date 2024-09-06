const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: " O que é o preconceito para você?",
        alternativas: [
            {
                texto:"Algo sério que precisa ser discutido",
                afirmacao: "Preconceito é um grande problema da sociedade  "
            },
            {
                texto:"Uma reclamação sem sentido, coisa de gente fraca ",
                afirmacao: "Para você o preconceito deve ser aceito na sociedade e"
            }   
        ]
    },
    {
        enunciado: " Como o preconceito afeta a saúde mental das vítimas? ",
        alternativas: [
            {
                texto: "Afeta negativamente causando depressão, ansiedade, exclusão social, traumas e até suicidio.  ",
                afirmacao: " que vem afetando negativamente as pessoas,"
            },
            {
                texto: "Afeta positivamente ,transformando as em pessoas blindadas",
                afirmacao: "afeta positivamente ,transformando as vitimas em pessoas com mentes blindadas,"
            }
        ]
    },
    {
        enunciado: " Como devemos reagir ao vermos uma pessoa sofrendo preconceito?",
        alternativas: [
            {
                texto: " Oferecer apoio a vítima, e intervir o ato usando uma abordagem calma, racional e com autoridade",
                afirmacao: " deve ser combatido com educação, promover por meio de ideias, uma autocritica no agressor."
            },
            {
                texto: "agir indiferentemente, agir como se fosse brincadeira",
                afirmacao: " sendo apenas uma brincadeira."
            }
        ]
    },
    {
        enunciado: "Quais políticas públicas podem ser tomadas no combate ao bullying",
        alternativas: [
            {
                texto: "Campanhas de conscientização, prevenção e leis anti-bullying",
                afirmacao: "É necessário também campanhas de conscientização, prevenção e leis anti-bullying."
            },
            {
                texto: "normalizar como uma simples socialização ",
                afirmacao: " essa socialização é necessária e deve ser normalizada"
            }
        ]
    },
    {
        enunciado: " Vocẽ acha que o preconceito influência na educação das gerações futuras? ",
        alternativas: [
            {
                texto: "Sim, acabam transmitindo as criancas e moldando suas personalidades limitando sua capacidade de empatia e de aceitar a diversidade",
                afirmacao: " Esse preconceito a longo prazo molda negativamente a mente da população e limita a capacide de empatia e a diversidade."
            },
            {
                texto: "Não, influencia positivamente fortalecendo a mente da populaçao.",
                afirmacao: " sendo necessario para o crescimento da sociedade"
            } 
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPerguntas(){
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostrarPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = " Inicio do texto... "
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();