module.exports = function(sequelize, dataTypes) {
    let alias = "Usuario";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        }
       
       
    }

    let config = {
        tablename: "users",
        timestamps: false
    }

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.belongsTo(models.direccion, {
            as: "direccion",
            foreignKey: "address_id"
        });
    }
    Usuario.associate = function(models){
        Usuario.belongsTo(models.tipo_usuario, {
            as: "type",
            foreignKey: "User_type_id"
        });
    }

    return Usuario
}