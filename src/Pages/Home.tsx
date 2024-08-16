import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col xs={4} sm={6}>
          <Image
            src="img\LogoMain.png"
            alt="This is the maain Logo Page"
            fluid
          />
        </Col>
        <Col sm={6}>
          <h1 className="font-weight-light">Lorem, ipsum.</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            nostrum tempore architecto quasi ex neque, recusandae iste ducimus
            esse error minima dignissimos tenetur illum tempora dolore nulla
            asperiores minus? Quia eius dignissimos iusto expedita, mollitia
            quibusdam itaque? Libero neque harum sunt iste porro est rerum
            earum, veniam possimus totam voluptatibus.
          </p>
          <Button>Get Started &gt;&gt;</Button>
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
