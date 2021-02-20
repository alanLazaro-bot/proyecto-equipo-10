module.exports = function(sequelize, dataTypes) {
    let alias = "Usuarios";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull:true
        },
        first_name: {
            type: dataTypes.STRING
        },

        last_name:{
            type:dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        address_id:{
            type: dataTypes.INTEGER
        },
        carrito_id:{
            type: dataTypes.INTEGER
        },
        user_type_id:{
            type:dataTypes.INTEGER
        },
        image: {
            type: dataTypes.STRING
        }

       
       
    }

    let config = {
        tableName: "users",
        timestamps: false,
    }

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.belongsTo(models.Direcciones, {
            as: "direccion",
            foreignKey: "address_id"
        });
   
    
        Usuario.belongsTo(models.Tipo_usuarios, {
            as: "type",
            foreignKey: "user_type_id"
        });
    }

    return Usuario
}