module.exports = function(sequelize, dataTypes) {
    let alias = "colores";

    let cols = {
        idColores:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        colores: {
            type: dataTypes.STRING
        },
        producto_id: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tablename: "colors",
        timestamps: false
    }

    let colores = sequelize.define(alias, cols, config);

    colores.associate = function(models){
        colores.hasMany(models.productos, {
            as: "colores",
            foreignKey: "producto_id"
        });
    }

    return colores
}