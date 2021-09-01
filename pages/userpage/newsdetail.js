import Navloo from "../../components/navv";

import { Container, Row, Col, Image, Card } from "react-bootstrap";
import CommentBox from "../../components/CommentBox";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Like from "../../components/like";

export default () => {
  return (
    <div>
      <Container>
        <Navloo />
        <br />
        <br />

        <Card.Body>
          <Card.Title className="text-center">
            <h5>SIMPLE 2.0: ЗЭЭЛИЙН АППЛИКЭЙШНЭЭ ЦӨӨЛ</h5>
          </Card.Title>
          <br />

          <Row>
            <Col md={{ span: 7, offset: 3 }}>
              <Image
                className="text-center"
                src="https://source.unsplash.com/user/erondu//600x450"
              />
              <br />
              <Card.Text>
                Бидний амьдралын өдөр бүрийг бүтээлцэж, халуун дулаан мэдрэмж
                төрүүлдэг байгууллага, үйлчилгээний газруудыг дэмжихээр
                Simplе-ээс бизнесийн зээлийн үйлчилгээг гаргажээ. Уг
                үйлчилгээний хүрээнд 500 сая төгрөг хүртэлх гурван төрлийн
                зээлийг нэн уян хатан нөхцөлтэйгөөр авах боломжтой.
                Simple.mn/business хаягаар орж зээлийн хүсэлтээ илгээхэд
                Simplе-ийнхэн ажлын 1-3 өдрийн дотор багтаан өөрсдөө очиж уулзан
                зээлийг нь шийдэж өгөх аж. Бидний амьдралын өдөр бүрийг
                бүтээлцэж, халуун дулаан мэдрэмж төрүүлдэг байгууллага,
                үйлчилгээний газруудыг дэмжихээр Simplе-ээс бизнесийн зээлийн
                үйлчилгээг гаргажээ. Уг үйлчилгээний хүрээнд 500 сая төгрөг
                хүртэлх гурван төрлийн зээлийг нэн уян хатан нөхцөлтэйгөөр авах
                боломжтой.
              </Card.Text>
              <br />
              <Row>
                <a href="/userpage">
                  {" "}
                  <KeyboardBackspaceIcon style={{ color: "black" }} />
                </a>
              </Row>
              <Row>
                <Col>
                  <Like />
                </Col>
                <Col>
                  <CommentBox zohiogch="Urnaa" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Container>
    </div>
  );
};
