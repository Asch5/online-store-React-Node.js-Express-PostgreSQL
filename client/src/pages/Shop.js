import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Context } from '..';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import Pages from '../components/Pages';
import TypeBar from '../components/TypeBar';
import {
  fetchAllRatings,
  fetchBrands,
  fetchDevices,
  fetchTypes,
} from '../http/deviceAPI';

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes()
      .then((data) => device.setTypes(data))
      .catch((error) => {
        console.error(error);
      });
    fetchBrands()
      .then((data) => device.setBrand(data))
      .catch((error) => {
        console.error(error);
      });
    fetchDevices(null, null, device.page, device.limit)
      .then((data) => {
        device.setDevice(data.rows);
        device.setTotalCount(data.count);
      })
      .catch((error) => {
        console.error(error);
      });
    fetchAllRatings().then((data) => {
      device.setRatings(data);
    });
  }, []);

  useEffect(() => {
    fetchDevices(
      device.selectedType.id,
      device.selectedBrand.id,
      device.page,
      device.limit
    )
      .then((data) => {
        device.setDevice(data.rows);
        device.setTotalCount(data.count);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [device.page, device.selectedType, device.selectedBrand, device.ratings]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});
export default Shop;
