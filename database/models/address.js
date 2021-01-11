module.exports = function(sequelize, dataTypes) {
    let alias = "direccion";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        tablename: "address",
        timestamps: false
    }

    const direccion = sequelize.define(alias, cols, config);

    direccion.associate = function(models){
        direccion.belongsTo(models.usuarios, {
            as: "usuarios",
            foreignKey: "address_id"
        });
    }

    return direccion
}