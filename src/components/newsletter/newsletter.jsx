import { Section } from './style'

export default function NewsLetter() {
  return (
    <Section>
      <div className="red">
        <p>
          <span>RECEBA AS</span>
          <span>NOVIDADES</span>
          <span>DA MARVEL</span>
        </p>
      </div>
      <div className="news">
        <p>
          <span>Cadastre-se para receber nossas</span>
          <span>notícias em primeira mão!</span>
        </p>
        <label>SEU MELHOR E-MAIL</label>
        <div className="button">
          <input placeholder="Informe seu melhor e-mail"></input>
          <button>ENVIAR</button>
        </div>
      </div>
    </Section>
  )
}
