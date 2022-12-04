const validarNome = (request, response, next) => {
    const { body } = request;
    if (body.nome === undefined) {
      return response.status(400).json({ message: 'The field "nome" is required' });
    }
    if (body.nome === '') {
      return response.status(400).json({ message: 'nome cannot be empty' });
    }
    next();
};
  
const validarPreco = (request, response, next) => {
    const { body } = request;
    if (body.preco === undefined) {
      return response.status(400).json({ message: 'The field "preco" is required' });
    }
    if (body.preco === '') {
      return response.status(400).json({ message: 'preco cannot be empty' });
    }
    next();
};

const validarDescricao = (request, response, next) => {
    const { body } = request;
    if (body.descricao === undefined) {
      return response.status(400).json({ message: 'The field "descricao" is required' });
    }
    if (body.descricao === '') {
      return response.status(400).json({ message: 'descricao cannot be empty' });
    }
    next();
};

const validarQuantidade = (request, response, next) => {
    const { body } = request;
    if (body.quantidade === undefined) {
      return response.status(400).json({ message: 'The field "quantidade" is required' });
    }
    if (body.quantidade === '') {
      return response.status(400).json({ message: 'quantidade cannot be empty' });
    }
    next();
};

const validarImagem = (request, response, next) => {
    const { body } = request;
    if (body.imagem === undefined) {
      return response.status(400).json({ message: 'The field "imagem" is required' });
    }
    if (body.imagem === '') {
      return response.status(400).json({ message: 'imagem cannot be empty' });
    }
    next();
};
  
module.exports = {
    validarNome,
    validarPreco,
    validarDescricao,
    validarQuantidade,
    validarImagem,
  };