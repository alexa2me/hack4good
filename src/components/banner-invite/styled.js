import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 92px;
  background: #2b0955;
  color: #FFFFFF;
  min-height: 50vh;
  padding: 2rem 0;
  position: relative;

  h2 {
    font-size: 2.5rem;

    @media(min-width: 720px) {
      font-size: 4rem;
    }
  }

  p {
    font-size: 1.5rem;
    max-width: 671px;
    font-weight: 400;

    @media(max-width: 720px) {
      font-size: 2rem;
  }
}

  button {
    background: #F9573F;
    padding: .5rem 2rem;
    border-radius: 0.5rem;
    font-size: 2rem;
    border: none;
    margin: 5rem auto 0 auto;

    a {
      color: #FFFFFF;
      text-decoration: none;
    }

    &:hover {
      filter: brightness(0.9);
    }

    @media(max-width: 720px) {
      width: 100%;
      margin-top: 3rem;
      font-size: 1.5rem;
    }
  }

  img {
    position: absolute;
    right: 0;
    top: 3rem;
    margin-right: -3rem;

    @media(max-width: 940px) {
      display: none;
    }
  }
`