import { Bottom } from './style'
import captainmarvel from '../../assets/captainmarvel.jpg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import spotify from '../../assets/spotify.svg'
import youtube from '../../assets/youtube.svg'
import logofooter from '../../assets/marvel-logo-footer.jpeg'

export default function Footer() {
  return (
    <Bottom>
      <div className="first-infos">
        <img className="logo" src={logofooter} />
        <ul>
          <div>
            <li className="list-title">A Marvel</li>
            <li>Sobre a Marvel</li>
            <li>Ajuda</li>
            <li>Carreiras</li>
          </div>
        </ul>
        <ul>
          <div>
            <li className="list-title">Mídia</li>
            <li>Filmes</li>
            <li>Quadrinhos</li>
            <li>Programas de TV</li>
            <li>Jogos</li>
          </div>
        </ul>
      </div>
      <section  className='last-infos'>
        <article>
          <h1>Última do Blog</h1>
          <div>
            <img src={captainmarvel} />
            <p>
              <span>Captain Marvel Challenge invadiu</span>
              <span> o tapete vermelho do Oscar</span>
            </p>
          </div>
          <span>Continuar lendo</span>
        </article>
        <div className="social-medias">
          <h2>Siga a Marvel</h2>
          <div className="medias">
            <img src={facebook} />
            <img src={spotify} />
            <img src={instagram} />
            <img src={youtube} />
          </div>
        </div>
      </section>
    </Bottom>
  )
}
