module.exports = (sequelize, dataTypes) => {
    const alias = "Pelicula"
    const cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo:{
            type: dataTypes.STRING
        },
        descripcion:{
            type: dataTypes.STRING
        },
        anio:{
            type: dataTypes.INTEGER
        },
        imagen:{
            type: dataTypes.STRING
        },
        trailer:{
            type: dataTypes.STRING
        },
        categoria_id:{
            type: dataTypes.INTEGER
        }
    }
    const config = {
        tableName: "peliculas",
        timestamps: false
    }
    const Pelicula = sequelize.define(alias, cols, config);

   Pelicula.associate = function(models) {
        Pelicula.belongsTo(models.Categoria, {
            as: 'categoria',
            foreignKey: 'categoria_id'
        })
    }


    return Pelicula
}