document.addEventListener('DOMContentLoaded', function() {
  console.log('Configurando o sidenav');
  var options = {};
  // busca todos os elementos que tem a classe .sidenav
  var elems = document.querySelectorAll('.sidenav');
  // Inicia o sidenav
  var instances = M.Sidenav.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var options = {
      fullWidth: true,
      indicators: true
    };
    var instances = M.Carousel.init(elems, options);
});
