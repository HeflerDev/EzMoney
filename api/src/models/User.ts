import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DataTypes,
    Association, NonAttribute, HasOneCreateAssociationMixin, HasOneGetAssociationMixin
} from "sequelize";
import sequelize from "../config/Database";
import Account from "./Account";

export default class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare static associations: {
        account: Association<User, Account>
    }
    declare id: CreationOptional<number>
    declare username: string
    declare password: string
    declare refresh_token: CreationOptional<string>
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>
    declare createAccount: HasOneCreateAssociationMixin<Account>
    declare accounts: NonAttribute<Account>
    declare getAccount: HasOneGetAssociationMixin<Account>
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        unique: true
    },
    password: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    refresh_token: {
        type: new DataTypes.STRING(256),
        allowNull: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    tableName: "users",
    sequelize
});

User.hasOne(Account)
Account.belongsTo(User, {foreignKey: "userId"});

(async () => {
    await sequelize.sync({force: true})
})();
