import { useState, useEffect } from 'react'
import axios from 'axios'
import { Search, Form } from './style'

export default function SearchBar() {
  const [heros, setHeros] = useState([])
  const [query, setQuery] = useState('')
  const md5 = 'b32f6e8bc2d4f0ed4fd27d999af9d3c4'
  const timeStamp = '1670619895'
  const publicKey = '870c7a5f642ead24f996d96b3feaf2f3'

  function renderSearchings(event) {
    event.preventDefault()

    const promise = axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&ts=${timeStamp}&apikey=${publicKey}&hash=${md5}&limit=10`,
    )
    promise.then((response) => {
      setHeros(response.data.data.results)
      console.log(response)
    })
    promise.catch((error) => {
      console.log(error)
    })
  }

  return (
    <Search>
      <Form onChange={renderSearchings}>
        <input
          placeholder="Procure um personagem"
          autoFocus
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </Form>
      <div className="search-response">
        {heros.map((hero) => {
          return (
            <div className='character'>
              <p>{hero.name}</p>
              <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}></img>
            </div>
          )
        })}
      </div>
    </Search>
  )
}
