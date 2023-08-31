import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  database: "db_name",
  username: "db_username",
  password: "db_password",
  host: "localhost",
  dialect: "postgres",
});

export { sequelize };
