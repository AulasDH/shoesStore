const fs = require('fs');
const { uuid } = require('uuidv4');
const usuariosArquivo = require('../../usuarios.json');

const usuarioController = {
  criar: (request, response) => {
    const nomeArquivoUsuarios = 'usuarios.json';

    const usuarios = usuariosArquivo || [];

    // if (fs.existsSync(nomeArquivoUsuarios)) {
    //   usuarios.push(...JSON.parse(fs.readFileSync('usuarios.json', { encoding: 'utf-8' })));
    // }

    usuarios.push({ ...request.body, id: uuid() });

    fs.writeFileSync(nomeArquivoUsuarios, JSON.stringify(usuarios));

    response.status(201).redirect('/');
  }
}

module.exports = usuarioController