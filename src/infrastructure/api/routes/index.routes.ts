import express from 'express';
import { GetProductsHttpHandler } from '../../../../handlers/get.products.handler';
const app = express();
app.get('/', GetProductsHttpHandler)

module.exports = app;