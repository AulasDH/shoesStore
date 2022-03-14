const sapatos = require('../../sapatos.json');

const mainController = {
  index: (request, response) => {
    response.render('index', {
      title: 'Express',
      sapatos,
      tituloPrincipal: 'encontre seu estilo',
      tituloSecundario: '30% OFF',
    });
  }
}

module.exports = mainController