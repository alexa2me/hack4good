import { StyledButton } from "../../components/header/styled";
import { StyledContainer } from "../banner-invite/styled";

const BannerInvite = () => {
  return (
    <StyledContainer>
      <p>Seja um voluntário agora!</p>
      <p>
        Seja um voluntário na Ágatha e impacte a vida de mulheres em situação de
        vulnerabilidade!
      </p>
      <a href="https://forms.gle/U9nZaCwr1zrL65cEA">
        <StyledButton variant="outline-primary" className="ml-2 float-right">
          Seja voluntário!
        </StyledButton>
      </a>
    </StyledContainer>
  );
};

export default BannerInvite;
