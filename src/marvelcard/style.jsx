import styled from 'styled-components'

const MarvelCard = styled.section`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
      margin-top: calc(1400px + 200px);
    }

  img {
    width: 1016px;
    height: 180px;

    @media (max-width: 500px) {
      width: 90%;
      height: 200px;
    }

    @media (max-width: 400px) {
      height: 150px;
    }
  }

  h1 {
    font-family: 'Oswald', Arial, Helvetica, sans-serif;
    font-size: 62px;
    color: #000000;
    font-weight: 600;
    margin-bottom: 30px;

    @media (max-width: 500px) {
      text-align: center;
    }

  }

  span {
    color: #9b9b9b;
    font-size: 20px;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    margin-bottom: 42px;
  }

  button {
    width: 324px;
    height: 61px;
    background: #ed1b24 0% 0% no-repeat padding-box;
    opacity: 1;
    border: none;
    color: #FFFFFF;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 600;
  }

  p {
    color: #ed1b24; 
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 150px;
    margin-top: 15px;
  }
`

export { MarvelCard }
