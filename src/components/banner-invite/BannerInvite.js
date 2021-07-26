import { StyledButton } from "../../components/header/styled";
import { StyledContainer, Link } from "../banner-invite/styled";

const BannerInvite = () => {
  return (
    <StyledContainer>
      <p>Seja um voluntário agora!</p>
      <p>
        Seja um voluntário na Ágatha e impacte a vida de mulheres em situação de
        vulnerabilidade!
      </p>
      <Link href="https://forms.gle/U9nZaCwr1zrL65cEA">
        <StyledButton variant="outline-primary" className="ml-2">
          Seja voluntário!
        </StyledButton>
      </Link>
    </StyledContainer>
  );
};

export default BannerInvite;
