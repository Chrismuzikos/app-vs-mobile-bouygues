var timer; //var for reload page

$( document ).ready(function() {
  window.mySwipe = new Swipe(document.getElementById('slider'), {
    // speed: 300,
    // auto: 5000, // define duration slide
    continuous: true,
    disableScroll: true,
    stopPropagation: false,
    callback: function(index, elem) {
      // Reload page after 30s inactivity
      window.clearTimeout(timer);
      timer = window.setTimeout(function(){ document.location.href = 'index.html'; },30000);
    },
    transitionEnd: function(index, elem) {
    }
  });
});
