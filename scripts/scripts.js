//VALIDACIÓN DE FORMULARIOS

//document.querySelector("formulario").addEventListener("submit", function (event) {
  /*<form
  name="the-form"
  action="/action_page.php"
  onsubmit="return validateInput()"
  method="post"
>
  <label id="your-name">Tu nombre:</label>
  <input type="text" name="your-name" id="your-name" />
  <input type="submit" value="Submit" />
</form>
  function validateInput() {
    let name = document.forms["the-form"]["your-name"].value;
    if (name == "") {
      alert("Debes rellenar este campo");
      return false;
    }
  }*/

      function validateForm() {
        //for (let i = 0; i < quest.length; i++) {
        let valueNeo = document.querySelectorAll("input[name=neo]");
        console.log(valueNeo);
        let valueCaramelo = document.forms["formulario"]["caramelo"].value;
        let valueMateria = document.forms["formulario"]["materia"].value;
        let valueMidi = document.forms["formulario"]["midi"].value;
        }
        if (valueNeo === respuestas.neo) {
          pintar(verde);
        } else {
          pintar(rojo)
        }
    
      //event.preventDefault();
    /*const quest = [
      {
        pregunta: "1. ¿Cuál es el nombre original del protagonista de Matrix, antes de convertirse en Neo?",
        name: "neo"
        opciones: ["James P. Quincy",
        
        

        resp = 
      }
    ]*/

    const respuestas = {
        neo: "thomas",
        caramelo: "pokemon",
        materia: "ninguno",
        midi: "fuerza",
        shelley: "corazon",
        hesse: "jung",
        disney: "caldero",
        cannibal: "hole",
        jupiter: "79",
        game: "perdido"
    }

    /*PINTAR PREGUNTAS
    let card =  <article>
        <legend>${quest[i].pregunta}</legend>
        <label for=${quest[i].op1[0]}>${quest[i].op1[1]}</label>
        <input id=${quest[i].op1} type="radio" name=${quest[i].name} value=${quest.op1}>
        <label for=${quest[i].op2}>${quest[i].op2.name}</label>
        <input id=${quest[i].op2} type="radio" name=${quest.op2} value=${quest.op2}>
        <label for=${quest[i].op3}>${quest[i].op3.name}</label>
        <input id=${quest[i].op3} type="radio" name=${quest.op3} value=${quest.op3}>
        <label for=${quest[i].op4}>${quest[i].op4.name}</label>
        <input id=${quest[i].op4} type="radio" name=${quest.o4} value=${quest.op4}>
    </article>

  document.body.innerHTML = card*/
   
    



