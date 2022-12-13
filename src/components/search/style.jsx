import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  justify-content: center;
  input {
    width: 500px;
    height: 50px;
    margin-top: 10px;
    text-align: center;
    font-size: 20px;

    @media (max-width: 500px) {
      width: 300px;
     
    }
  }
`

const Search = styled.section`


  .search-response {
    width: 100%;
    height: 100%;
    font-size: 20px;
    gap: 10px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .character {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  img {
    width: 60px;
    height: 55px;
  }

  p {
    font-family: 'Oswald', Arial, Helvetica, sans-serif;
    font-size: 20px;
  }
`

export { Search, Form }
