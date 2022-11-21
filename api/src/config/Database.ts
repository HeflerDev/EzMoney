import {Sequelize} from "sequelize";

const db: Sequelize = new Sequelize("ez_db", "root", "", {
    host: "postgres",
    dialect: "postgres"
})

export default db;