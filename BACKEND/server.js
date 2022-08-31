const express = require('express')
const app = express()
const seed = require('./seedData/seed')
const { Item } = require("./models");
const {itemRoutes, saucesRoutes} = require('./routes');

app.get('/', async (req, res) => {
  const items = await Item.findAll();
  res.send(items)
})

app.get('/:id', async (req, res) => {
  const items = await Item.findByPk(req.params.id);
  if(!items) {
      res.status(404);
    
    }
    res.send(items);
})



const serve = async (port) => {
    await seed() 
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
};

serve(5000);
