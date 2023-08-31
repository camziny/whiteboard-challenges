// models/pointsOfInterest.ts

import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";

const PointsOfInterest = sequelize.define(
  "PointsOfInterest",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    longitude: {
      type: DataTypes.DECIMAL,
    },
    latitude: {
      type: DataTypes.DECIMAL,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
    city: {
      type: DataTypes.STRING,
    },
    categories: {
      type: DataTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
    },
    postal_code: {
      type: DataTypes.STRING,
    },
    province: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    phone_number: {
      type: DataTypes.STRING,
    },
  },
  {}
);

export { PointsOfInterest };
