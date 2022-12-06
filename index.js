const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 4000;
const Produto = require('./models/Produto')

app.set("view engine", "ejs")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors())

app.get('/', async function (req, res){
    const response = await Produto.findAll()
    res.json(response)
})

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:' + PORT)
  })