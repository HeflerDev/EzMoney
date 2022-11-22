import {
    CreationOptional,
    DataTypes,
    ForeignKey, HasManyAddAssociationMixin, HasManyGetAssociationsMixin,
    InferAttributes,
    InferCreationAttributes,
    Model,
    NonAttribute
} from "sequelize";
import sequelize from "../config/Database";
import Transaction from "./Transaction";

export default class Account extends Model<InferAttributes<Account>, InferCreationAttributes<Account>> {
    declare id: CreationOptional<number>
    declare balance: number
    declare transactions?: NonAttribute<Transaction[]>
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>
    declare addTransaction: HasManyAddAssociationMixin<Transaction, number>
    declare getTransaction: HasManyGetAssociationsMixin<Transaction>
}

Account.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    balance: {
        type: new DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 100
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {tableName: 'accounts', sequelize});

Transaction.belongsTo(Account);
Account.hasMany(Transaction, {sourceKey: "id", foreignKey: "AccountId", as: 'transactions'});