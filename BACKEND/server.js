const express = require('express')
const app = express()
const seed = require('./seedData/seed')
const {itemRoutes, saucesRoutes} = require('./routes');



const serve = async (port) => {
    await seed() 
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
};

serve();
