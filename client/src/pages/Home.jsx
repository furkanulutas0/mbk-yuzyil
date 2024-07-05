import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [activity] = useState(false);
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/ticket/new-ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        return;
      }
      setLoading(false);
      navigate("/ticket", { state: { ticket: data.data.ticketid, name: data.data.fullname } });
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="flex bg-gradient-to-br from-[#e21818] to-[#a00606] h-[100%] sm:h-[85.4  vh] p-5">
      <div className="grid grid-cols-1  grid-rows-2 place-items-center md:grid-cols-2 md:grid-rows-1 md:place-items-center gap-8 my-auto mx-auto">
        <div className="flex flex-col items-center">
          <img className="w-96 h-auto" src="100yil.svg" alt="100.yil" />
          <h1 className=" text-center font- text-white font-medium text-3xl">
            Cumhuriyetin 100. Yılı Kutlu Olsun!
          </h1>
          <p className="text-center text-slate-300 my-5">
            {
              "Ey yükselen yeni nesil, istikbal sizindir. Cumhuriyet'i biz kurduk, O'nu yükseltecek ve sürdürecek sizlersiniz."
            }
          </p>
        </div>
        <div className="bg-slate-200 flex flex-col justify-center rounded-md p-1 md:p-10 h-[81.1vh]">
          <h1 className="text-4xl font-extrabold italic text-center">
            Sen de 100. Yıl Kartını Oluştur
          </h1>
          <p className="text-center my-5 ">
            Kardeşçe birlikte yürüdüğümüz 100 yılda, Cumhuriyet`in özgürlük ve bağımsızlık çınarı
            olarak ulaştığı bu büyük dönüm noktasında, sanal kartınla bu değerli günü ölümsüzleştir!
            #Cumhuriyet100Yaşında
          </p>
          <form
            onSubmit={handleSumbit}
            className="flex justify-end gap-3 mx-auto p-1 my-10 rounded-md border-2  border-slate-300">
            <input
              disabled={activity}
              onChange={handleChange}
              className=" bg-transparent outline-none w-full p-2 text-slate-900 font-semibold"
              type="text"
              name="fullname"
              id="fullname"
              placeholder={activity ? "Etkinlik Sonlandı" : "İsim ve Soyisminiz"}
              maxLength={30}
            />
            <button
              disabled={activity}
              className="bg-purple-700 rounded-md p-2 px-5 text-white font-medium hover:bg-purple-800 transition-all ease-in disabled:bg-slate-400"
              type="submit">
              {loading ? "Yükleniyor..." : "Oluştur"}
            </button>
          </form>
          <Link to={"/all-tickets"}>
            <h1 className="text-center font-bold text-red-900 hover:text-red-700 transition-all ease-in cursor-pointer">
              Oluşturulan Kartları Görmek İçin Tıklayın
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
