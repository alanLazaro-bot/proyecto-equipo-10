module.exports = function(sequelize, dataTypes) {
    let alias = "talles";

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


<<<<<<< HEAD
    return talles
=======
    return Talle
>>>>>>> fe96afdef879e7dcd6594a76f000fe5282b0a1ae
}