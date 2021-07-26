import manVolunteer from "../../assets/images/man-volunteer.png";
import womanVolunteer1 from "../../assets/images/woman-volunteer.png";
import {
  VolunteerImage,
  MainContainer,
  Title,
  CardsContainer,
  TestimonyCard,
  VolunteersTestimony,
  VolunteerName,
} from "./styled";

const Testimony = () => {
  return (
    <MainContainer>
      <Title>Depoimentos dos voluntários</Title>
      <CardsContainer>
        <TestimonyCard>
          <VolunteersTestimony>
            Ser voluntária da ONG Ágatha mudou a minha forma de enxergar a vida.
          </VolunteersTestimony>
          <VolunteerImage src={womanVolunteer1} alt="woman volunteer" />
          <VolunteerName>Thaís da Holanda</VolunteerName>
        </TestimonyCard>
        <TestimonyCard>
          <VolunteersTestimony>
            Ser voluntário da ONG Ágatha mudou a minha forma de enxergar a vida.
          </VolunteersTestimony>
          <VolunteerImage src={manVolunteer} alt="man volunteer" />
          <VolunteerName>Fabiano das Arábias</VolunteerName>
        </TestimonyCard>
      </CardsContainer>
    </MainContainer>
  );
};

export default Testimony;
