import styled from 'styled-components'

const Bottom = styled.footer`
  width: 100vw;
  height: 270px;
  background: #222222 0% 0% no-repeat padding-box;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ul,
  span {
    color: #9b9b9b;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-family: 14px;
  }

  .list-title,
  h1, h2 {
    color: #ffffff;
    font-family: 'Oswald', Arial, Helvetica, sans-serif;
    font-size: 19px;
    margin-bottom: 9px;
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
  }

  .social-medias img {
    width: 24px;
    height: 24px;
  }

  .medias {
    flex-direction: row;
    gap: 17.34px;
  }
`

export { Bottom }
