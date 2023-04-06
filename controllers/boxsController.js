
const BoxsServices = require('../Services/boxsServices.js')

//idProductsProcesses В модели
class ControllerBoxs{

    async addBox(req,res)
    {
        try {
            return res.json(await BoxsServices.addBox(req.body))
        }catch (error){
          res.status(400).json(error)
        }
    }
    async findBox(req,res)
    {
        try {
            const query = {};
            query[req.params.param] = req.params.value;

           return res.json(await BoxsServices.findBoxsByParam(query))
        }catch (error){
            res.status(400).json(error)
        }



    }

    async getAllBoxs(req,res)
    {
        try {
          return res.json( await BoxsServices.getAllBoxs())

        }catch (error){
            res.status(400).json(error)
        }


    }

    async deleteBox(req,res)
    {
        try {
            return res.json(await BoxsServices.deleteBox(req.body))
        }catch (error){
            res.status(400).json(error)
        }

    }

    async updateBox (req,res)
    {
        try {
        return res.json( await BoxsServices.updateBox(req.body))
        }catch (error){
            res.status(400).json(error)
        }
    }

}

module.exports = new ControllerBoxs()
