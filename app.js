const express = require('express');
const { Franquia } = require('./src/models/models.js');
const sequelize = require('./src/database/conect.js');
const app = express();
const port = 3333;
const FranquiasRouters = require('./src/router/FranquiasRouters.js');

app.use(express.json())
app.use('/franquias', FranquiasRouters)

app.get("/", (req, res) => {
    res.status(200).json(Franquia)
})

async function sicronizar(){
    try{
        await sequelize.sync()
        app.listen(port, () => console.log(`backend on no servidor http://localhost:${port}`))
    }catch(error){
        console.log(`erro ao conectar o ${error}`);
    }
}


sicronizar()
