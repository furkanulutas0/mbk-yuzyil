import TextChanger from "./text-changer-comp/TextChanger";

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-slate-950 to-slate-900 shadow-2xl shadow-slate-300 border-b-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <div className="flex items-center">
          <img src="src/media/mbklogo.png" alt="mbklogo" width={75} />
          <img src="src/media/looplogo.png" alt="mbklogo" width={60} />
          <p className="text-white font-medium font-sans hidden md:inline md:mx-5">Mühendis Beyinler Kulübü</p>          
        </div>
        <TextChanger />
      </div>
    </header>
  );
}
