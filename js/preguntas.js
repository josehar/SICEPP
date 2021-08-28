//En este codigo haremos la funcion para que al momento de dar click a la pregunta, aparezca la respuesta
const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
//Con este codigo hace que funciones las respuestas
preguntas.forEach((pregunta)=>{ 
    pregunta.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('activa');
    
    const respuesta = pregunta.querySelector('.respuesta');
    const alturaRealRespuesta = respuesta.scrollHeight;
    
    if(!respuesta.style.maxHeight){
        respuesta.style.maxHeight = alturaRealRespuesta + 'px';

    }else {
        respuesta.style.maxHeight = null;

    }
    });
});