import {
  MainContainer,
  StyledButton,
  Icon,
  Text,
  BoldText,
  Link,
} from "./styled";
import heartIcon from "../../assets/images/heart-icon.png";

const BannerVolunteer = () => {
  return (
    <MainContainer>
      <Icon src={heartIcon} alt="icone de mão com coração" />
      <Text>
        Seja um voluntário na Ágatha! Venha nos ajudar a construir{" "}
        <BoldText>um mundo melhor</BoldText>
      </Text>
      <Link href="https://forms.gle/U9nZaCwr1zrL65cEA" target="_blank">
        <StyledButton variant="outline-primary" className="ml-2">
          Quero ser voluntário!
        </StyledButton>
      </Link>
    </MainContainer>
  );
};

export default BannerVolunteer;
