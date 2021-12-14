//1. IMPORTACIONES
const express = require("express")
const router = express.Router()

const userController = require ("../controllers/usersController")
const authorization = require ("../middleware/authorization")


//2. ROUTER
//crear usuario
router.post("/create", userController.create)

//iniciar sesión del usuario
router.post("/login", userController.login)

//verificar usuario
router.get("/verifytoken", authorization, userController.verifyToken)

// 3. EXPORTACIÓN
module.exports = router