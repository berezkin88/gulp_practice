//=require components/**.*

$(window).ready(function() {
    menuShow();

    $('.intro-list').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false
      });

      $('.fetures-items').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false
      });

      $('.team-people').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false
      });

      filter();
})

