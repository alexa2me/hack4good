import { Content } from "../banner-invite/styled";
import WomanImg from '../../assets/images/Ellipse.png'
const BannerInvite = () => {
  return (
      <Content>
        <div className="container">
        <h2>Doe seu tempo e salve vidas!</h2>
        <p>
          Seja um voluntário e nos ajude a resgatar e valorizar a mulher sergipana em situação de vulnerabilidade através da  transformação social   e promoção de Justiça, tornando-as escritoras do seu próprio destino.
        </p>
        <button>
          <a href="https://forms.gle/U9nZaCwr1zrL65cEA">Seja voluntário!</a>
        </button>
        </div>

        <img src={WomanImg} alt="" />
      </Content>
  );
};

export default BannerInvite;
