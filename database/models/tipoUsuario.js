module.exports = function(sequelize, dataTypes) {
    let alias = "tipo_usuario";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo: {
            type: dataTypes.STRING
        }
 
    }

    let config = {
        tablename: "User_Type",
        timestamps: false
    }

    const tipoUsuario = sequelize.define(alias, cols, config);

    tipoUsuario.associate = function(models){
        tipoUsuario.belongsTo(models.direccion, {
            as: "direccion",
            foreignKey: "User_type_id"
        });
    }
    

    return tipoUsuario
}