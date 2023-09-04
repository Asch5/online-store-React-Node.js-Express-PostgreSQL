import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import Card from 'react-bootstrap/esm/Card';
import { Context } from '..';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { fetchBrands } from '../http/deviceAPI';

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className="d-flex">
      {device.brand.map((brand) => (
        <Col md={2} key={brand.id}>
          <Card
            style={{ cursor: 'pointer', textAlign: 'center', marginBottom: 10 }}
            border={
              brand.id === device.selectedBrand.id ? 'primary' : 'lightgray'
            }
            onClick={() => device.setSelectedBrand(brand)}
          >
            {brand.name}
          </Card>
        </Col>
      ))}
    </Row>
  );
});

export default BrandBar;
