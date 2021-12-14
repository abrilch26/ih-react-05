
const Store = require("./../models/Store");


//crear tienda
exports.create = async (req, res) => {
  const { domicilio, telefono } = req.body;

  try {
    const newStore = await Store.create({
      domicilio,
      telefono,
    });

    //devuelve respuesta en formato json*
    res.json({
      msg: "Tienda creada con éxito!",
      data: newStore,
    });
    
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error creando la tienda",
      error: error,
    });
  }
};

//leer todas las tiendas
exports.readOne = async (req, res) => {

    try {
      const stores = await Store.find({})
  
      res.json({
        msg: "Tiendas obtenidas con éxito",
        data: stores
      })
  
    } catch (error) {
      res.status(500).json ({
        msg: "Hubo un error obteniendo los datos",
        error: error
      })
     }
  }
