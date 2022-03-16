const Franquias = require('../models/models.js')

class FranquiasController {

    static async create(req, res) {
        const {
            gestor,
            endereco,
            estado,
            cidade,
            cep,
            tem_piscina,
            tem_academia
        } = req.body;
        
        if (!gestor ||
            !endereco ||
            !estado ||
            !cidade ||
            !cep ||
            !tem_piscina ||
            !tem_academia ||
            ) {
                return res.status()
            }
    }
    
}
async function controller() {
    try {
        await sequelize.sync()
        app.listen(port, () => console.log(`backend on no servidor http://localhost:${port}`))
    } catch (error) {
        console.log(`erro ao conectar o ${error}`);
    }
}

module.exports = FranquiasController;