import express from "express"
import { getUsers, login, logout, signup, updateUser } from "../controllers/user.js"
import { authenticte } from "../middleware/auth.js"

const router = express.Router()

router.post("/update-user", authenticte, updateUser )
router.get("/users", authenticte, getUsers)

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)

export default router