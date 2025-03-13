'use client'
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

// import { useState } from 'react'
// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ]

export default function Hero() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden pt-14">
        <img
          alt=""
          src="assets/hero/camaraortopedica.webp"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-16 px-6 lg:px-8">
          <div className="mx-auto py-32 sm:py-48 lg:py-56">
           

            <div className="text-start">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                Camas
              </h1>
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                Ortopédicas
              </h1>
              <p className="mt-8 text-pretty text-lg font-normal text-gray-100 sm:text-xl/8">
                Camas Ortopédicas, camillas, sillas y colchones hospitalarios
              </p>
              {/* <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div> */}
            </div>

            <div className="mt-6 sm:mb-8 flex justify-start items-center gap-4 ">
              <div className="relative  rounded-full px-2 py-2 text-sm/6 text-gray-400 ring-2 ring-[#35adc2] hover:ring-[#35adc2]/50 hover:bg-gray-800">
                {/* Announcing our next round of funding.{' '} */}
                <a href="#" className="font-semibold text-white flex justify-center items-center gap-2 text-xl">
                  <span aria-hidden="true" className="absolute inset-0" />
                  <FaWhatsapp/> 
                  {/* 11 6908 1218  */}
                </a>
              </div>

              <div className="relative rounded-full px-2 py-2 text-sm/6 text-gray-400 ring-2 ring-[#35adc2] hover:ring-[#35adc2]/50 hover:bg-gray-800">
                {/* Announcing our next round of funding.{' '} */}
                <a href="#" className="font-semibold text-white flex justify-center items-center gap-2 text-xl">
                  <span aria-hidden="true" className="absolute inset-0" />
                  <FaPhone/> 
                  {/* 11 3243 7783 */}
                </a>
              </div>
              

              <div className="relative rounded-full px-2 py-2 text-sm/6 text-gray-400 ring-2 ring-[#35adc2] hover:ring-[#35adc2]/50 hover:bg-gray-800">
                {/* Announcing our next round of funding.{' '} */}
                <a href="#" className="font-semibold text-white flex justify-center items-center gap-2 text-xl">
                  <span aria-hidden="true" className="absolute inset-0" />
                  <MdOutlineMailOutline />
                   {/* info@CamasTresCruces.Com.Ar  */}
                </a>
              </div>
            </div>
          </div>

          
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}
