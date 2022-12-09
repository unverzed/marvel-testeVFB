import styled from 'styled-components';

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #000000;
  height: 105px;
  opacity: 1;

  img {
    width: 138px;
    height: 62px;
    margin-left: 22.32px;
  }

  p {
    font-size: 14px;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-weight: bold;
  }

  .head-categories {
    display: flex;
    flex-direction: row;
    gap: 19px;
    margin-right: 36px;
  }

  a {
    text-decoration: none;
  }
`

export { Head }
