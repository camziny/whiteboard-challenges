// models/user.ts

import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";

const User = sequelize.define(
  "User",
  {
    user_name: {
      type: DataTypes.STRING,
    },
    occupation: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    profile_image: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

export { User };
