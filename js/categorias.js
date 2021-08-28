const categorias = document.querySelectorAll('#categorias .categoria');
console.log(categorias);

const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');
let categoriaActiva = null;

categorias.forEach((categoria) => {
	categoria.addEventListener('click', (e) => {
        categorias.forEach((elemento) => {
            elemento.classList.remove(`activa`);
        });
        e.currentTarget.classList.toggle('activa');
        categoriaActiva = categoria.dataset.categoria;

        //Activamos el contenedor de preguntas con el sigueinte codigo
        contenedorPreguntas.forEach((contenedor) => {
            if(contenedor.dataset.categoria === categoriaActiva){
                contenedor.classList.add('activo');
            }else{
                contenedor.classList.remove('activo');
            }
        });
	});
});