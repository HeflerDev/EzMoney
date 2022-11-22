import sequelize from "../config/Database";
import {CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model} from "sequelize";

export default class Transaction extends Model<InferAttributes<Transaction>, InferCreationAttributes<Transaction>> {
    declare id: CreationOptional<number>
    declare debited_account_id: number
    declare credited_account_id: number
    declare value: number
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>
}

Transaction.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    debited_account_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    credited_account_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    value: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {tableName: "transactions", sequelize});