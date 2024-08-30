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
        enunciado: " Como devemos reagir ao vermos uma pessoa sofrendo preconceito?",
        alternativas: [
            {
                texto: " Oferecer apoio a vítima, e intervir o ato usando uma abordagem calma, racional e com autoridade",
                afirmacao: "resultado 05"
            },
            {
                texto: "agir indiferentemente, agir como se fosse brincadeira",
                afirmacao: "resultado 06"
            }
        ]
    },
    {
        enunciado: "Quais políticas públicas podem ser tomadas no combate ao bullying",
        alternativas: [
            {
                texto: "",
                afirmacao: " Campanhas de conscientização, prevenção e leis anti-bullying"
            },
            {
                texto: "normalizar como uma simples socialização ",
                afirmacao: "resultado 08"
            }
        ]
    },
    {
        enunciado: " Vocẽ acha que o preconceito influência na educação das gerações futuras? ",
        alternativas: [
            {
                texto: "Sim, reforço",
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