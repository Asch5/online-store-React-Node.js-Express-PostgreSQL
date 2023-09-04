import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/esm/Card";
import star2 from "../assets/star2.png";
import Button from "react-bootstrap/esm/Button";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI";
import { REACT_APP_API_URL } from "../utils/constans";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4} style={{ textAlign: "center" }}>
          <Image
            src={REACT_APP_API_URL + device.img}
            width={250}
            height={250}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center ">
            <h2 style={{ textAlign: "center" }}>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${star2}) no-repeat center center`,
                width: 200,
                height: 200,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4} className="d-flex justify-content-center">
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 200,
              height: 200,
              border: "5px solid lightgray",
            }}
          >
            <h3 style={{ fontSize: 20 }}>from {device.price} Euro</h3>
            <Button variant={"outline-dark"}>Add to basket</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Specifications</h1>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
