import {Model, InferAttributes, InferCreationAttributes, Optional, CreationOptional} from "sequelize";
import db from "../config/Database";
import Account from "./Account";

export default class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>
    declare username: string
    declare password: string
    declare refresh_token: CreationOptional<string>
    declare account_id: number
}

User.hasOne(Account);
User.belongsTo(Account);

(async () => {
    await db.sync();
})();