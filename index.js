const app = require('./app');
const express = require('express');
const router = express.Router();
const Controller = require('./controllers/Controllers');
const Middleware = require('./middlewares/middlewarePro');

require('dotenv').config();

router.get('/', (req, res) => res.status(200).send('API Projeto Final'));
router.get('/produtos', Controller.getAll);
router.post('/produtos', Middleware.validarNome ,Controller.createPro);
router.delete('/produtos/:id');
router.put('/produtos/:id', Middleware.validarNome);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

module.exports = router;