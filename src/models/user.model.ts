import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

/** Table Name */
const tableName: string = "users";

/** table Columns */
const tableAttribute = {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  email_id: { type: DataTypes.STRING, unique: true, allowNull: false },
  username: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  is_active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
};

/** Table Option */
const tableOption = {
  freezeTableName: true,
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "update_at",
};

export default sequelize.define(tableName, tableAttribute, tableOption);
