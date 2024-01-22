document.addEventListener("DOMContentLoaded", function () {
    // Agrega un evento para cargar el reproductor cuando el DOM esté listo

    // Encuentra el contenedor del reproductor y el video
    const playerContainer = document.querySelector('.yt-style-player');
    const videoContainer = document.querySelector('.video-container');

    // Crea el reproductor de video
    const videoPlayer = document.createElement('video');
    videoPlayer.src = 'https://vod.vodgc.net/gid4/vod/TRISA/TyC___Sports/87/11-13605-663017-fOUxXw1704911238881_1080P.mp4';
    videoPlayer.controls = true;

    // Agrega el reproductor al contenedor del video
    videoContainer.appendChild(videoPlayer);

    // Añade eventos adicionales o personalizaciones según sea necesario
});