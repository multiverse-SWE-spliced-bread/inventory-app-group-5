const { db, DataTypes } = require('../db')


const Item = db.define("items", {
  title: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  }
});

const Sauces = db.define("sauces", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,

  }
});

module.exports = {
  Item,
  Sauces,
};
