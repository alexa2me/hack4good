import Header from "../components/header/Header";
import BannerInvite from "../components/banner-invite/BannerInvite";
import BannerReason from "../components/banner-reason/BannerReason";
import Testimony from "../components/testimony/Testimony";
import { MainContainer } from "./styled";
import Phases from "../components/phases/Phases";
import Oportunities from "../components/oportunities/Oportunities";

const LandingPage = () => {
  return (
    <MainContainer>
      <Header />
      <BannerInvite />
      <BannerReason />
      <Testimony />
      <Phases />
      <Oportunities />
    </MainContainer>
  );
};

export default LandingPage;
