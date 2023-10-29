import TextChanger from "./text-changer-comp/TextChanger";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-slate-950 to-slate-900 shadow-2xl shadow-slate-300 border-b-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <div className="flex items-center">
          <Link to={"/"}>
          <img src="mbklogo.png" alt="mbklogo" width={75} />
          </Link>
          <Link to={"/"}> 
          <img src="looplogo.png" alt="mbklogo" width={60} />
          </Link>
          <p className="text-white font-medium font-sans hidden md:inline md:mx-5">Mühendis Beyinler Kulübü</p>          
        </div>
        <TextChanger />
      </div>
    </header>
  );
}
