import {
  Container,
  DescriptionPhase1,
  DescriptionPhase2,
  DescriptionPhase3,
  DescriptionPhase4,
  PhaseContainer,
  Title,
  PhaseNumber1,
  PhaseNumber2,
  PhaseNumber3,
  PhaseNumber4,
} from "./styled";

const Phases = () => {
  return (
    <Container>
      <Title>Conheça as etapas para se tornar voluntário</Title>
      <PhaseContainer>
        <div>
          <PhaseNumber1>1</PhaseNumber1>
          <DescriptionPhase1>Preencha o cadastro</DescriptionPhase1>
        </div>

        <div>
          <PhaseNumber2>2</PhaseNumber2>
          <DescriptionPhase2>
            Formação com duração de três horas para conhecer a estrutura,
            projetos e programas da ONG
          </DescriptionPhase2>
        </div>

        <div>
          <PhaseNumber3>3</PhaseNumber3>
          <DescriptionPhase3>
            Treinamento especifico, fechamento de vagas, assinatura do Termo de
            Adesão
          </DescriptionPhase3>
        </div>

        <div>
          <PhaseNumber4>4</PhaseNumber4>
          <DescriptionPhase4>
            Boas vindas! Apresentação dos voluntários à equipe do Instituto
            Social Ágatha
          </DescriptionPhase4>
        </div>
      </PhaseContainer>
    </Container>
  );
};

export default Phases;
