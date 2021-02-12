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
        price:{
            type: dataTypes.INTEGER
        },
        carrito_id:{
            type: dataTypes.INTEGER
        },
        size_id:{
            type: dataTypes.INTEGER
        },
        image: {
            type: dataTypes.STRING
        }
        
          
    }

    let config = {
        tableName: "products",
        timestamps: false,
    }

    const Producto = sequelize.define(alias, cols, config);

    
    Producto.associate = function(models){
   /*     Producto.belongsTo(models.Carrito, {
            as: "carrito",
            foreignKey: "carrito_id"
        });
    
*/
        Producto.belongsTo(models.Talles, { 
            as: "talles",
            foreignKey: "size_id"
        });
    }

    return Producto
}