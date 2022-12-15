const lasPreguntas = [
    {
        pregunta: "1. ¿Cuál es el nombre original del protagonista de Matrix, antes de convertirse en Neo?", 
        respuestas: [
            "James P. Quincy",
            "Arthur C. Clarke",
            "Thomas A. Anderson",
            "Lewis T. Chiral"
        ],
        correcta: "Thomas"
    }, 
    {
        pregunta: "2. Si te encontrases un caramelo raro, ¿en qué juego estarías atrapado?", 
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
            "Los designios de la fuerza",
            "Diabetes",
            "Trombosis",
            "Hemofilia"
        ],
        correcta: "Los"
    },
    {
        pregunta:'5. ¿Qué parte de su marido muerto solía llevar encima Mary Shelley, autora de "Frankestein, o el moderno Prometeo"?', 
        respuestas: [
            "La cabeza",
            "Los genitales",
            "Los dientes",
            "El corazón"
        ],
        correcta: "El"
    }, 
    {
        pregunta: "6. El escritor Herman Hesse mantuvo una estrecha relación con otra eminencia de su época, que influyó notablemente en su obra. Esta persona es...", 
        respuestas: [
            "Marie Curie",
            "Albert Einstein",
            "Carl Jung",
            "Ernst Jünger"
        ],
        correcta: "Carl"
    }, 
    {
        pregunta: '7. ¿Cuál es la primera película de Disney no calificada "para todos los públicos"?', 
        respuestas: [
            "Taron y el caldero mágico",
            "Blancanieves",
            "La bella durmiente",
            "Fantasia"
        ],
        correcta: "Taron"
    },
    {
        pregunta: '8. ¿Cuál de los siguientes temas no pertenece a la banda "Cannibal Corpse?"', 
        respuestas: [
            "Hammer Smashed Face",
            "Evisceration Plague",
            "Shredded Humans",
            "A Hole Full of Corpses"
        ],
        correcta: "A"
    }, 
    {
        pregunta: "9.¿Cuántas lunas registradas tiene Júpiter?", 
        respuestas: [
            "79",
            "52",
            "64",
            "38"
        ],
        correcta: "79"
    },
    {
        pregunta: '10. ¿Qué significa "The Game", en el contexto del propio juego?', 
        respuestas: [
            "Tiempo muerto",
            "Falta",
            "Jaque",
            "Has perdido"
        ],
        correcta: "Has"
    }
]

const principal = document.querySelector("main");
const lienzo = document.getElementById("le-quiz");

function pintarPreguntas(lienzo){
 
    for (let i = 0; i < lasPreguntas.length; i++) { 
        
        let div = document.createElement("div")

               
    let card =  `<article>
        <fieldset>
        <legend id=`+i+`>${lasPreguntas[i].pregunta}</legend>
        <div>
        <input id=${lasPreguntas[i].respuestas[0]} type="radio" name=pregunta`+[i]+` value=${lasPreguntas[i].respuestas[0]}>
        <label for=${lasPreguntas[i].respuestas[0]}>${lasPreguntas[i].respuestas[0]}</label>
        </div>
        <div>
        <input id=${lasPreguntas[i].respuestas[1]} type="radio" name=pregunta`+[i]+` value=${lasPreguntas[i].respuestas[1]}>
        <label for=${lasPreguntas[i].respuestas[1]}>${lasPreguntas[i].respuestas[1]}</label>
        </div>
        <div>
        <input id=${lasPreguntas[i].respuestas[2]} type="radio" name=pregunta`+[i]+` value=${lasPreguntas[i].respuestas[2]}>
        <label for=${lasPreguntas[i].respuestas[2]}>${lasPreguntas[i].respuestas[2]}</label>
        </div>
        <div>
        <input id=${lasPreguntas[i].respuestas[3]} type="radio" name=pregunta`+[i]+` value=${lasPreguntas[i].respuestas[3]}>
        <label for=${lasPreguntas[i].respuestas[3]}>${lasPreguntas[i].respuestas[3]}</label>
        </div>
        </fieldset>
    </article>`
    
        div.innerHTML = card

        lienzo.appendChild(div)
    
    }
}

function pintarResultados(){
    
    let checkTodas = document.querySelectorAll("input:checked")

    if (checkTodas.length !== lasPreguntas.length){
        alert("Responde a todas las preguntas");
    } else {

    for (let i = 0; i < lasPreguntas.length; i++) {
        let userAnswer  = document.querySelector("input[name=pregunta"+i+"]:checked").value;    

        if (userAnswer === lasPreguntas[i].correcta){
            let label = document.getElementById(""+i)
            label.style.backgroundColor = "green";
        } else {
            let label = document.getElementById(""+i)
            label.style.backgroundColor = "red";
        }

    }}
    }
    function refresh(){
        document.location.reload(true);
    }

    pintarPreguntas(lienzo)

    document.getElementById("submit").addEventListener("click", pintarResultados)
    document.getElementById("retry").addEventListener("click", refresh)