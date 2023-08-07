import Image from "next/image";
import vendese from "../../public/img/vende.gif"
import Placa from "./Placa";
export default function Vende() {
  return (
    <div className="md:flex  w-5/6 m-auto mt-4 ">
      <div className="w-full leading-8">
        <h2 className="text-2xl">Afinal, por que registrar um domínio?</h2>
        <p>
          Assim como no mundo offline, ter um bom endereço é muito importante
          para os negócios. Um bom nome de domínio garante que seus clientes
          encontrem sua empresa com mais facilidade na internet. Veja outras
          vantagens de registrar um domínio:
        </p>
        <ul className="list-disc">
          <li>Aumenta a credibilidade do nome da sua empresa</li>
          <li>Unifica os pontos de contato da sua marca</li>
          <li>Sua empresa, loja virtual ou blog online 24h por dia</li>
        </ul>
        <a href="https://api.whatsapp.com/send?phone=555180652808&text=Ol%C3%A1,%20gostaria%20de%20adquirir%20o%20dom%C3%ADnio%20https://www.mintrega.com.br/" target="_blank"><button type="button" className="mt-3 text-center inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">ADQUIRIR ESTE DOMÍNIO</button></a>

      </div>
      <div className="w-full">
        <a href="https://api.whatsapp.com/send?phone=555180652808&text=Ol%C3%A1,%20gostaria%20de%20adquirir%20o%20dom%C3%ADnio%20https://www.mintrega.com.br/" target="_blank">

            <Placa/>
            <Placa/>
            <Placa/>

            {/* <Image  src={vendese} className="rounded-lg" alt="Vende-se este dominio" quality={60}/> */}
        </a>
      </div>
    </div>
  );
}
