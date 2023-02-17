const {Farmacia} = require ("../models/farmacia")

const categoria = {
        async guardarProducto (req,res){
                try {
                    const producto = new Farmacia(req.body)
                    await producto.save()
                    res.status(201).json(producto)
                } catch (error) {
                    res.status(501).json(error)
                }
        },

        todosLosProductos : async(req,res)=>{
            const productos = await Farmacia.find()
            res.status(200).json({productos})
        }
        

}

module.exports = categoria