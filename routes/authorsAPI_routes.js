const express = require('express');
// Rutas de productos
const authorsApiController = require("../controllers/authors.controller");
const authorsApiRouter = express.Router();

authorsApiRouter.get('/api/authors', authorsApiController.getAuthors);
authorsApiRouter.post('/api/authors', authorsApiController.createAuthor);
authorsApiRouter.put('/api/authors', authorsApiController.updateAuthor);

module.exports = authorsApiRouter;

