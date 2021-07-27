import {
  Container,
  Title,
  Requirements,
  RequirementsTitleContainer,
  RequirementsTitle,
  RequirementsDescription,
  RequirementGreen,
  RequirementPurple,
  OpportunityCard,
  Content
  // OpportunityTitle,
  OpportunityTitle,
  Heart,
  HeartContainer,
} from "./styled";
import GreenHeart from "../../assets/images/green-heart.png";
import PurpleHeart from "../../assets/images/purple-heart.png";

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
        <RequirementsTitleContainer>
          <RequirementsTitle>
            Buscamos voluntários com estas características
          </RequirementsTitle>
        </RequirementsTitleContainer>
        <Requirements>
          <div>
            <HeartContainer>
              <Heart src={PurpleHeart} />
            </HeartContainer>
            <RequirementPurple>Trabalho em equipe</RequirementPurple>
          </div>
          <div>
            <HeartContainer>
              <Heart src={GreenHeart} />
            </HeartContainer>

            <RequirementGreen>Responsabilidade</RequirementGreen>
          </div>
          <div>
            <HeartContainer>
              <Heart src={PurpleHeart} />
            </HeartContainer>

            <RequirementPurple>Proatividade</RequirementPurple>
          </div>
          <div>
            <HeartContainer>
              <Heart src={GreenHeart} />
            </HeartContainer>

            <RequirementGreen>Comunicação</RequirementGreen>
          </div>
          <div>
            <HeartContainer>
              <Heart src={PurpleHeart} />
            </HeartContainer>

            <RequirementPurple>Comprometimento</RequirementPurple>
          </div>
          <div>
            <HeartContainer>
              <Heart src={GreenHeart} />
            </HeartContainer>

            <RequirementGreen>Disponibilidade</RequirementGreen>
          </div>
        </Requirements>
      </RequirementsDescription>
    </>
  );
};

export default Oportunities;
