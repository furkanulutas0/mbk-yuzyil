import { useState, useEffect } from "react";
import Ticket from "../components/Ticket.comp";
export default function AllTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/get/ticket/all");
        const data = await res.json();
        setTickets(data.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col bg-gradient-to-br from-[#e21818] to-[#a00606] w-full h-full sm:w-full sm:h-[100%] p-5">
      <h1 className="text-center text-5xl text-white font-bold">KAYITLI BİLETLER</h1>
      <h1 className="text-center text-sm text-slate-200 italic">Tüm biletlerinizi buradan görebilirsiniz.</h1>
      <div className="flex flex-row flex-wrap justify-around gap-5 mx-auto p-5">
      {tickets.map((ticket) => (
        <Ticket
          key={ticket._id}
          date="29 Ekim 2023"
          name={ticket.fullname}
          ticketid={ticket.ticketid}
        />
      ))}
      </div>
    </div>
  );
}
