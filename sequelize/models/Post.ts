import { sequelize } from "../../config/db";
import { DataTypes, Model } from "sequelize";
import { User } from "./User";
import { PointOfInterest } from "./PointOfInterest";
import { IPost } from "../../types";

interface PostInstance extends Model<IPost>, IPost {}

const Post = sequelize.define<PostInstance>(
  "Post",
  {
    rating: {
      type: DataTypes.DECIMAL,
    },
    comments: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
  }
);

Post.belongsTo(User);
Post.belongsTo(PointOfInterest);

export { Post };
