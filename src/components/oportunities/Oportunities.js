import {
  Container,
  Title,
  RequirementsTitle,
  RequirementsDescription,
  RequirementGreen,
  RequirementBlue,
  RequirementYellow,
  RequirementOrange,
  OpportunityCard,
  Content
  // OpportunityTitle,
} from "./styled";

import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const Oportunities = () => {
  return (
    <>
      <Container >
        <Content>
          <Title>Nossas Oportunidades</Title>

          <Carousel breakPoints={breakPoints}>
            <OpportunityCard >
              <div>Programa Ateliê Tecendo Sonhos</div>
              <p>1 Vaga</p>
              <p>
                &#10150; Auxiliar a coordenação do programa de fomento ao
                empreendedorismo.
              </p>
            </OpportunityCard>

            <OpportunityCard>
              <div>
                Programa de Formação Educacional Profissional Social (FOPS)
              </div>
              <p>2 Vagas</p>
              <p>&#10150; Estudante de Pedagogia e/ou Pedagogo(a).</p>
            </OpportunityCard>

            <OpportunityCard>
              <div>Programa Sua Vida Vale Mais</div>
              <p>2 Vagas</p>
              <p>
                &#10150; Auxilia no programa de combate e prevenção ao tráfico de
                pessoas e violência doméstica.
              </p>
            </OpportunityCard>

            <OpportunityCard>
              <div>Captação de Recursos</div>
              <p>9 Vagas</p>
              <p>
                &#10150; Área de Editais e gestão das ferramentas de Captação que
                temos, captação na área de projetos Sociais, captação financeira com
                pessoas físicas e jurídicas.
              </p>
            </OpportunityCard>

            <OpportunityCard>
              <div>Comunicação</div>
              <p>2 Vagas</p>
              <p>
                &#10150; Estudantes ou formados em Comunicação Social, Jornalismo ou
                Publicidade e Propaganda.
              </p>
            </OpportunityCard>
          </Carousel>
        </Content>
      </Container>

      <RequirementsDescription>
        <RequirementsTitle>
          <h2>Buscamos voluntários com estas características</h2>
        </RequirementsTitle>
        <div>
          <RequirementGreen>Trabalho em equipe</RequirementGreen>
        </div>
        <div>
          <RequirementBlue>Responsabilidade</RequirementBlue>
        </div>
        <div>
          <RequirementYellow>Proatividade</RequirementYellow>
        </div>
        <div>
          <RequirementYellow>Comunicação</RequirementYellow>
        </div>
        <div>
          <RequirementGreen>Comprometimento</RequirementGreen>
        </div>
        <div>
          <RequirementOrange>Disponibilidade</RequirementOrange>
        </div>
      </RequirementsDescription>
    </>
  );
};

export default Oportunities;
