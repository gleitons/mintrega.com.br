"use client";
import Image from "next/image";
import { useState } from "react";
import Imagem from "./Imagem";
import Placa from "./Placa";
export default function Vende() {
  const geraImagem = () => {
    setImgi (<><button className="p-2 bg-red-500 hover:bg-red-400" onClick={fechaImagem}>Fechar</button> <Imagem /></>  )
    setGeraTexto ('NÃO DEIXE PRA DEPOIS, COMPRE AGORA!!')
  };
  const fechaImagem = () => {
    setImgi(<button className="p-2 bg-red-500 hover:bg-red-400" onClick={geraImagem}>
    + informações
  </button>)
  setGeraTexto('')
  }

  const [imgi, setImgi] = useState(
    <button className="p-2 bg-red-500 hover:bg-red-400" onClick={geraImagem}>
      + informações
    </button>
  );
  const [geraTexto, setGeraTexto] = useState('');
  return (
    <div className="md:flex  w-5/6 m-auto mt-4 ">
      <div className="w-full leading-8 bg-slate-300 p-2 mx-3 rounded-md">
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
        <a
          href="https://api.whatsapp.com/send?phone=555180652808&text=Ol%C3%A1,%20gostaria%20de%20adquirir%20o%20dom%C3%ADnio%20https://www.mintrega.com.br/"
          target="_blank"
        >
          <button
            type="button"
            className="mt-3 text-center inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-50 sm:mt-0 sm:w-auto"
          >
            ADQUIRIR ESTE DOMÍNIO
          </button>
        </a>
      </div>

      <div className="w-full">
        <div>
          {imgi}
          {geraTexto}
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=555180652808&text=Ol%C3%A1,%20gostaria%20de%20adquirir%20o%20dom%C3%ADnio%20https://www.mintrega.com.br/"
          target="_blank"
        >
          <Placa />
          <Placa />
          <Placa />

          {/* <Image  src={vendese} className="rounded-lg" alt="Vende-se este dominio" quality={60}/> */}
        </a>
      </div>
    </div>
  );
}
