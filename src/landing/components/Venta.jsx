// import React from "react";
import { FaPhone } from "react-icons/fa";

const ventas = [
  {
    img: "assets/venta/1.webp",
  },
  {
    img: "assets/venta/2.webp",
  },
  {
    img: "assets/venta/3.webp",
  },
  {
    img: "assets/venta/4.webp",
  },
];
export const Venta = () => {
  return (
    <div className="min-h-[80vh] py-20">
      <div className="mx-auto  flex-col max-w-7xl px-6 pb-8 lg:px-8 text-center justify-center items-center ">
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-[#234e83] mt-10 mb-6">
          Venta, Alquiler y Fabricación
        </h1>
        <h3 className="text-balance text-3xl font-normal tracking-tight text-[#333333]">
          de camas y sillas ortopédicas, camillas fijas de traslado, mesas
          hospitalarias, colchones hospitalarios con funda impermeable y grúas
          levanta pacientes.
        </h3>

        <div className="flex justify-around items-center flex-wrap gap-4">
          {ventas.map((venta, v) => (
            <div key={v} className="shadow-lg rounded-3xl w-52 my-10">
              <img
                src={venta.img}
                alt=""
                className="object-contain shadow-lg rounded-3xl"
              />
            </div>
          ))}
        </div>

        <div className="relative inline-flex rounded-full px-2 py-2 text-sm/6 text-white bg-[#234e83] mt-6 ">
                {/* Announcing our next round of funding.{' '} */}
                <a href="#" className="font-semibold flex justify-center items-center gap-2 px-4">
                  <span aria-hidden="true" className="absolute inset-0" />
                  <FaPhone/> 
                 CONSULTAR
                </a>
      </div>
    </div>
    </div>
  );
};
