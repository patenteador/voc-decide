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
                texto:" Uma reclamação sem sentido, coisa de gente fraca",
                afirmacao: " Para você o preconceito deve ser aceito na sociedade "
            },
            {
                texto:" Algo sério que precisa ser discutido ",
                afirmacao: " Preconceito é um grande problema da sociedade"
            }   
        ]
    },
    {
        enunciado: " Como o preconceito afeta a saúde mental das vítimas? ",
        alternativas: [
            {
                texto: " Afeta positivamente ,transformando os em pessoas blindadas",
                afirmacao: "resultado03"
            },
            {
                texto: " Afeta negativamente causando depressão, ansiedade, exclusão social, traumas e até suicidio.",
                afirmacao: "resultado 04"
            }
        ]
    },
    {
        enunciado: " Como devemos reagir ao vermos uma pessoa sofrendo preconceito ",
        alternativas: [
            {
                texto: " Oferecer apoio a vítima, e interver o ato usando uma abordagem calma, racional e com autoridade",
                afirmacao: "resultado 05"
            },
            {
                texto: "alternativa 06",
                afirmacao: "resultado 06"
            }
        ]
    },
    {
        enunciado: "Enunciado 04",
        alternativas: [
            {
                texto: "alternativa 07",
                afirmacao: "resultado 07"
            },
            {
                texto: "alternativa 08",
                afirmacao: "resultado 08"
            }
        ]
    },
    {
        enunciado: "Enunciado 05",
        alternativas: [
            {
                texto: "alternativa 09",
                afirmacao: "resultado 09"
            },
            {
                texto: "alternativa 10",
                afirmacao: "resultado 10"
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