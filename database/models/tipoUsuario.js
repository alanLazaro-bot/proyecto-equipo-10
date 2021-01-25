module.exports = function(sequelize, dataTypes) {
    let alias = "Tipo_usuarios";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull:true
        },
        tipo: {
            type: dataTypes.STRING
        }
 
    }

    let config = {
        tableName: "User_Type",
        timestamps: false,
    }

    const TipoUsuario = sequelize.define(alias, cols, config);

    TipoUsuario.associate = function(models){
        TipoUsuario.belongsTo(models.Usuarios, {
            as: "type",
            foreignKey: "User_type_id"
        });
    }
    

    return TipoUsuario
}