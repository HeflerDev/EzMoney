import {CreationOptional, InferAttributes, InferCreationAttributes, Model} from "sequelize";
import db from "../config/Database";
import Transaction from "./Transaction";
import User from "./User";

export default class Account extends Model<InferAttributes<Account>, InferCreationAttributes<Account>> {
    declare id: CreationOptional<number>
    declare balance: number
    declare user_id: number
    declare transaction_id: CreationOptional<number>
}

Account.hasOne(User);
Account.belongsTo(User);
Account.hasMany(Transaction);

(async () => {
    await db.sync();
})();