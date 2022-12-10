import styled from 'styled-components'

const Main = styled.main`
  background-color: #ffffff;
  width: 100vw;
  height: 2500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-top: 147px;
    margin-left: 134px;
    color: #000000;
    font-size: 28px;
    font-family: 'Oswald', Arial, Helvetica, sans-serif;
    font-weight: 600;
  }

  .all-caracters {
    width: 60%;
    margin-left: 134px;
    margin-right: 135px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    justify-content: center;

  }
`

const Card = styled.section`
  margin-top: 39px;
  width: 170px;
  height: 193px;
  background-color: red;
  margin-bottom: 30px;

  img {
    width: 170px;
    height: 193px;
    border-bottom: 4px solid #ed1b24;
  }

  .hero-name {
    width: 170px;
    height: 79px;
    background-color: #000000;
    display: flex;
    align-items: center;
  }

  span {
    color: #ffffff;
    margin-left: 23px;
    font-weight: 600;
  }
`

export { Main, Card }
