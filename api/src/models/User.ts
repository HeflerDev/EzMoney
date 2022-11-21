import {Sequelize, DataTypes, ModelCtor, Model} from "sequelize";
import db from "@/src/config/Database";
import User from "@/../lib/User";

const Users: ModelCtor<Model> = db.define("users", {
    username: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    refresh_token: {type: DataTypes.TEXT}
}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();

export default Users