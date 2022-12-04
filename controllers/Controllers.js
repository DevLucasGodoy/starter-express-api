const { response } = require("express");
const Model = require('../models/Model');

const getAll = async (_require, response) => {
    const Models = await Model.getAll();
    return response.status(200).json(Models);
};

const createPro = async (request, response) => {
    const createProd = await Model.createPro(request.body);
    return response.status(201).json(createProd);
};

const deletePro = async (request, response) => {
    const { id } = request.params;
    await Model.deletePro(id);
    return response.status(204).json();
  };
  
  const updatePro = async (request, response) => {
    const { id } = request.params;
    await Model.updatePro(id, request.body);
    return response.status(204).json();
  };

module.exports ={
    getAll,
    createPro,
    deletePro,
    updatePro,
};
