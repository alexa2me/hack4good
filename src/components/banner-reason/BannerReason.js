import { Content, ContentTitle, ContentReasons } from "./styled";
import loveImg from '../../assets/images/love.png'

const BannerReason = () => {
  return (    
      <Content>
        <div className="container">
          <ContentTitle>
            <h2>
              Somos a voz que denuncia!
            </h2>
            
            <h2>
              Mão gentil para quem precisa!
            </h2>

            <p>Venha ajudar mais mulheres a serem protagonistas da sua história</p>
          </ContentTitle>

          <ContentReasons>
            <div className="reason">
              <div className="reason-title">
                <img src={loveImg} alt="" />
                <h3>Porque ser voluntário?</h3>
              </div>
              <div className="reason-list">
                <ul>
                  <li>Desenvolver habilidades</li>
                  <li>Ganhar experiência</li>
                  <li>Contribuir para um mundo melhor</li>
                </ul>
              </div>

            </div>

            <div className="reason">
              <div className="reason-title">
                <img src={loveImg} alt="" />
                <h3>Áreas  que a ONG <br></br>precisa de voluntário?</h3>
              </div>
              <div className="reason-list">
                <ul>
                  <li>Educadores nos programas</li>
                  <li>Administrativo</li>
                  <li>Comunicação</li>
                </ul>
              </div>
            </div>
            

          </ContentReasons>
        </div>
      </Content>
  );
};

export default BannerReason;
