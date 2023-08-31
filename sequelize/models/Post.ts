// models/post.ts

import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";

const Post = sequelize.define(
  "Post",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    poi_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL,
    },
    comments: {
      type: DataTypes.TEXT,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {}
);

export { Post };
