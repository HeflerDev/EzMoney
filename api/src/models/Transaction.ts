import db from "../config/Database";
import {CreationOptional, InferAttributes, InferCreationAttributes, Model} from "sequelize";
import Account from "./Account";

export default class Transaction extends Model<InferAttributes<Transaction>, InferCreationAttributes<Transaction>> {
    declare id: CreationOptional<number>
    declare debited_account_id: number
    declare credited_account_id: number
    declare value: number
    declare createdAt: Date
}

Transaction.belongsTo(Account);

(async () => {
    await db.sync();
})();