import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-b from-slate-950 to-slate-900 shadow-2xl shadow-slate-300 p-3">
        <h1 className="text-center text-slate-300 italic opacity-50">
          Copyright{" "}
          <Link to={"https://instagram.com/douloop97"}>
            {" "}
            <span className="font-bold text-white opacity-100">DOU LOOP </span>Team &{" "}
          </Link>
          <Link to={"https://instagram.com/muhendisbeyinlerdou"}>
            <span className="font-bold text-white opacity-100">Mühendis Beyinler Kulübü </span>
          </Link>
        </h1>
      </footer>
    </div>
  );
}
