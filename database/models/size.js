module.exports = function(sequelize, dataTypes) {
    let alias = "talle";

    let cols = {
        idsizes:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tamaños: {
            type: dataTypes.STRING
        },
        producto_id: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tablename: "sizes",
        timestamps: false
    }

    let talles = sequelize.define(alias, cols, config);

    talles.associate = function(models){
        talles.hasMany(models.productos, {
            as: "talles",
            foreignKey: "producto_id"
        });
    }


    return productos
}