import Header from "../components/header/Header";
import BannerInvite from "../components/banner-invite/BannerInvite";
import BannerReason from "../components/banner-reason/BannerReason";
import Testimony from "../components/testimony/Testimony";
import { MainContainer } from "./styled";
import Phases from "../components/phases/Phases";

const LandingPage = () => {
  return (
    <MainContainer>
      <Header />
      <BannerInvite />
      <BannerReason />
      <Testimony />
      <Phases />
    </MainContainer>
  );
};

export default LandingPage;
