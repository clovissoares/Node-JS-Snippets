const {Model, DataTypes} = require('sequelize');

class Test extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            price: DataTypes.DOUBLE
        },{
            sequelize,
            tableName: 'test'
        })
    }
}

module.exports = Ingredient;