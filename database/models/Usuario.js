module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario"
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuario:{
            type: dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.INTEGER
        },
        foto:{
            type: dataTypes.STRING
        }
    }
    const config = {
        tableName: "usuarios",
        timestamps: false
    }
    const Usuario = sequelize.define(alias, cols, config);

    return Usuario
}