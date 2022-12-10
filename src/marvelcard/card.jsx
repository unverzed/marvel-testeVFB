import cardsMarvel from "../assets/cards-fan-desktop.png"
import { MarvelCard } from "./style"

export default function Card() {
  return (
    <MarvelCard>
      <h1>MARVEL MASTERCARD</h1>
      <span>Desbloqueie seus super poderes</span>
      <img src={cardsMarvel}/>
      <button>CADASTRE-SE AGORA</button>
      <p>ENTENDA COMO FUNCIONA</p>
    </MarvelCard>
  )
}
