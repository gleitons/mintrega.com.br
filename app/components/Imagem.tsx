import vendese from "../../public/img/vende.gif"
import Image from "next/image"
export default function Imagem() {
    return (
       
        <Image src={vendese} className="rounded-lg my-3" alt="Vende-se este dominio" quality={60} />
    )
}