const franquiasModels = require('../models/models.js')

class FranquiasController {

    static async showAll(req, res) {
        try {
            const franquias = await franquiasModels.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            })
            return res.status(200).json({ resultado: franquias })
        } catch (error) {
            return res.status(401).json({ status: 401, message: error.message })
        }
    }

    static async showById(req, res) {
        const id = req.params.id

        try {
            const franquias = await franquiasModels.findByPk(id, {
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            })

            if (!franquias) {
                return res.status(401).json({
                    status: 401,
                    message: 'Cliente não encontrado!'
                })
            }

            return res.status(200).json(franquias)
        } catch (error) {
            return res.status(401).json({ status: 401, message: error.message })
        }
    }

    static async create(req, res) {
        const {
            gestor,
            endereco,
            estado,
            cidade,
            cep,
            tem_piscina,
            tem_academia
        } = req.body

        if (
            !gestor ||
            !endereco ||
            !estado ||
            !cidade ||
            !cep ||
            !tem_piscina ||
            !tem_academia 
            ) {
            return res.status(401).json({
                status: 401,
                message: 'Todos os campos precisam ser preenchidos!'
            })
        }
        const franquiasExists = await franquiasModels.findOne({ where: { cep : cep } })

        if (franquiasExists) {
            return res.status(401).json({
                status: 401,
                message: 'Endereço ja informado!'
            })
        }
        const newFranquias = {
            gestor,
            endereco,
            estado,
            cidade,
            cep,
            tem_piscina,
            tem_academia
        }
        try {
            await franquiasModels.create(newFranquias)
            res
                .status(201)
                .json({ status: 201, message: 'Franquias cadastradas com sucesso!' })
        } catch (error) {
            return res.status(401).json({ status: 401, message: error.message })
        }
    }
    static async updateById(req, res) {
        const { id } = req.params
        const {
            gestor,
            endereco,
            estado,
            cidade,
            cep,
            tem_piscina,
            tem_academia
        } = req.body

        const franquias = await franquiasModels.findOne({ where: { id: id }, raw: true })

        if (!franquias) {
            return res.status(401).json({
                status: 401,
                message: 'Franquia não encontrada'
            })
        }
        const novosDados = {
            gestor,
            endereco,
            estado,
            cidade,
            cep,
            tem_piscina,
            tem_academia
        }

        try {
            await franquiasModels.update(novosDados, { where: franquias })
            return res
                .status(200)
                .json({ status: 200, message: 'Atualizado com sucesso!' })
        } catch (error) {
            return res
                .status(400)
                .json({ status: 400, message: `Algo deu errado: ${error}` })
        }
    }

static async deleteById(req, res) {
    const { id } = req.params

    const cliente = await franquiasModels.findOne({ where: { id: id }, raw: true })

    if (!franquias) {
        return res.status(401).json({
            status: 401,
            message: 'Cliente não encontrado!'
        })
    }

    try {
        await franquiasModels.destroy({ where: cliente })
        return res
            .status(200)
            .json({ status: 200, message: 'Cliente deletado com sucesso!' })
    } catch (error) {
        return res
            .status(401)
            .json({ status: 401, message: `Algo deu errado: ${error}` })
    }
}

}
module.exports = FranquiasController;