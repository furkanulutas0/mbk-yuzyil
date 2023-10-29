import { useLocation } from "react-router-dom";
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
  function convertObjectToPNG() {
    const object = document.querySelector("#ticket");
    const objectDoc = object.contentDocument;
    const objectSVG = new XMLSerializer().serializeToString(objectDoc);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = "data:image/svg+xml," + encodeURIComponent(objectSVG);

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;

      ctx.drawImage(image, 0, 0);

      // ToDataURL() method converts the canvas to a data URL in PNG format
      const pngDataUrl = canvas.toDataURL("image/png");
      shareImageAsset(pngDataUrl);
    };
  }
  const shareImageAsset = async (pngDataUrl) => {
    console.log("WORKED");
    const response = await fetch(pngDataUrl);
    const blobImageAsset = await response.blob();
    const file = new File([blobImageAsset], "ticket.png", { type: "image/png" });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({ files: [file] });
    }
  };

  const handleLoad = () => {
    const ticket = document.querySelector("#ticket");
    const ticketDoc = ticket.contentDocument;
    ticketDoc.querySelector("#name-value").textContent = name;
    ticketDoc.querySelector("#date-value").textContent = today;
    ticketDoc.querySelector("#ticket-value").textContent = ticketid;
  };
  return (
    
    <div className="flex bg-gradient-to-br from-[#e21818] to-[#a00606] h-full sm:h-[90.6vh] p-5">
      <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 sm:place-items-center gap-4 mx-auto">
        <div className="flex">
          <object
            className="w-[100%] sm:w-[full]"
            data="ticket.svg"
            type="image/svg+xml"
            id="ticket"
            onLoad={handleLoad}></object>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl italic text-white font-semibold">Tebrikler!</h1>
          <p className="text-slate-300 my-5">
            {
              " Eşitlik, adalet, laiklik ve halk egemenliği temelinde yükselen Türkiye Cumhuriyeti, tarih boyunca pek çok zorluğa göğüs germiş ve büyük başarılar elde etmiştir. Bugün, Cumhuriyet'in 100. yılını kutlamak, bu değerleri ve kazanımları onurlandırmak için bir fırsattır.Türkiye Cumhuriyeti'nin 100. yılında, bir arada, birlikte ve kardeşçe daha aydınlık yarınlara doğru ilerlemek dileğiyle, Cumhuriyet Bayramımız kutlu olsun! 🇹🇷 #Cumhuriyet100"
            }
          </p>
          
          <div className="w-1/2 opacity-50 h-1 rounded-2xl bg-slate-200"></div>
          <button
              onClick={convertObjectToPNG}
              className="w-1/2 sm:w-1/5 text-white text-center font-bold py-2 px-5 bg-slate-700 rounded-lg  hover:bg-slate-800 ease-in transition-all shadow-lg">
              Paylaş
            </button>
        </div>
      </div>
    </div>
  );
}
