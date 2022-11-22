import {Sequelize} from "sequelize";

const sequelize: Sequelize = new Sequelize("ez_db", "postgres", "postgres", {
    host: "postgres",
    dialect: "postgres"
})

export default sequelize;