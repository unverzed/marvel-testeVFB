import { Nav, Card } from './style'
import { AiOutlineLeftSquare, AiOutlineRightSquare } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Carrossel() {
  const [heros, setHeros] = useState([])

  const md5 = 'b32f6e8bc2d4f0ed4fd27d999af9d3c4'
  const timeStamp = '1670619895'
  const publicKey = '870c7a5f642ead24f996d96b3feaf2f3'
  const item = [
    '1014858',
    '1009189',
    '1009351',
    '1009664',
    '1009187',
    '1009368',
  ]

  useEffect(() => {
    const promise = axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/1009351?ts=${timeStamp}&apikey=${publicKey}&hash=${md5}&limit=100`,
    )
    promise.then((response) => {
      setHeros(response.data.data.results)
      console.log(response.data.data.results)
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
        {heros
          .filter((item) => item.name ===  1014858 || item.id === 1009189)
          .map((item) => {
            return (
              <Card key={item.id}>
                <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt=""
                />
                <span>{item.name}</span>
              </Card>
            )
          })}
      </div>
    </Nav>
  )
}
