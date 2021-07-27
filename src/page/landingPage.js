import Header from "../components/header/Header";
import BannerInvite from "../components/banner-invite/BannerInvite";
import BannerReason from "../components/banner-reason/BannerReason";
import Testimony from "../components/testimony/Testimony";
import { MainContainer } from "./styled";
import Phases from "../components/phases/Phases";
import Opportunities from "../components/opportunities/Opportunities";
import BannerVolunteer from "../components/banner-volunteer/BannerVolunteer";
import Footer from "../components/footer/Footer";

const LandingPage = () => {
  return (
    <MainContainer>
      <Header />
      <BannerInvite />
      <BannerReason />
      <Testimony />
      <Phases />
      <Opportunities />
      <BannerVolunteer />
      <Footer />
    </MainContainer>
  );
};

export default LandingPage;
