"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      quiz.hasMany(Question);
      Question.belongsTo(Quiz);
    }
  }
  Question.init(
    {
      title: DataTypes.STRING,
      answerOne: DataTypes.STRING,
      answerTwo: DataTypes.STRING,
      answerThree: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
