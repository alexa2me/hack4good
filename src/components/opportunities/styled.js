import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: #ada7ce;
  padding: 50px 0 20px;
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

export const Heart = styled.img`
  width: 32px;
  text-align: center;
`;

export const HeartContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Requirements = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
<<<<<<< HEAD:src/components/opportunities/styled.js
  justify-content: center;
  align-items: center;
  width: 75%;
  margin: 0 auto;
  gap: 20px;
=======
  background-color: #ada7ce;
  gap: 15px;
  padding: 0 0 40px 0;
  margin: 0;
>>>>>>> main:src/components/oportunities/styled.js
`;

export const RequirementsTitleContainer = styled.p`
  color: #2b0955;
  text-transform: uppercase;
  grid-column: 1/4;
  text-align: center;
  padding: 40px 0 30px 0;
`;

export const RequirementsTitle = styled.p`
  font-size: 1.3em;
`;

export const RequirementsDescription = styled.p`
  background-color: #ada7ce;
  padding: 0 0 40px 0;
  margin: 0;
`;

export const RequirementGreen = styled.p`
  color: #359d10;
  width: 50%;
  padding: 10px;
  text-align: center;
  display: block;
  margin: 0 auto;
`;

export const RequirementPurple = styled.p`
  color: #174aff;
  width: 50%;
  padding: 10px;
  text-align: center;
  display: block;
  margin: 0 auto;
`;

export const OpportunityCard = styled.div`
  background-color: #faf7f7;
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const OpportunityTitle = styled.div`
  font-weight: 500;
  border-bottom: 1px solid #cdcdcd;
  padding-bottom: 8px;
`;
