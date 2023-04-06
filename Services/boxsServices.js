const BoxModel = require('../models/boxsModel.js')


class BoxsServices
{
    async addBox(dataStorage)
    {
       const newBox = new BoxModel(dataStorage)
         await newBox.save()

       return {message:"Склад успешно создан",newBox:newBox}

    }

    async getAllBoxs()
    {
        const boxs = await BoxModel.find()

        if (!boxs) return {message: "Ничего не найдено"}

        return {message:"Список складов",boxs:boxs}
    }
    async deleteBox(dataStorage)
    {
       const deleteBox = await BoxModel.deleteOne(dataStorage)

        if (!deleteBox) return { error:"При удалении возникла ошибка . Короб с таким ID не найден" }

        return ({ message:'Склад успешно удален'})
    }
    async updateBox (dataStorage)
    {
       const updateBox = await BoxModel.findByIdAndUpdate(dataStorage._id,dataStorage,{new:true})

        if (!updateBox) return { error:"Короб с таким ID не найден" }

        return { message:'Короб успешно обновлен', box : updateBox }
    }
   async findBoxsByParam(query)
   {
       const boxs = await BoxModel.find(query)

      if (!boxs) return {error:"Короб не найден"}

       return {boxs: boxs}

   }


   
}

module.exports = new BoxsServices()