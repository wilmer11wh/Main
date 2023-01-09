
let botonVideo = document.getElementById("botonVideo");
let resultadosVideos = document.getElementById("resultadosVideos");


botonVideo.addEventListener('click', toggleVideo);

function toggleVideo(){
    if(resultadosVideos.classList.contains('show')){
        resultadosVideos.classList.remove('show');
        resultadosVideos.classList.add('hide');

        botonVideo.innerHTML = 'Ver más';

    }else{
        resultadosVideos.classList.add('show');
        resultadosVideos.classList.remove('hide');

        botonVideo.innerHTML = 'Ver menos';
    }
}