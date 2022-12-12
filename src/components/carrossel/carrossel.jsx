import { Nav, Card } from './style'
import { AiOutlineLeftSquare, AiOutlineRightSquare } from 'react-icons/ai'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

export default function Carrossel() {
  const carousel = useRef(null);
  const [spider, setSpider] = useState([])
  const [widow, setWidow] = useState([])
  const [hulk, setHulk] = useState([])
  const [thor, setThor] = useState([])
  const [panther, setPanther] = useState([])
  const [thanos, setThanos] = useState([])
  const [iron, setIron] = useState([])

  const md5 = "89890b302c504406d6c498bc3577bcc0";
  const timeStamp = "1670870440772";
  const publicKey = "8f731291bab506048d8010b0d4fce0d3";


  const item = [
    '1014858',
    '1009189',
    '1009351',
    '1009664',
    '1009187',
    '1009652',
    '1009368',
  ]

  useEffect(() => {
    const promise1 = axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${item[0]}?ts=${timeStamp}&apikey=${publicKey}&hash=${md5}`,
    )
    const promise2 = axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${item[1]}?ts=${timeStamp}&apikey=${publicKey}&hash=${md5}`,
    )
    const promise3 = axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${item[2]}?ts=${timeStamp}&apikey=${publicKey}&hash=${md5}`,
    )
    const promise4 = axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${item[3]}?ts=${timeStamp}&apikey=${publicKey}&hash=${md5}`,
    )
    const promise5 = axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${item[4]}?ts=${timeStamp}&apikey=${publicKey}&hash=${md5}`,
    )
    const promise6 = axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${item[5]}?ts=${timeStamp}&apikey=${publicKey}&hash=${md5}`,
    )
    const promise7 = axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${item[6]}?ts=${timeStamp}&apikey=${publicKey}&hash=${md5}`,
    )

    Promise.all([
      promise1,
      promise2,
      promise3,
      promise4,
      promise5,
      promise6,
      promise7,
    ])
      .then((response) => {
        setSpider(response[0].data.data.results)
        setWidow(response[1].data.data.results)
        setHulk(response[2].data.data.results)
        setThor(response[3].data.data.results)
        setPanther(response[4].data.data.results)
        setThanos(response[5].data.data.results)
        setIron(response[6].data.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    console.log(carousel.current.offsetWidth)
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <Nav>
      <div className="nav-title">
        <h2>PERSONAGENS EM DESTAQUE</h2>
        <div className="nav-icons">
          <AiOutlineLeftSquare className="navigation" onClick={handleLeftClick} />
          <AiOutlineRightSquare className="navigation" onClick={handleRightClick}/>
        </div>
      </div>
      <div className="all-cards" ref={carousel}>
        {spider.map((item) => {
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

        {widow.map((item) => {
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

        {hulk.map((item) => {
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

        {thor.map((item) => {
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

        {panther.map((item) => {
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

        {thanos.map((item) => {
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

        {iron.map((item) => {
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
