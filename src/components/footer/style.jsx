import styled from 'styled-components'

const Bottom = styled.footer`
  width: 100vw;
  height: 270px;
  background: #222222 0% 0% no-repeat padding-box;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 500px) {
    justify-content: center;
    height: 200px;
  }

  .logo {
    width: 44px;
    height: 67px;
  }

  .first-infos,
  .last-infos {
    display: flex;
    gap: 50px;
    width: 30%;
  }

  ul,
  span {
    color: #9b9b9b;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-family: 14px;

    @media (max-width: 500px) {
      display: none;
    }
  }

  .list-title,
  h1,
  h2 {
    color: #ffffff;
    font-family: 'Oswald', Arial, Helvetica, sans-serif;
    font-size: 19px;
    margin-bottom: 9px;
  }

  h1 {
    @media (max-width: 500px) {
      display: none;
    }
  }

  article {
    display: flex;
    flex-direction: column;
  }

  article > div {
    display: flex;
    align-items: center;
    margin-top: 17px;
    margin-bottom: 10px;
    gap: 11px;

    @media (max-width: 500px) {
      display: none;
    }
  }

  span {
    text-decoration: underline;
  }

  p span {
    display: block;
    color: #ffffff;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-family: 14px;
    text-decoration: none;
  }

  img {
    width: 60px;
    height: 60px;
  }

  .social-medias {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 500px) {
      align-items: center;
      width: 200px;
    }
  }

  ul > div {
    display: flex;
    gap: 5px;
    flex-direction: column;
  }

  .social-medias img {
    width: 24px;
    height: 24px;
  }

  .medias {
    flex-direction: row;
    width: 100%;
    display: flex;
    gap: 17.34px;
    justify-content: center;

    @media (max-width: 500px) {
      gap: 10px;
    }
  }
`

export { Bottom }
