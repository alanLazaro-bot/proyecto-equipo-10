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

        numero:{
            trype: dataTypes.INTEGER
        },
        localidad:{
            type: dataTypes.STRING
        },
        provincia: {
            type: dataTypes.STRING
        },
        codigo_postal: {
            type: dataTypes.INTEGER
        },
        id_Carrito: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tablename: "address",
        timestamps: false
    }

    let direccion = sequelize.define(alias, cols, config);

    direccion.associate = function(models){
        direccion.belongsTo(models.usuario, {
            as: "usuarios",
            foreignKey: "id_addres"
        });
    }

    return direccion
}