import { Main, Card } from './style'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from '../search/search'

export default function AllCharacters() {
  const [heros, setHeros] = useState([])
  const [totalHeros, setTotalHeros] = useState([])
  const [itemsPerPage, setItemsPerPage] = useState(30) //itens por página
  const [currentPage, setCurrentPage] = useState(0) //página atual
  const [offset, setOffset] = useState(0) //offseat muda de 30 em 30

  const pages = Math.ceil(totalHeros / itemsPerPage) //ceil arredonda pra cima
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItens = heros.slice(startIndex, endIndex)

  const md5 = 'b32f6e8bc2d4f0ed4fd27d999af9d3c4'
  const timeStamp = '1670619895'
  const publicKey = '870c7a5f642ead24f996d96b3feaf2f3'

  useEffect(() => {
    getAllHeros()
  }, [offset])

  function getAllHeros() {
    const promise = axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${md5}&limit=100i&offset=${offset}`,
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
    setCurrentPage(Number(e.target.value))
    const newOffset = (e.selected * itemsPerPage) % heros.length
    setOffset(newOffset)
    console.log(Number(newOffset))
  
  }

  return (
    <Main>
      <SearchBar />
      <div className="title">
        <h3>LISTA DE PERSONAGENS DA MARVEL</h3>
      </div>
      <div className="all-caracters">
        <div className="character">
          {currentItens.map((hero) => {
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
        {Array.from(Array(pages), (item, index) => {
          return (
            <button value={index} onClick={nextPage}>
              {index + 1}
            </button>
          )
        })}
      </div>
    </Main>
  )
}
