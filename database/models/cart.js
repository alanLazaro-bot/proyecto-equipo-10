module.exports = function(sequelize, dataTypes) {
    let alias = "carrito";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        producto_id: {
            type: dataTypes.INTEGER
        },
        direccion_id: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tablename: "cart",
        timestamps: false
    }

    let carrito = sequelize.define(alias, cols, config);

    carrito.associate = function(models){
        carrito.belongsTo(models.usuario, {
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