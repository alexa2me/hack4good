import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./page/landingPage";
import { GlobalStyle } from "./styles/global";


const App = () => {
  return (
    <div>
      <LandingPage />
      <GlobalStyle />
    </div>
    )
};

export default App;
