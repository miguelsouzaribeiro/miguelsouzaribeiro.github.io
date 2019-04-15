function ligarTorradeira()
{
  $( ".alavanca" ).animate({
    bottom: "80",
  }, 1000);

  $( ".pao" ).animate({
    bottom: "80",
  }, 1000);

  /*
  $( ".alavanca" ).animate({
  bottom: "80",
}, 1000, function() {
// Animation complete.
});

$( ".pao" ).animate({
bottom: "80",
}, 1000, function() {
// Animation complete.
});


$( ".alavanca" ).animate({
bottom: "220",
}, 250, function() {
// Animation complete.
});

$( ".pao" ).animate({
bottom: "250",
}, 250, function() {
// Animation complete.
});
*/

tostar();
}

function tostar() {
  setTimeout( function() {
    $(".pao").addClass( "tostado" );
  }, 1000 );
  setTimeout( desligarTorradeira, 3000 );
}

function trocaPao() {
  $(".pao").removeClass( "tostado" );
  $(".pao").animate({
  }, 100);
}

function desligarTorradeira() {
  //$( ".alavanca" ).removeClass( "ligada" );
  $( ".alavanca" ).animate({
    bottom: "220",
  }, 500, function() {
    // Animation complete.
  });

  $( ".pao" ).animate({
    bottom: "250",
  }, 500, function() {
    // Animation complete.
  });

  setTimeout( trocaPao, 3000 );
}
