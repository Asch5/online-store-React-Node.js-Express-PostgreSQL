import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';
import Image from 'react-bootstrap/esm/Image';
import star from '../assets/star.png';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE, REACT_APP_API_URL } from '../utils/constans';
import Button from 'react-bootstrap/esm/Button';

const DeviceItem = ({ device, setDeviceId }) => {
  const navigate = useNavigate();

  return (
    <Col md={3} className="mt-3">
      <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={REACT_APP_API_URL + device.img} />
        <Card.Body>
          <Card.Title>{device.name}</Card.Title>
          <Card.Subtitle>Price - {device.price}$</Card.Subtitle>
          <div className="d-flex justify-content-start align-items-center my-2">
            <div
              onClick={() => setDeviceId(device.id)}
              style={{ cursor: 'pointer' }}
              className="pb-1"
            >
              <Image width={15} height={15} src={star} />
            </div>
            <div className="mx-2">{device.rating}</div>
          </div>
          <Button
            onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
            className="btn-sm"
            variant="secondary"
          >
            go to device
          </Button>
        </Card.Body>
      </Card>
      {/* <Card
        // border={device.id === device.selectedBrand.id ? "primary" : "light"}
        // onClick={() => device.setSelectedBrand(brand)}
        style={{ width: 130, cursor: 'pointer' }}
      >
        <Image width={130} height={130} src={REACT_APP_API_URL + device.img} />
        <div className="d-flex mt-1 text-black-50 align-items-center justify-content-between">
          <div className="d-flex align-items-center ">
            <div>{device.rating}</div>
            <Image width={15} height={15} src={star} />
          </div>
          <div>{device.name}</div>
        </div>
      </Card> */}
    </Col>
  );
};

export default DeviceItem;
