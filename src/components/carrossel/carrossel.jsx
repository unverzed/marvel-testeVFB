import { Nav, Card } from './style'
import { AiOutlineLeftSquare, AiOutlineRightSquare } from 'react-icons/ai'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'

export default function Carrossel() {
  const [heros, setHeros] = useState([])
  const md5 = 'b32f6e8bc2d4f0ed4fd27d999af9d3c4'
  const timeStamp = '1670619895'
  const publicKey = '870c7a5f642ead24f996d96b3feaf2f3'

  useEffect(() => {
    const promise = axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${md5}&limit=6`,
    )
    promise.then((response) => {
      setHeros(response.data.data.results)
      //console.log('eu sou o hero', response.data.data.results)
      console.log(heros)
      //console.log(response.data.data.results)
    })
    promise.catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <Nav>
      <div className="nav-title">
        <h2>PERSONAGENS EM DESTAQUE</h2>
        <div className="nav-icons">
          <AiOutlineLeftSquare className="navigation" />
          <AiOutlineRightSquare className="navigation" />
        </div>
      </div>
      <div className="all-cards">
        {heros.map((hero) => {
          return (
            <Card key={hero.id}>
              <img
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt=""
              />
              <span>{hero.name}</span>
            </Card>
          )
        })}
      </div>
    </Nav>
  )
}
