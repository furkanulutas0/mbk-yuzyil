import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/post/ticket/new-ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      navigate("/ticket", { state: { ticket: data.data.ticketid, name: data.data.fullname } });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex bg-gradient-to-br from-[#e21818] to-[#a00606] h-[100%] sm:h-[90.6vh] p-5">
      <div className="grid grid-cols-1  grid-rows-2 place-items-center md:grid-cols-2 md:grid-rows-1 md:place-items-center gap-8 my-auto mx-auto">
        <div className="flex flex-col items-center">
          <img className="w-96 h-auto" src="/src/media/100yil.svg" alt="100.yil" />
          <h1 className=" text-center text-white font-medium text-3xl">
            Cumhuriyetin 100. Yılı Kutlu Olsun!
          </h1>
          <p className="text-center text-slate-300 my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium repudiandae
            earum id dolore ipsum perspiciatis, architecto deleniti reprehenderit rerum ipsam itaque
            expedita sapiente fugit ab consequatur cum, in repellendus?
          </p>
        </div>
        <div className="bg-slate-200 flex flex-col justify-center rounded-md p-1 md:p-10 h-[85vh]">
          <h1 className="text-4xl font-extrabold italic text-center">
            Sen de 100. Yıl Kartını Oluştur
          </h1>
          <p className="text-center my-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam necessitatibus vitae
            sapiente placeat, nobis quibusdam blanditiis mollitia enim reprehenderit dicta
            architecto tenetur culpa eum ratione odit laudantium, quos similique optio!
          </p>
          <form
            onSubmit={handleSumbit}
            className="flex justify-end gap-3 mx-auto p-1 my-10 rounded-md border-2  border-slate-300">
            <input
              onChange={handleChange}
              className=" bg-transparent outline-none w-full p-2 text-slate-900 font-semibold"
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Adınız ve Soyadınız"
              maxLength={30}
            />
            <button
              className="bg-purple-700 rounded-md p-2 px-5 text-white font-medium"
              type="submit">
              Kaydet
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
