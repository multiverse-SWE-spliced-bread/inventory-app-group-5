const express = require("express");
const itemsRouter = express.Router();
const { Item, Sauces } = require("../models/index");
const { items } = require('../seedData/seedData')

itemsRouter.get('/', async (req, res) => {
    const items = await Item.findAll();
    res.send(items)
})

itemsRouter.get('/:id', async (req, res) => {
    const items = await Item.findByPk(req.params.id);
    if(!items) {
        res.status(404);
        next();
      } else {
        res.send(items);
      }
})

module.exports = itemsRouter 