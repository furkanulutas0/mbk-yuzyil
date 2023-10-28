import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
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
  // Create a ref for the #ticket element
  const ticketRef = useRef();

  // Function to convert SVG to PNG using html2canvas
  const convertToPNG = async () => {
    const ticketElement = ticketRef.current;

    // Use html2canvas to convert the SVG to a canvas
    const canvas = await html2canvas(ticketElement);

    // Convert the canvas to a data URL (PNG)
    const dataURL = canvas.toDataURL('image/png');

    // Create a Blob from the data URL
    const blob = dataURItoBlob(dataURL);

    // Create a File from the Blob
    const pngFile = new File([blob], 'ticket.png', { type: 'image/png' });

    // Use the File or dataURL as needed, e.g., for sharing
    shareImage(pngFile);
  };

  const shareImage = async (file) => {
    const shareData = {
      files: [file],
    };

    if (navigator.canShare && navigator.canShare(shareData)) {
      await navigator.share(shareData);
    }
  };

  // Function to convert data URL to Blob
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  };

  return (
    <div className="flex bg-gradient-to-br from-[#e21818] to-[#a00606] h-[100vh] sm:h-[90.6vh] p-5">
      <div className="grid grid-cols-1  grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 sm:place-items-center gap-4 my-auto mx-auto">
        <div className="flex flex-col items-center">
          <div ref={ticketRef}>
            <object
              data="ticket.svg"
              type="image/svg+xml"
              id="ticket"
              onLoad={handleLoad}
            ></object>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl italic text-white font-semibold">Tebrikler!</h1>
          <p className="text-slate-300 my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            praesentium repudiandae earum id dolore ipsum perspiciatis,
            architecto deleniti reprehenderit rerum ipsam itaque expedita
            sapiente fugit ab consequatur cum, in repellendus? Lorem ipsum dolor
            sit{' '}
          </p>
          <div className="w-1/2 opacity-50 h-1 rounded-2xl bg-slate-200"></div>
          <div className="flex flex-wrap justify-start items-center gap-2 my-5">
            <p className="text-xl text-white font-bold">Paylaş:</p>
            <button
              onClick={convertToPNG} // Call convertToPNG when the button is clicked
              className="bg-blue-500 p-3 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
            >
              <svg
                className="w-7 h-7 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}