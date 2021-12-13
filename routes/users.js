//1. IMPORTACIONES
const express = require("express")
const router = express.Router()

const userController = require ("../controllers/usersController")


//2. ROUTER
router.post("/create", userController.create)

// 3. EXPORTACIÓN
module.exports = router