import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #ada7ce;
  flex-direction: column;
  padding: 50px 0 20px;
  align-items: center;
`;

export const Title = styled.h1`
  color: #2b0955;
  font-size: 60px;
  grid-row: 1 / 4;
  padding: 30px;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
`;

export const RequirementsTitle = styled.h2`
  color: #2b0955;
  text-transform: uppercase;
  font-size: 25px;
  padding-left: 40px;
  padding-bottom: 20px;
  padding-top: 20px;
  grid-column: 1/4;
`;

export const RequirementsDescription = styled.p`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #ada7ce;
  gap: 15px;
  padding: 0 0 40px 0;
  margin: 0;
`;

export const RequirementGreen = styled.p`
  background-color: #359d10;
  border-radius: 70px;
  color: #ffffff;
  width: 50%;
  padding: 10px;
  text-align: center;
  display: block;
  margin: 0 auto;
`;

export const RequirementBlue = styled.p`
  background-color: #0d1ca4;
  border-radius: 70px;
  color: #ffffff;
  width: 50%;
  padding: 10px;
  text-align: center;
  display: block;
  margin: 0 auto;
`;

export const RequirementYellow = styled.p`
  background-color: #f3b81e;
  border-radius: 70px;
  color: #ffffff;
  width: 50%;
  padding: 10px;
  text-align: center;
  display: block;
  margin: 0 auto;
`;

export const RequirementOrange = styled.p`
  background-color: #f9573f;
  border-radius: 70px;
  color: #ffffff;
  width: 50%;
  padding: 10px;
  text-align: center;
  display: block;
  margin: 0 auto;
`;

export const Content = styled.div`
  max-width: 1140px;
  width: 100%;
`

export const OpportunityCard = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 100%;
  margin: 15px;
  font-size: 1em;
  padding: 0 1rem;

  background-color: #faf7f7;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  div {
    font-weight: 500;
    border-bottom: 1px solid #cdcdcd;
    padding-bottom: 8px;
    min-height: 80px;
    display: flex;
    align-items: center;
  }
`;

// export const OpportunityTitle = styled.div`
//   font-weight: 500;
//   border-bottom: 1px solid #cdcdcd;
//   padding-bottom: 8px;
// `;
