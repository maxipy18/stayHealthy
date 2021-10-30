
// запуск слайдера

$(document).ready(function(){
    $('.slider').slick({
        infinity: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });
  });


// обработка событий видео

  const videoBtn = document.querySelector('.video-btn');
  const videoBtnIcon = document.querySelector('.video-btn-icon');  
  const videoOverlay = document.querySelector('.video-overlay');
  const videoFile = document.querySelector('.video');


  function toggleOverlay(event){
    if (event.type === 'mouseleave') {
        videoOverlay.classList.add('hidden');
    } else {
        videoOverlay.classList.remove('hidden');
    }
}

  videoBtn.addEventListener('click', function(){

      if (videoFile.paused){
          videoFile.play();
          videoBtnIcon.src = "./video/pause-btn.svg";
          videoOverlay.onmouseleave = toggleOverlay; // курсор покидает границы элемента(оверлей)
          videoOverlay.onmouseenter = toggleOverlay; // наведение курсора на элемент(оверлей)

      } else {

          videoFile.pause();
          videoBtnIcon.src = "./video/play-btn.svg";
            /* отменяем обработчик, что бы оверлей не пропадал
            при постановке видео на паузу*/
          videoOverlay.onmouseleave = null;
          videoOverlay.onmouseenter = null;

      }
  });

