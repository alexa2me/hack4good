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
  OpportunityTitle,
  Heart,
  HeartContainer,
} from "./styled";
import GreenHeart from "../../assets/images/green-heart.png";
import PurpleHeart from "../../assets/images/purple-heart.png";

const Oportunities = () => {
  return (
    <>
      <Container>
        <Title>Nossas Oportunidades</Title>
        <OpportunityCard>
          <OpportunityTitle>Programa Ateliê Tecendo Sonhos</OpportunityTitle>
          <p>1 Vaga</p>
          <p>
            &#10150; Auxiliar a coordenação do programa de fomento ao
            empreendedorismo.
          </p>
        </OpportunityCard>

        <OpportunityCard>
          <OpportunityTitle>
            Programa de Formação Educacional Profissional Social (FOPS)
          </OpportunityTitle>
          <p>2 Vagas</p>
          <p>&#10150; Estudante de Pedagogia e/ou Pedagogo(a).</p>
        </OpportunityCard>

        <OpportunityCard>
          <OpportunityTitle>Programa Sua Vida Vale Mais</OpportunityTitle>
          <p>2 Vagas</p>
          <p>
            &#10150; Auxilia no programa de combate e prevenção ao tráfico de
            pessoas e violência doméstica.
          </p>
        </OpportunityCard>

        <OpportunityCard>
          <OpportunityTitle>Captação de Recursos</OpportunityTitle>
          <p>9 Vagas</p>
          <p>
            &#10150; Área de Editais e gestão das ferramentas de Captação que
            temos, captação na área de projetos Sociais, captação financeira com
            pessoas físicas e jurídicas.
          </p>
        </OpportunityCard>

        <OpportunityCard>
          <OpportunityTitle>Comunicação</OpportunityTitle>
          <p>2 Vagas</p>
          <p>
            &#10150; Estudantes ou formados em Comunicação Social, Jornalismo ou
            Publicidade e Propaganda.
          </p>
        </OpportunityCard>
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
