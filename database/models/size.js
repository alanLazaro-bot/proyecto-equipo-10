module.exports = function(sequelize, dataTypes) {
    let alias = "Talles";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        talle: {
            type: dataTypes.STRING
        },
       
    }

    let config = {
        tablename: "sizes",
        timestamps: false
    }

    const Talle = sequelize.define(alias, cols, config);

    Talle.associate = function(models){
        Talle.hasMany(models.Productos, {
            as: "producto",
            foreignKey: "sizes_id"
        });
    }


    return Talle
}