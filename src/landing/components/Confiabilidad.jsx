// import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const credibilidad = [
  {
    desc: "Brindamos seguridad y calidez para nuestros clientes, de nuestros productos con garantía de fábrica.",
    img: "assets/confiabilidad/garantia.webp",
  },
  {
    desc: "Trabajamos con Clínicas, Geriátricos, Sanatorios, Ortopedias, Hospitales y Particulares.",
    img: "assets/confiabilidad/hosp.webp",
  },
   {
    desc: "Brindamos asesoramiento y presupuesto sin cargo. Envíos a todos el pais",
    img: "assets/confiabilidad/truck.svg",
  },
];
export const Confiabilidad = () => {
  return (
    <div className="min-h-[80vh] py-20">
      <div className="mx-auto  flex-col max-w-7xl px-6 pb-8 lg:px-8 text-center justify-center items-center  ">
        <div className="w-full flex justify-center items-center mb-10">
          <img src="assets/confiabilidad/logo.webp" alt="" className="w-40" />
        </div>
        <div className="flex justify-center items-center flex-wrap gap-14">
          {credibilidad.map((cred, c) => (
            <div
              key={c}
              className="shadow-lg rounded-3xl h-72 w-72 my-10 bg-[#234e83] p-4 flex flex-col items-center justify-center gap-10"
            >
              <img src={cred.img} alt="" className="w-48 h-28 object-contain" />

              <p className="text-white text-center px-2 font-extralight text-sm">
                {cred.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="relative inline-flex rounded-full px-2 py-2 text-sm/6 text-white bg-[#35adc2] mt-6 ">
                {/* Announcing our next round of funding.{' '} */}
                <a href="#" className="font-semibold flex justify-center items-center gap-2 px-4 text-sm text-[#333333]">
                  <span aria-hidden="true" className="absolute inset-0" />
                  <AiOutlineMail />

                 Consultar
                </a>
      </div>
      </div>
    </div>
  );
};
