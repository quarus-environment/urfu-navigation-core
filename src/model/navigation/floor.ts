import { DataTypes, Model } from "sequelize"
import { seq } from "../db"

export class Floor extends Model {}
Floor.init(
  { id: { type: DataTypes.STRING, primaryKey: true }, nth: DataTypes.INTEGER },
  { sequelize: seq },
)

Floor.sync()