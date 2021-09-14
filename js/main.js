/*document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalDialog = $('.modal__dialog');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  const closeModal = () => {
    modal.classList.remove('modal--visible');
  }
  
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  document.addEventListener('keyup', function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  modal.addEventListener('click', function (e) {
    if (e.target != modalDialog[0] && modalDialog.has(e.target).length === 0) {
      closeModal();
    } 
  });
}); */


$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
      modalDialog = $('.modal__dialog');
  const closeModal = () => {
        modal.removeClass('modal--visible');
      }
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  $(document).on('keyup', function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  modal.on('click', function (e) {
    if (e.target != modalDialog[0] && modalDialog.has(e.target).length === 0) {
      closeModal();
    } 
  });

  $(window).on('scroll', function(){
    var control = $('.control').offset().top;
    if ( $(window).scrollTop() > control) {
      $('.hero__scroll-up').addClass('active');
    } else {
      $('.hero__scroll-up').removeClass('active');
    }
  });
    

  $('.hero__scroll-up').on('click', function(e){
    e.preventDefault();
    $('html,body').stop().animate({
      scrollTop: 0
    }, 1000);
  });
  
});