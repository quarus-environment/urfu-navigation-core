import { Sequelize } from "sequelize"

export const seq = new Sequelize("urfu", "postgres", "p123p123p123", {
  host: "194.67.103.130",
  dialect: "postgres",
  logging: false,
})