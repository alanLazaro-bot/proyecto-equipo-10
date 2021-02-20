module.exports = function(sequelize, dataTypes) {
    let alias = "Tipo_usuarios";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull:true
        },
        user_type: {
            type: dataTypes.STRING
        }
 
    }

    let config = {
        tableName: "user_type",
        timestamps: false,
    }

    const TipoUsuario = sequelize.define(alias, cols, config);

    TipoUsuario.associate = function(models){
        TipoUsuario.hasMany(models.Usuarios, {
            as: "type",
            foreignKey: "user_type_id"
        });
    }
    

    return TipoUsuario
}