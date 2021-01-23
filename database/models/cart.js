module.exports = function(sequelize, dataTypes) {
    let alias = "carrito";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        address_id: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tablename: "cart",
        timestamps: false
    }

    let carrito = sequelize.define(alias, cols, config);

    carrito.associate = function(models){
        carrito.belongsTo(models.Usuario, {
            as: "carrito",
            foreignKey: "id_carrito"
        });
    }

    carrito.associate = function(models){
        carrito.belongsTo(models.productos, {
            as: "items",
            foreignKey: "id_cart"
        })
    }

    carrito.associate = function(models){
        carrito.belongsTo(models.direccion, {
            as: "direccion",
            foreignKey: "id_Carrito"
        })
    }

    return carrito
}