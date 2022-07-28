var inputs = document.getElementsByClassName('form-input');
for (var i=0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');

        }else{
            this.nextElementSibling.classList.remove('fijar'); 
        }
    });
}
/*obtengo todos los elementgos de los input, recorro la misma cantidad de veces que se obtuvo por elemento, escucho el evento cuando suelto una tecla,evaluo si el valor del input en >= 1 selecciona el sig elemento y agrego la clase fijar, que hace que se vaya arriba.*/