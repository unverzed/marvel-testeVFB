import { Head } from './style'
import logomarvel from '../../assets/logo-marvel.svg'

export default function Header() {
  return (
    <Head>
      <img src={logomarvel} />
      <div className="head-categories">
        <a href="https://www.marvel.com/movies">
          <p>FILMES</p>
        </a>
        <a href="https://www.marvel.com/comics">
          <p>QUADRINHOS</p>
        </a>
        <a href="https://www.marvel.com/tv-shows">
          <p>PROGRAMAS DE TV</p>
        </a>
        <a href="https://www.marvel.com/games">
          <p>JOGOS</p>
        </a>
      </div>
    </Head>
  )
}
