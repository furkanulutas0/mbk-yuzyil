import express from "express";
import { getAllTickets, getTicket, newTicket } from "../controller/ticket.controller.js";

const router = express.Router();
router.post("/new-ticket", newTicket );
router.get("/ticketid", getTicket );
router.get("/all", getAllTickets );

export default router;