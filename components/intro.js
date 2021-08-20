import { Card } from "react-bootstrap";
import Button from "./button";

export default () => {
  return (
    <div>
      <Card className="text-light">
        <Card.Img src="scale_02.png/" width="100vw" />
        <Card.ImgOverlay className="text-center">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Card.Title>
            <h2>Share Your Skills</h2>
          </Card.Title>
          <Card.Subtitle>
            Өөрийн туршлага, ур чадвараа бусадтай хуваалцаж мөн бусдаас суралцах
            орон зай.
          </Card.Subtitle>
          <Card.Text>
            <br />
            {/* <Button value="Sign up" className="light" />{" "} */}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};
