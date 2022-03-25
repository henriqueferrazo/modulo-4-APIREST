const Sequelize = require('../database/conect.js')
const { DataTypes } = require('sequelize')


const Franquias = Sequelize.define('Franquias',{
    gestor:{
        type:DataTypes.STRING,
        allowNull:false
    },
    endereco:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    estado:{
        type:DataTypes.STRING,
        allwNull: false
    },
    cidade:{
        type:DataTypes.STRING,
        allowNull: false
    },
    cep:{
        type:DataTypes.NUMBER,
        allowNull: false
    },
    tem_piscina:{
        type:DataTypes.STRING,
        allowNull:false
    },
    tem_academia:{
        type:DataTypes.STRING,
        allowNull: false
    }

})

module.exports = Franquias;