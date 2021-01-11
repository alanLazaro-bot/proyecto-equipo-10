module.exports = function(sequelize, dataTypes) {
    let alias = "Productos";

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
            type:dataTypes.STRING
        },
        stock:{
            type: dataTypes.INTEGER
        },
        precio:{
            type: dataTypes.INTEGER
        }
          
    }

    let config = {
        tablename: "products",
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models){
        Producto.belongsTo(models.Colores, {
            as: "colores",
            foreignKey: "colors_id"
        });
    }
    
    Producto.associate = function(models){
        Producto.hasMany(models.carrito, {
            as: "carrito",
            foreignKey: "id_carrito"
        });
    }

    Producto.associate = function(models){
        Producto.belongsTo(models.talles, { 
            as: "talles",
            foreignKey: "sizes_id"
        });
    }

    return Producto
}