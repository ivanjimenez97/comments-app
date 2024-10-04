import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Comment = sequelize.define(
  "Comment",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "comments",
  }
);
