const fs = require('fs');
const sapatosArquivo = require('../../sapatos.json');

const sapatoController = {
  index: (request, response) => {
    response.render('cadastroSapato', {
      title: 'Express',
    });
  },
  criar: (request, response) => {
    const nomeArquivoUsuarios = 'usuarios.json';

    const sapatos = sapatosArquivo || [];

    sapatos.push(request.body);

    fs.writeFileSync(nomeArquivoUsuarios, JSON.stringify(sapatos));

    response.status(201).redirect('/');
  }
}

module.exports = sapatoController;