module.exports = function(sequelize, dataTypes) {
    let alias = "productos";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        description:{
            trype:dataTypes.STRING
        },
        stock:{
            type: dataTypes.INTEGER
        },
        precio:{
            type: dataTypes.INTEGER
        },
        id_categorias: {
            type: dataTypes.INTEGER
        },
        id_cart: {
            type: dataTypes.INTEGER
        },
        id_colores: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tablename: "products",
        timestamps: false
    }

    let productos = sequelize.define(alias, cols, config);

    productos.associate = function(models){
        productos.belongsTo(models.colores, {
            as: "colores",
            foreignKey: "colors_id"
        });
    }
    

    productos.associate = function(models){
        productos.hasMany(models.carrito, {
            as: "carrito",
            foreignKey: "producto_id"
        });
    }


    

    return productos
}