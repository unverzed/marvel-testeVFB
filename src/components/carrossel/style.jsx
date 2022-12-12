import styled from 'styled-components'

const Nav = styled.nav`
  width: 100vw;
  background-color: #000000;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 28px;
    color: #ffffff;
    opacity: 1;
    font-family: 'Oswald', Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-left: 135px;

    @media (max-width: 500px) {
      font-size: 30px;
      margin-left: 5px;
    }
  }

  .all-cards {
    display: flex;
    margin-top: 39px;
    gap: 30.87px;
    overflow-x: auto;
    scroll-behavior: smooth;
    margin-left: 134px;
    margin-right: 134px;

    @media (max-width: 500px) {
      margin-left: 0px;
      gap: 5px;
    }
  }

  .all-cards::-webkit-scrollbar {
      display: none;
    }

  .nav-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navigation {
    color: #ffffff;
    width: 41px;
    height: 41px;
  }

  .nav-icons {
    margin-right: 135px;
    gap: 10px;

    @media (max-width: 500px) {
      display: flex;
      gap: 5px;
      margin-right: 5px;
    }
  }
`

const Card = styled.section`
  width: 239px;
  height: 272px;
  position: relative;

  @media (max-width: 500px) {
    width: 200px;
    width: 200px;
  }

  section::before {
    z-index: -1;
  }

  img {
    width: 239px;
    height: 272px;
    border-bottom: 4px solid #ed1b24;

    @media (max-width: 500px) {
      width: 200px;
    }

  
  }

  span {
    z-index: 1;
    font-size: 18px;
    z-index: 1;
    position: absolute;
    font-size: 18px;
    bottom: 22px;
    color: white;
    left: 85px;
    font-weight: bold;
  }
`

export { Nav, Card }
