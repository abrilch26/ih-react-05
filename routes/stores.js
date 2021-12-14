// 1. IMPORTACIONES
const express = require("express")
const Store = require ("../models/Store")
const router = express.Router()

const storeController = require ("./../controllers/storeController")

//RUTEOS
//crear tienda
router.post("/create", storeController.create)

//Leer tienda
router.get ("/readall", storeController.readOne)

//Leer una tienda 
//router.get("/readone/:id", storeController.getOneStore)

// 3. EXPORTACIONES
module.exports = router