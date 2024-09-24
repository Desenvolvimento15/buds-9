$(document).ready(function() {
    const $slides = $('#slides');
    const $dotsContainer = $('#dots-container');
    const $textItem = $('#text-item');

    const slideTexts = ["Texto do Item 01", "Texto do Item 02", "Texto do Item 03", "Texto do Item 04"];

    let currentSlide = 0;

    function showSlide(index) {
      $slides.css('transform', `translateX(${-index * 100}%)`);
      $textItem.text(slideTexts[index]);

      $('.dot').each(function(i, dot) {
        $(dot).toggleClass('active', i === index);
      });
    }

    function createDots() {
      for (let i = 0; i < slideTexts.length; i++) {
        const $dot = $('<span>').addClass('dot').on('click', () => showSlide(i));
        $dotsContainer.append($dot);
      }
    }

    function autoPlay() {
      setInterval(() => {
        currentSlide = (currentSlide + 1) % slideTexts.length;
        showSlide(currentSlide);
      }, 1000); // Altera o slide a cada 3 segundos
    }

    createDots();
    showSlide(currentSlide);
    autoPlay();
  });


  let slideIndex = 0;
showSlides();

function changeSlide(n) {
    slideIndex += n - 1;
    showSlides();
}



function showSlides() {
    let slides = document.getElementsByClassName("slide-tree");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Altera o slide a cada 3 segundos
}