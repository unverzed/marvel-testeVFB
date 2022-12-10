import styled from 'styled-components'

const Section = styled.section`
  width: 100vw;
  height: 348px;
  background: #000000 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;

  .red {
    width: 408px;
    height: 329px;
    background: #ed1b24 0% 0% no-repeat padding-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -103px;
  }

  p {
    font-size: 62px;
    color: #ffffff;
    font-family: 'Oswald', Arial, Helvetica, sans-serif;
    font-weight: 600;
  }

  p span {
    display: block;
  }

  .news {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 72px;
  }

  .news p span {
    display: block;
  }

  .news p {
    font-size: 20px;
  }

  input {
    width: 369px;
    height: 61px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #f2f2f2;
    border: none;
  }

  button {
    width: 120px;
    height: 61px;
    background: #ed1b24 0% 0% no-repeat padding-box;
    opacity: 1;
    border: none;
    color: #ffffff;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 14px;
  }

  label {
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    margin-top: 50px;
    margin-bottom: 9px;
  }
`
export { Section }
