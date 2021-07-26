import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #2e2755;
  color: #ffffff;
  height: 70vh;
  display: flex;
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 85%;
  gap: 150px;
  margin: 0 auto;
`;

export const VolunteerImage = styled.img`
  width: 13em;
  height: 13em;
  border-radius: 50%;
  position: relative;
  left: 4.3em;
  top: 2.8em;
  z-index: 1;
`;

export const Title = styled.p`
  font-size: 1.8em;
  text-transform: uppercase;
  margin-left: 3.5em;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const TestimonyCard = styled.div`
  background-color: #ffffff;
  color: #9e9e9e;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 220px;
  height: 18em;
`;

export const VolunteersTestimony = styled.p`
  color: #353839;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  padding-left: 28px;
`;

export const VolunteerName = styled.p`
  background-color: #f9573f;
  color: #ffffff;
  font-weight: 500;
  grid-column: 1 / 3;
  padding: 12px;
  margin-left: 20px;
  font-size: 20px;
  position: relative;
  bottom: 25px;
  width: 90%;
  border-radius: 10px;
`;
