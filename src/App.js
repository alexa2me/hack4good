import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import BannerInvite from "./components/banner-invite/BannerInvite";
import BannerReason from "./components/banner-reason/BannerReason";
import Testimony from "./components/testimony/Testimony";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <>
      <Header />
      <BannerInvite />
      <BannerReason />
      <Testimony />
      <GlobalStyle />
    </>
  );
};

export default App;
