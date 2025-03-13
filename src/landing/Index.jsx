import Layout from "../components/Layout";
import { Confiabilidad } from "./components/Confiabilidad";
import Hero from "./components/Hero";
import { Redes } from "./components/Redes";
import { Servicios } from "./components/Servicios";
import { Venta } from "./components/Venta";

export const Landing = () => {
  return (
    <Layout className="mx-auto max-w-7xl sm:px-6 lg:px-8 top-0 ">
        <Hero />
        <Venta />
        <Servicios />
        <Confiabilidad />
        <Redes />
   </Layout>
  );
}
