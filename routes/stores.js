// 1. IMPORTACIONES
const express 		= require("express")
const router		= express.Router()

const storeController = require ("./../controllers/storeController")

//RUTEOS
//crear tienda
router.post("/create", storeController.postCreateStore)

//Leer tienda
router.get ("/readall", storeController.getReadStores)

//Leer una tienda 
//router.get("/readone/:id", storeController.getOneStore)

// 3. EXPORTACIONES
module.exports = router