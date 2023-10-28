import { useLocation } from "react-router-dom";
import ShareButton from "../components/ShareButton";

function getTodayDate() {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const year = today.getFullYear().toString();
  const formattedDate = `${day}.${month}.${year}`;
  return formattedDate;
}

export default function Ticket() {
  const location = useLocation();
  const today = getTodayDate();
  const name = location.state.name;
  const ticketid = location.state.ticket;

  const handleLoad = () => {
    const ticket = document.querySelector("#ticket");
    const ticketDoc = ticket.contentDocument;
    ticketDoc.querySelector("#name-value").textContent = name;
    ticketDoc.querySelector("#date-value").textContent = today;
    ticketDoc.querySelector("#ticket-value").textContent = ticketid;
  };
  return (
    <div className="flex bg-gradient-to-br from-[#e21818] to-[#a00606] h-[100vh] sm:h-[90.6vh] p-5">
      <ShareButton
        url="https://hizliresim.com/1rt9utg"
        type="image"
        title="My Instagram story"
        text="This is my Instagram story!"
      />

      <div className="grid grid-cols-1  grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 sm:place-items-center gap-4 my-auto mx-auto">
        <div className="flex flex-col items-center">
          <object
            data="ticket.svg"
            type="image/svg+xml"
            id="ticket"
            onLoad={handleLoad}></object>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl italic text-white font-semibold">Tebrikler!</h1>
          <p className="text-slate-300 my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium repudiandae
            earum id dolore ipsum perspiciatis, architecto deleniti reprehenderit rerum ipsam itaque
            expedita sapiente fugit ab consequatur cum, in repellendus? Lorem ipsum dolor sit{" "}
          </p>
          <div className="w-1/2 opacity-50 h-1 rounded-2xl bg-slate-200"></div>
          <div className="flex flex-wrap justify-start items-center gap-2 my-5">
            <p className="text-xl text-white font-bold">Paylaş:</p>
            <button className="bg-blue-500 p-3 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
              <svg
                className="w-7 h-7 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
            <button className="bg-blue-500 p-3 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
              <svg
                className="w-7 h-7 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
