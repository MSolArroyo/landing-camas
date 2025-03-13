// import React from "react";
import { FaPhone } from "react-icons/fa";

const servicios = [
  {
    img: "assets/servicios/1.webp",
  },
  {
    img: "assets/servicios/2.webp",
  },
  {
    img: "assets/servicios/3.webp",
  },
  
];
export const Servicios = () => {
  return (
    <div className="min-h-[80vh] py-20 bg-[#234e83]" id="servicios">
      <div className="mx-auto  flex-col max-w-7xl px-6 pb-8 lg:px-8 text-center justify-center items-center ">
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-white mt-10 mb-6">
          Nuestros servicios
        </h1>
        <h3 className="text-balance text-3xl font-normal tracking-tight text-gray-300 px-16 mb-6">
        Reparación y Mantenimiento de sillas de rueda, camas ortopédicas y grúa levanta pacientes.
        </h3>

        <div className="flex justify-center items-center  lg:gap-24 flex-wrap gap-10">
          {servicios.map((servicio, s) => (
            <div key={s} className="shadow-lg rounded-3xl w-52 lg:my-10 mt-3">
              <img
                src={servicio.img}
                alt=""
                className="object-contain shadow-lg rounded-3xl"
              />
            </div>
          ))}
        </div>

        <div className="relative inline-flex rounded-full px-2 py-2 text-sm/6 text-white bg-white shadow-lg shadow-black mt-6 ">
                {/* Announcing our next round of funding.{' '} */}
                <a href="#" className="font-semibold flex justify-center items-center gap-2 px-4 text-[#234e83]">
                  <span aria-hidden="true" className="absolute inset-0" />
                  <FaPhone/> 
                 CONSULTAR
                </a>
      </div>
    </div>
    </div>
  );
};
