import React, { useContext, useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Context } from "../..";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { createDevice } from "../../http/deviceAPI";
import { fetchBrands, fetchDevices, fetchTypes } from "../../http/deviceAPI";

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrand(data));
    fetchDevices().then((data) => device.setDevice(data.rows));
  }, []);

  const [info, setInfo] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brandId, setBrandId] = useState("");
  const [typeId, setTypeId] = useState("");
  const [file, setFile] = useState(null);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((item) =>
        item.number === number ? { ...item, [key]: value } : item
      )
    );
  };

  const addDivice = () => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("brandId", brandId);
    formData.append("typeId", typeId);
    formData.append("img", file);
    formData.append("info", JSON.stringify(info));

    createDevice(formData).then(() => onHide());
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mb-2 mt-2">
            <Dropdown.Toggle variant="outline-dark">
              {typeId
                ? device.types.filter((el) => el.id === typeId)[0].name
                : "Choose the type"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id} onClick={() => setTypeId(type.id)}>
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark">
              {brandId
                ? device.brand.filter((el) => el.id === brandId)[0].name
                : "Choose the brand"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brand.map((brand) => (
                <Dropdown.Item
                  key={brand.id}
                  onClick={() => setBrandId(brand.id)}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-2 mt-2"
            placeholder="Fill in the device name"
          />
          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mb-2 mt-2"
            placeholder="Fill in the device price"
            type="number"
          />
          <Form.Control
            type="file"
            // onChange={(e) => setFile(e.target.files[0])}
            onChange={(e) => selectFile(e)}
          />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Add a new characteristic
          </Button>
          {info.map((i) => (
            <Row key={i.number} className="mb-4 mt-4">
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) =>
                    changeInfo("title", e.target.value, i.number)
                  }
                  placeholder="Fill in a characteristic name"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) =>
                    changeInfo("description", e.target.value, i.number)
                  }
                  placeholder="Fill in a characteristic description"
                />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant="outline-danger"
                >
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addDivice}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
