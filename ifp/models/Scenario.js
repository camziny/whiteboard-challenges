const Sequelize = require("sequelize");

const Scenario = sequelize.define("sequelize", {
  quiz: {
    type: DataTypes.String,
    allowNull: false,
  },
});
