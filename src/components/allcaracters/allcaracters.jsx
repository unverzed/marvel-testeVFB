import { Main, Card } from './style'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from '../search/search'

export default function AllCharacters() {
  const [heros, setHeros] = useState([])
  const [totalHeros, setTotalHeros] = useState([])
  const itemsPerPage = 30
  const pages = Math.ceil(totalHeros / itemsPerPage)
  const MAX_ITEMS = 5

  const md5 = '89890b302c504406d6c498bc3577bcc0'
  const timeStamp = '1670870440772'
  const publicKey = '8f731291bab506048d8010b0d4fce0d3'

  useEffect(() => {
    getAllHeros(0)
  }, [])

  function getAllHeros(offset) {
    const promise = axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${md5}&limit=${itemsPerPage}&offset=${offset}`,
    )
    promise.then((response) => {
      setHeros(response.data.data.results)
      setTotalHeros(response.data.data.total)
      console.log(response.data.data.total)
      console.log(response.data.data.results)
    })
    promise.catch((error) => {
      console.log(error)
    })
  }

  function nextPage(e) {
    getAllHeros(Number(e.target.value) * itemsPerPage)

    console.log('target', e.target.value)
  }

  return (
    <Main>
      <SearchBar />
      <div className="title">
        <h3>LISTA DE PERSONAGENS DA MARVEL</h3>
      </div>
      <div className="all-caracters">
        <div className="character">
          {heros.map((hero) => {
            return (
              <Card key={hero.id}>
                <img
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                />
                <div className="hero-name">
                  <span>{hero.name}</span>
                </div>
              </Card>
            )
          })}
        </div>
        {Array.from({ length: MAX_ITEMS })
          .map((_, index) => index + 1)
          .map((page) => (
            <button value={page} onClick={(e) => nextPage(e)}>{page}</button>
          ))}
      </div>
    </Main>
  )
}
