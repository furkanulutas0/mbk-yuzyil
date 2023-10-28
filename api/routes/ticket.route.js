import express from "express";
import { getTicket, newTicket } from "../controller/ticket.controller.js";

const router = express.Router();
router.post("/new-ticket", newTicket );
router.get("/ticketid", getTicket );

export default router;