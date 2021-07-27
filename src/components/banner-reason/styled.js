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
  display: flex;
  justify-content: space-between;
  max-width:900px;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 720px) {
    flex-direction: column;
    text-align: center;
  }

  div.reason {
    div.reason-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 200px;

      h3 {
        font-size: 2rem;
        font-weight: 600;
        color: #F9573F;
      }

      img {
        display: block;
        width: 120px;
      }
    }

    div.reason-list {
      ul {
        list-style: none;
        padding-left: 0;
      }
    }
  }
`