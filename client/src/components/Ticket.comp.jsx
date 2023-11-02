import { useEffect, useRef, useState } from "react";

export default function Ticket(props) {
  const { date, name, ticketid } = props;
  const svgRef = useRef(null);
  const [allDataReady, setAllDataReady] = useState(false);

  useEffect(() => {
    try {
      if (svgRef.current) {
        const svgObject = svgRef.current;

        svgObject.addEventListener("load", () => {
          const ticketDoc = svgObject.contentDocument;
          if (ticketDoc) {
            ticketDoc.querySelector("#name-value").textContent = name;
            ticketDoc.querySelector("#date-value").textContent = date;
            ticketDoc.querySelector("#ticket-value").textContent = ticketid;
          }
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setAllDataReady(true);
    }
  }, [date, name, ticketid]);

  return (
    <div className={`ticket flex ${allDataReady ? "visible" : ""}`}>
      <object
        ref={svgRef}
        className="sm:w-[600px] w-[125px] hover:w-[150px] sm:hover:w-[650px] mx-auto my-auto transition-all ease-in-out duration-100"
        data="ticket.svg"
        type="image/svg+xml"
      />
    </div>
  );
}
