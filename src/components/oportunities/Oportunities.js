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
  OpportunityTitle,
} from "./styled";

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