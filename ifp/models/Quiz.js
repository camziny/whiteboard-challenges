const Sequelize = require("sequelize");

const Quiz = sequelize.define("sequelize", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
