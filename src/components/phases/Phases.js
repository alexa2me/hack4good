import { Row, Col } from "react-bootstrap";
import {
  StyledContainer,
  StyledTitleCol,
  StyledCol,
  StyledColPhase2,
  StyledColPhase3,
  StyledColPhase4,
  Phase1,
  Phase2,
  Phase3,
  Phase4,
  DescriptionPhase1,
} from "./styled";

const Phases = () => {
  return (
    <StyledContainer>
      <Row>
        <StyledTitleCol>
          Conheça as etapas para se tornar voluntário
        </StyledTitleCol>
      </Row>

      <Row>
        <StyledCol>
          <Phase1>1</Phase1>
          <DescriptionPhase1>Preencha o cadastro</DescriptionPhase1>
        </StyledCol>

        <Col></Col>

        <StyledColPhase3>
          <Phase3>3</Phase3>
          <p>
            Treinamento especifico, fechamento de vagas, assinatura do Termo de
            Adesão
          </p>
        </StyledColPhase3>
      </Row>

      <Row>
        <StyledColPhase2>
          <Phase2>2</Phase2>
          <p>
            Formação com duração de três horas para conhecer a estrutura,
            projetos e programas da ONG
          </p>
        </StyledColPhase2>

        <Col></Col>

        <StyledColPhase4>
          <Phase4>4</Phase4>
          <p>
            Boas vindas! Apresentação dos voluntários à equipe do Instituto
            Social Ágatha
          </p>
        </StyledColPhase4>
      </Row>
    </StyledContainer>
  );
};

export default Phases;
