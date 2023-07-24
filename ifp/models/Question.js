const Sequelize = require("sequelize");

const Question = sequelize.define("sequelize", {
  title: {
    type: DataTypes.STRING,
  },
  answerOne: {
    type: DataTypes.STRING,
  },
});
