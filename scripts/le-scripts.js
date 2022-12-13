/*function pintarLeQuiz (preguntas, lienzo, lienzoResults, enviar){

    function pintarPreguntas (){

    }

    function pintarResultados (preguntas, lienzo, lienzoResults){

    }

    pintarPreguntas (preguntas, lienzo);

    enviar.onclick = function(){
        pintarResultados (preguntas, lienzo, lienzoResults);
    }

}*/

const lasPreguntas = [
    {
        pregunta: "1. ¿Cuál es el nombre original del protagonista de Matrix, antes de convertirse en Neo?", 
        respuestas: [
            "James P. Quincy",
            "Arthur C. Clarke",
            "Thomas A. Anderson",
            "Lewis T. Chiral"
        ],
        correcta: "Thomas A. Anderson"
    }, 
    {
        pregunta: "2. Si te encontrases un caramelo raro, ¿en que juego estarías atrapado?", 
        respuestas: [
            "Final Fantasy",
            "Pokemon",
            "Fire Emblem",
            "Mario Kart"
        ],
        correcta: "Pokemon"
    }, 
    {
        pregunta: "3.¿De qué color es la materia oscura?", 
        respuestas: [
            "Gris oscuro",
            "Negro",
            "Azul oscuro",
            "Ninguno"
        ],
        correcta: "Ninguno"
    }, 
    {
        pregunta: "4. ¿Qué padeces si tienes un alto contenido de midiclorianos en sangre?", 
        respuestas: [
            "Final Fantasy",
            "Pokemon",
            "Fire Emblem",
            "Mario Kart"
        ],
        correcta: "Pokemon"
    },
    {
        pregunta: "5. ¿Qué padeces si tienes un alto contenido de midiclorianos en sangre?", 
        respuestas: [
            "Final Fantasy",
            "Pokemon",
            "Fire Emblem",
            "Mario Kart"
        ],
        correcta: "Pokemon"
    }, 
    {
        pregunta: "6. ¿Qué padeces si tienes un alto contenido de midiclorianos en sangre?", 
        respuestas: [
            "Final Fantasy",
            "Pokemon",
            "Fire Emblem",
            "Mario Kart"
        ],
        correcta: "Pokemon"
    }, 
    {
        pregunta: "7. ¿Qué padeces si tienes un alto contenido de midiclorianos en sangre?", 
        respuestas: [
            "Final Fantasy",
            "Pokemon",
            "Fire Emblem",
            "Mario Kart"
        ],
        correcta: "Pokemon"
    },
    {
        pregunta: "8. ¿Qué padeces si tienes un alto contenido de midiclorianos en sangre?", 
        respuestas: [
            "Final Fantasy",
            "Pokemon",
            "Fire Emblem",
            "Mario Kart"
        ],
        correcta: "Pokemon"
    }, 
    {
        pregunta: "9. ¿Qué padeces si tienes un alto contenido de midiclorianos en sangre?", 
        respuestas: [
            "Final Fantasy",
            "Pokemon",
            "Fire Emblem",
            "Mario Kart"
        ],
        correcta: "Pokemon"
    },
    {
        pregunta: '10. ¿Qué significa? "The Game" en el contexto del propio juego?', 
        respuestas: [
            "Tiempo muerto",
            "Falta",
            "Jaque",
            "Has perdido"
        ],
        correcta: "Has perdido"
    }
]

const principal = document.querySelector("main");
const lienzo = document.getElementById("le-quiz");

function pintarPreguntas(lienzo){
 
    for (let i = 0; i < lasPreguntas.length; i++) { 
        
        let div = document.createElement("div")

        let card =  `<article>
        <legend>${lasPreguntas[i].pregunta}</legend>
        
        <label for=${lasPreguntas[i].respuestas[0]}>${lasPreguntas[i].respuestas[0]}</label>
        <input id=${lasPreguntas[i].respuestas[0]} type="radio" name=${lasPreguntas[i].pregunta} value=${lasPreguntas[i].respuestas[0]}>

        <label for=${lasPreguntas[i].respuestas[1]}>${lasPreguntas[i].respuestas[1]}</label>
        <input id=${lasPreguntas[i].respuestas[1]} type="radio" name=${lasPreguntas[i].pregunta} value=${lasPreguntas[i].respuestas[1]}>
        
        <label for=${lasPreguntas[i].respuestas[2]}>${lasPreguntas[i].respuestas[2]}</label>
        <input id=${lasPreguntas[i].respuestas[2]} type="radio" name=${lasPreguntas[i].pregunta} value=${lasPreguntas[i].respuestas[2]}>
        
        <label for=${lasPreguntas[i].respuestas[3]}>${lasPreguntas[i].respuestas[3]}</label>
        <input id=${lasPreguntas[i].respuestas[3]} type="radio" name=${lasPreguntas[i].pregunta} value=${lasPreguntas[i].respuestas[3]}>
    </article>`
    
        div.innerHTML = card

        lienzo.appendChild(div)
    
    }
}

function pintarResultados(){
    const respuestas = [] 
    for (let i = 0; i < lasPreguntas.length; i++){
        selecciones.push(lasPreguntas[i].respuestas)
    }
    let userAnswer = "";

    for (let i = 0; i < lasPreguntas.length; i++) {
        userAnswer  = (respuestas[i].querySelector(`input[name=${lasPreguntas[i].correcta}]:checked`)||{}).value
    }

}

