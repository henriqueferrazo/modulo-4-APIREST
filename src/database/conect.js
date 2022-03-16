const { Sequelize } = require('sequelize')


const sequelize = new Sequelize('sqlite:./src/database/database.sqlite')

async function connect() {
  try {
    await sequelize.authenticate()
    console.log('Conectou com o banco')
  } catch (error) {
    console.log('Deu ruim no banco', error)
  }
}

connect()

module.exports = sequelize;


