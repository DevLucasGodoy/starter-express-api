const connection = require('./connection');

const getAll = async () => {
    const [produtos] = await connection.execute('SELECT * FROM produtos');
    return produtos;
  };

const createPro = async (produtos) => {
    const { id, nome, preco, descricao, quantidade, imagem } = produtos;
    const query = 'INSERT INTO produtos(id, nome, preco, descricao, quantidade, imagem) VALUES (?, ?, ?, ?, ?, ?)';
    const [createPro] = await connection.execute(query, [id, nome, preco, descricao, quantidade, imagem]);
    return createPro;
  };
  
  const deletePro = async (id) => {
    const [removePro] = await connection.execute('DELETE FROM produtos WHERE id = ?', [id]);
    return removePro;
  };
  
  const updatePro = async (id, produtos) => {
    const { nome, preco, descricao, quantidade, imagem } = produtos;
    const query = 'UPDATE produtos SET nome = ?, preco = ?, descricao = ?, quantidade = ?, imagem = ? WHERE id = ?';
    const [updatePro] = await connection.execute(query, [nome, preco, descricao, quantidade, imagem, id]);
    return updatePro;
  };
  
  module.exports = {
    getAll,
    createPro,
    deletePro,
    updatePro,
  };