import express from "express"
import {authenticte} from "../middleware/auth.js"
import { createTicket, getTicket, getTickets } from "../controllers/ticket.js"

const router = express.Router()

router.get("/", authenticte, getTickets)
router.get("/:id", authenticte, getTicket)
router.post("/", authenticte, createTicket)

export default router