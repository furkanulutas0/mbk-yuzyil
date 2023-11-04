import Ticket from "../models/ticket.model.js";
import { errorHandler } from "../utils/error.js";

async function generateTicketId() {
  try {
    const ticketBody = "TR19232023";
    const count = await Ticket.countDocuments().exec();
    const ticketNumber = (count + 1).toString().padStart(5, "0"); // add count to ticket number
    const ticketId = ticketBody + ticketNumber;
    return ticketId;
  } catch (error) {
    throw error; // Hata durumunda hata fırlat
  }
}

export const newTicket = async (req, res, next) => {
  const { fullname } = req.body;
  const generatedTicketId = await generateTicketId();
  const newTicket = new Ticket({ ticketid: generatedTicketId, fullname });
  await newTicket
    .save()
    .then(() =>
      res.json({
        success: true,
        message: "Ticket created successfully",
        data: newTicket,
      })
    )
    .catch((err) => next(errorHandler(err.status, err.message)));
};

export const getTicket = async (req, res, next) => {
  const { ticketid } = req.body;
  try {
    const ticketData = await Ticket.findOne({ ticketid: ticketid });
    if (!ticketData) {
      next(errorHandler(404, "Ticket not found"));
    }
    res.status(200).json({
      ticketData,
    });
  } catch (err) {
    next(errorHandler(500, err.message));
  }
};

export const getAllTickets = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: "All tickets",
      data: await Ticket.find({}),
    });
  } catch (err) {
    next(errorHandler(500, err.message));
  }
};
