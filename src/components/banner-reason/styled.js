import styled from "styled-components";

export const Content = styled.div`  
  padding: 2rem 0;

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
  }

  ol li {
    font-size: 1.5rem;
  }

  h2 {
    @media(min-width: 720px) {
      font-size: 4rem;
    }
  }

  ol li {
      @media(min-width: 720px) {
      font-size: 2rem;
    }
  }
`

export const ContentTitle = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    color: #2B0955;
    font-weight: 700;
    font-size: 2.25rem;
  }

  p {
    margin-top: 2rem;
    font-size: 1.8rem;
    font-weight: 600;
  }
`

export const ContentReasons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    text-align: center;
  }

  div.reason {
    h3 {
      font-size: 2rem;
      font-weight: 600;
      color: #F9573F;
    }

    ul {
      list-style: none;
      padding-left: 0;
    }
  }
`