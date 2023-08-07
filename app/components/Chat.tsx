import Image from "next/image";
// import { FaBeer } from 'react-icons/fa';
// import chat from "../../public/img/chat.png"
export default function Chat() {
  return (
    <>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg my-2 flex items-center space-x-4">
        <div className="shrink-0">
          {/* <FaBeer /> */}
          {/* <Image className="h-10 w-10" src={chat} alt="Vende-se este dominio mintrega.com.br" quality={50}/> */}
        </div>
        <div className="text-center">
          <div className="text-xl font-medium text-black text-center">Vende-se Este Dominío</div>
          <p className="text-slate-500 text-center">Clique na mensagem e compre agora mesmo!</p>
          <a href="https://api.whatsapp.com/send?phone=555180652808&text=Ol%C3%A1,%20gostaria%20de%20adquirir%20o%20dom%C3%ADnio%20https://www.mintrega.com.br/" target="_blank"><button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">COMPRAR</button></a>

        </div>
      </div>
    </>
  );
}
