const vielasPoga = document.getElementById('vielas-poga');
const aprikojumsRindas = document.getElementsByClassName('aprikojums');
vielasPoga.addEventListener('click', function() {
    vielasPoga.classList.add('selected');
    for (let i = 0; i < aprikojumsRindas.length; i++) {
      //  if (aprikojumsRindas[i].classList.contains('slepts')) {
      //      aprikojumsRindas[i].classList.remove('slepts');
      //  } else {
      //      aprikojumsRindas[i].classList.add('slepts');
     //  var ar if, bet var ar toggle }
    aprikojumsRindas[i].classList.toggle('slepts');
    }
   
});

const aprikojumsPoga = document.getElementById('aprikojums-poga');
const vielasRindas = document.getElementsByClassName('viela');
aprikojumsPoga.addEventListener('click', function() {
    aprikojumsPoga.classList.add('selected');
    for (let i = 0; i < vielasRindas.length; i++) {
      
    vielasRindas[i].classList.toggle('slepts');
    }
   
});
