import styled from 'styled-components'

const Main = styled.main`
  background-color: #ffffff;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
   overflow-x: hidden;

  h3 {
    margin-top: 147px;
    margin-left: 134px;
    color: #000000;
    font-size: 28px;
    font-family: 'Oswald', Arial, Helvetica, sans-serif;
    font-weight: 600;

    @media (max-width: 500px) {
      margin-left: 5px;
      margin-top: 30px;
     
    }
  }

  .all-caracters {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    align-content: flex-start;

    @media (max-width: 500px) {
      padding-left: 0px;
    }
  }

  .title {
    width: 100%;
  }

  .character {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;

    @media (max-width: 500px) {
      width: 100%;
    }
  }

  .buttons {
    display: flex;
  }

  .pagination {
    display: flex;
    gap: 5px;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 100px
  }

  button {
    width: 32px;
    height: 32px;
    border: none;
  }

  .button__active {
    background-color: red;
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
