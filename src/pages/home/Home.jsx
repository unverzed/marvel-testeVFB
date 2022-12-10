import Header from '../../components/header/Header'
import Carrossel from '../../components/carrossel/carrossel'
import topbanner from '../../assets/banner.jpg'
import { Banner } from './style'
import AllCharacters from '../../components/allcaracters/allcaracters'
import Footer from '../../components/footer/footer'
import NewsLetter from '../../components/newsletter/newsletter'

export default function Home() {
  return (
    <>
      <Header />
      <Banner>
        <div className="title">
          <h1>CONHEÇA NOSSOS PERSONAGENS</h1>
        </div>
        <img src={topbanner} />
      </Banner>
      <Carrossel />
      <AllCharacters />
      <NewsLetter/>
      <Footer />
    </>
  )
}
