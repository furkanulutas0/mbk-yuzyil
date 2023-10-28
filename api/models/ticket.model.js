import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema(
  {
    ticketid: {
      type: String,
      required: true,
      unique: true, // Correct the typo here
    },
    fullname: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


const Ticket = mongoose.model("Ticket", TicketSchema);

export default Ticket;
