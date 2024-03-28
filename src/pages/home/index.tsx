import { Row, Col } from "antd";

export const Home = () => {
  return (
    <div>
      <Row gutter={[32, 32]} style={{ marginTop: "32px" }}>
        <Col xs={24} sm={24} xl={8} style={{ height: "460px" }}>
          Calendar
        </Col>
        <Col xs={24} sm={24} xl={8} style={{ height: "460px" }}>
          Dashboard
        </Col>
      </Row>
    </div>
  );
};
