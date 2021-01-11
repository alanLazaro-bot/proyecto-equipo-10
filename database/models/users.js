module.exports = function(sequelize, dataTypes) {
    let alias = "usuarios";

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
       
       
    }

    let config = {
        tablename: "usuarios",
        timestamps: false
    }

    const usuario = sequelize.define(alias, cols, config);

    usuario.associate = function(models){
        usuario.belongsTo(models.direccion, {
            as: "direccion",
            foreignKey: "address_id"
        });
    }
    usuario.associate = function(models){
        usuario.belongsTo(models.tipo_usuario, {
            as: "direccion",
            foreignKey: "User_type_id"
        });
    }

    return usuario
}