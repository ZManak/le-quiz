//VALIDACIÓN DE FORMULARIOS

//document.querySelector("formulario").addEventListener("submit", function (event) {
    function validateForm() {
        let valueNeo = document.forms["formulario"]["neo"].value;
        if ((valueNeo) === respuestas.neo) {
          pintar(verde);
        }
      }
    //event.preventDefault();

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

   
    



