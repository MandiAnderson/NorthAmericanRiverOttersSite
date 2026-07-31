try {
  $(".automatic-ripples").ripples({
    resolution: 1080,
    perturbance: 0.5,
    interactive: true
  });
  $(".hover").ripples({
    resolution: 1080,
    perturbance: 0.5,
    interactive: true
  });
} catch (e) {
  $(".error")
    .show()
    .text(e);
}

setInterval(function() {
  var $el = $(".automatic-ripples");
  var x = Math.random() * $el.outerWidth();
  var y = Math.random() * $el.outerHeight();
  var dropRadius = 30;
  var strength = 0.2 + Math.random() * 0.2;

  $el.ripples("drop", x, y, dropRadius, strength);
}, 1000);
