
const BOM = 0;
const RUIM = 1;

const getAnswersQuestions = () => {
    return [
        {
            pergunta: "Você costuma praticar exercícios físicos ao menos 3 vezes por semana?",
            respostas:[{ resposta: "Sim", option: BOM}, {resposta: "Não", option: RUIM}],
            tipo: "atividade"
        },
        {
            pergunta: "A última vez que você praticou exercícios físicos, sentiu muita dor e cansaço? Se você nunca praticou exercícios físicos ou não se lembra se sentiu dores e cansaço a última vez que praticou, assinale a alternativa “Sim”.",
            respostas:[{ resposta: "Sim", option: RUIM}, {resposta: "Não", option: BOM}],
            tipo: "atividade"
        },
        {
            pergunta: "Quando você pratica ou praticou atividades físicas, prefere/preferiu pratica-las em grupo ou sozinho(a)?",
            respostas:[{resposta: "Em grupo", option:BOM}, {resposta: "Sozinho(a)",option: RUIM}],
            tipo: "atividade"
        },
        {
            pergunta: "Você já participou ou participa de algum grupo que envolva atividades físicas? (exemplo: dança, ginástica, natação, corrida etc.)",
            respostas:[{ resposta: "Sim", option: BOM}, {resposta: "Não", option: RUIM}],
            tipo: "atividade"
        },
        {
            pergunta: "Se você não pratica exercícios físicos regularmente, por que isso acontece? ",
            respostas:[{resposta: "Eu pratico exercícios físicos regularmente", option: BOM} ,{resposta: "Por questões econômicas (dinheiro)", option:RUIM}, {resposta: "Não tenho tempo", option:RUIM}, {resposta: "Não tenho vontade", option:RUIM}, {resposta : "Outro motivo", option:RUIM}],
            tipo: "atividade"
        },
        {
            pergunta: "Você costuma se estressar com facilidade?",
            respostas:[{ resposta: "Sim", option: RUIM}, {resposta: "Não", option: BOM}],
            tipo: "stress"
        },
        {
            pergunta: "Caso você se estresse com facilidade, qual o motivo?",
            respostas:[{resposta: "Questões familiares", option:RUIM}, {resposta: "Questões no trabalho", option:RUIM}, {resposta: "Não me estresso com facilidade", option:BOM}],
            tipo: "stress"            
        },
        {
            pergunta: "Existem alguns sintomas psicológicos que tem relação com o estresse, como queda de produtividade, dificuldade de concentração, autoestima baixa e dificuldade com a memória, você já sentiu algum desses sintomas?",
            respostas:[{resposta: "Sim, mas apenas alguns dos sintomas", option:RUIM}, {resposta: "Sim, já senti todos os sintomas", option:RUIM}, {resposta: "Não, não senti nenhum dos sintomas", option:BOM}],
            tipo: "stress"        
        },
        {
            pergunta: "Existem alguns sintomas físicos que tem relação com o estresse, como tensão muscular, dores de cabeça, dores de estômago ou gastrite e taquicardia, você já sentiu algum desses sintomas?",
            respostas:[{resposta :"Sim, mas apenas alguns dos sintomas", option:RUIM}, {resposta: "Sim, já senti todos os sintomas", option:RUIM}, {resposta: "Não, não senti nenhum dos sintomas", option:BOM}],
            tipo: "stress"
        },
        {
            pergunta: "Existem algumas técnicas que podem ser utilizadas para fazer a redução do estresse, como a meditação ou respiração. Você conhece esses métodos? Faz uso de algum?",
            respostas:[{resposta: "Não conheço e/ou nunca utilizei nenhuma técnica", option:RUIM}, {resposta: "Conheço e/ou utilizo alguma técnica com frequência", option: BOM}],
            tipo: "stress" 
        },
        {
            pergunta: "Você faz em média quantas refeições por dia?",
            respostas:[{resposta: "De duas a três", option: RUIM}, {resposta: "De quatro a seis", option: BOM}],
            tipo: "alimentação"
        },
        {
            pergunta: "Você costuma pular refeições, caso sim qual o motivo?",
            respostas:[{resposta: "Sim, costumo pular por questões econômicas", option: RUIM}, {resposta: "Sim, costumo pular por falta de tempo", option: RUIM}, {resposta: "Sim, costumo pular por falta de vontade", option: RUIM}, {resposta: "Não, não costumo pular", option: BOM}],
            tipo: "alimentação"
        },
        {
            pergunta: "Você consome com frequência alimentos ricos em nutrientes como o zinco? (São exemplos de alimentos ricos em zinco: gema de ovo, leite integral e amendoim).",
            respostas:[{resposta: "Sim, consumo com frequência", option: BOM}, {resposta: "Não, não consumo com frequência", option: RUIM}],
            tipo: "alimentação"
        },
        {
            pergunta: "Você consome com frequência alimentos com alto nível glicêmico? (São exemplos de alimentos glicêmicos farinha branca, açúcar refinado, arroz branco, refrigerante e bolacha recheada).",
            respostas:[{resposta: "Sim, consumo com frequência", option: RUIM}, {resposta: "Não, não consumo com frequência", option: BOM}],
            tipo: "alimentação"
        },
        {
            pergunta: "Você sentiu que seus hábitos alimentares mudaram, como por exemplo aumento ou diminuição de apetite?",
            respostas:[{resposta: "Sim, meus hábitos alimentares mudaram", option: RUIM}, {resposta: "Não, meus hábitos alimentares não mudaram", option: BOM}],
            tipo: "alimentação"
        }
    ]
}


export {getAnswersQuestions};