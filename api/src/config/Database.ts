import {Sequelize} from "sequelize";

const db: Sequelize = new Sequelize("ez_db", "postgres", "postgres", {
    host: "postgres",
    dialect: "postgres"
})

export default db;