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
  }

  .all-cards {
    display: flex;
    margin-left: 135px;
    margin-top: 39px;
    gap: 30.87px;
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
  }
`

const Card = styled.section`
  width: 239px;
  height: 272px;
  background-color: purple;
  position:relative;

  section::before {
    z-index: -1;
  }

  img {
    width: 239px;
    height: 272px;
    border-bottom: 4px solid #ed1b24;
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
