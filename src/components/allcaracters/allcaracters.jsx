import { Main, Card } from './style'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function AllCharacters() {
  const [heros, setHeros] = useState([])
  const md5 = 'b32f6e8bc2d4f0ed4fd27d999af9d3c4'
  const timeStamp = '1670619895'
  const publicKey = '870c7a5f642ead24f996d96b3feaf2f3'

  useEffect(() => {
    const promise = axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${md5}&limit=30`,
    )
    promise.then((response) => {
      setHeros(response.data.data.results)
      console.log(heros)
    })
    promise.catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <Main>
      <h3>LISTA DE PERSONAGENS DA MARVEL</h3>
      <div className="all-caracters">
        {heros.map((hero) => {
          return (
            <Card key={hero.id}>
              <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
              <div className="hero-name">
                <span>{hero.name}</span>
              </div>
            </Card>
          )
        })}
      </div>
    </Main>
  )
}
