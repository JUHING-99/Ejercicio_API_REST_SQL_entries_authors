const express = require('express');
// Rutas de productos
const entriesApiController = require("../controllers/entries.controller");
const entriesApiRouter = express.Router();

entriesApiRouter.get('/api/entries', entriesApiController.getEntries);
entriesApiRouter.post('/api/entries', entriesApiController.createEntry);
entriesApiRouter.put('/api/entries', entriesApiController.updateEntry);
entriesApiRouter.delete('/api/entries', entriesApiController.deleteEntry);
entriesApiRouter.delete('/api/entries/all', entriesApiController.deleteAllEntries);

module.exports = entriesApiRouter;

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/entries
/*
{
    "title":"noticia desde Node",
    "content":"va a triunfar esto2",
    "email":"jabier@thebridgeschool.es",
    "category":"sucesos"
}
    */