import { Carousel } from "react-bootstrap";
import manVolunteer from "../../assets/images/man-volunteer.jpg";
import womanVolunteer1 from "../../assets/images/woman-volunteer1.jpg";
import womanVolunteer2 from "../../assets/images/woman-volunteer2.jpg";

const Testimony = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-50" src={manVolunteer} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={womanVolunteer1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50" src={womanVolunteer2} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Testimony;
