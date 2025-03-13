import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const Redes = () => {
  return (
    <div className='bg-[#35adc2] p-10 flex-col justify-center text-center items-center'>
        <h3 className="text-balance text-3xl font-normal tracking-tight  px-16">
            Seguinos en nuestras redes
        </h3>

        <div className='lg:flex text-center justify-center items-center gap-10 py-10'>
            <div className='flex justify-center items-center mb-5 lg:mb-0'>
            <a href=""><FaInstagram className="text-4xl" /></a>
            </div>
            <div className='flex justify-center items-center'>
                <a href="">
                <FaFacebook className="text-4xl" />

                </a>
            </div>
        </div>
    </div>
  )
}
