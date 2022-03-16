const Sequelize = require('../database/conect.js')
const { DataTypes } = require('sequelize')


const Franquias = Sequelize.define('Franquias',{
    Gestor:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Endereco:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    Estado:{
        type:DataTypes.STRING,
        allwNull: false
    },
    Cidade:{
        type:DataTypes.STRING,
        allowNull: false
    },
    CEP:{
        type:DataTypes.NUMBER,
        allowNull: false
    },
    Tem_Piscina:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    Academia:{
        type:DataTypes.BOOLEAN,
        allowNull: false
    }

})

module.exports = Franquias;