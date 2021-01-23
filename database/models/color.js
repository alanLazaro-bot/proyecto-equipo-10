module.exports = function(sequelize, dataTypes) {
    let alias = "Colores";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        color: {
            type: dataTypes.STRING
        },
        
    }

    let config = {
        tablename: "colors",
        timestamps: false
    }

    const Color = sequelize.define(alias, cols, config);

    Color.associate = function(models){
        Color.hasMany(models.Productos, {
            as: "Productos",
            foreignKey: "colors_id"
        });
    }

<<<<<<< HEAD
    return colores
=======
    return Color
>>>>>>> fe96afdef879e7dcd6594a76f000fe5282b0a1ae
}