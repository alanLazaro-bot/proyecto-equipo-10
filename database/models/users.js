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
            trype:dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        id_carrito: {
            type: dataTypes.INTEGER
        },
        id_address: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tablename: "usuarios",
        timestamps: false
    }

    let usuario = sequelize.define(alias, cols, config);

    usuario.associate = function(models){
        usuario.belongsTo(models.address, {
            as: "direccion",
            foreignKey: "id_addres"
        });
    }

    return usuario
}