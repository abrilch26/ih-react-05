const bcryptjs = require("bcryptjs")
const User = require("../models/User")
const jwt	= require("jsonwebtoken")

exports.create = async (req, res) => {

    //obtener usuario, email y password(se obtiene del request)
    const {
        nombre, 
        apellido,
        pais,
        direccion,
        email,
        password
    } = req.body

    //realizar el proceso asíncrono
    try {
      //generar password para base de datos
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);

      //4. CREAR USUARIO EN BASE DE DATOS
      const newUser = await User.create({
        nombre,
        apellido,
        pais,
        direccion,
        email,
        password: hashedPassword,
      });


      //Autenticación con tokens: 
      //A. crear un payload (información del Usuario)
      const payload = {
          user: {
              id: newUser._id // ID DE MONGODB DEL USUARIO
          }
      }

      //B. firmar el token
      jwt.sign (
          payload, //datos que acompañan al token
          process. env.SECRET, //palabra serceta del token
          {
              expiresIn: 360000 //tiempo de expiración del token
          },
          (error, token) => {
            if(error) throw error

            res.json({
                msg: "Token correctamente generado.",
                data: token
            })
        }
    )

    } catch (error) {
        //en caso de error con await, ejecuta :
        res.status(500).json({
            msg: "Hubo un error con la creación de usuario", 
            error: error
        })
        
    }

}