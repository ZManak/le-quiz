# le-quiz
Cuestionario con validación de formulario

La web cuenta con una página landing que da la bienvenida e invita a completar un quiz al que se accede a través de un enlace.
Esta segunda página consta de un formulario con 10 preguntas, cada una de ellas con 4 respuestas posibles y solo 1 correcta.

El cuestionario está formulado a través de fieldsets con su correspondiente legend y una serie de inputs tipo radio, y está generado a través de una función que pinta los datos contenidos en un array de objetos, contenedor de las preguntas, las opciones y la respuesta correcta.

Un botón lanza en caso de click la función validación, que compara el valor del input seleccionado por el usuario con la propiedad respuesta correcta del objeto contenedor de data. Las respuestas correctas tendrán su el color de fondo de su legend en verde, las incorrectas en rojo. Otro botón refresca la página.

La página quiz contiene un audio en autoplay.
