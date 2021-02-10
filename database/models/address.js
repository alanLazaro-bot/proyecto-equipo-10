module.exports = function(sequelize, dataTypes) {
    let alias = "Direcciones";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull:true
        },
        calle: {
            type: dataTypes.STRING
        },

        numero: {
            type: dataTypes.INTEGER
        },
        localidad: {
            type: dataTypes.STRING
        },
        provincia: {
            type: dataTypes.STRING
        },
        codigo_postal: {
            type: dataTypes.INTEGER
        },
        
    }

    let config = {
        tableName: "address",
        timestamps: false,
    }

    const Direccion = sequelize.define(alias, cols, config);

    Direccion.associate = function(models){
        Direccion.hasMany(models.Usuarios, {
            as: "usuarios",
            foreignKey: "address_id"
        });
    }

    return Direccion
}