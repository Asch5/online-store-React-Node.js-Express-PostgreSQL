import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
import { Context } from '..';
import DeviceItem from './DeviceItem';
import { createRating, fetchAllRatings, updateRating } from '../http/deviceAPI';

const DeviceList = observer(() => {
  const { device, user } = useContext(Context);

  const [deviceId, setDeviceId] = useState(null);

  console.log(deviceId);
  console.log(user.user.id);

  useEffect(() => {
    const rateIs = device.ratings.find(
      (e) => e.userId === user.user.id && e.deviceId === deviceId
    );

    if (!rateIs && user.user.id && deviceId) {
      createRating(user.user.id, deviceId);
      updateRating(deviceId);
    }

    fetchAllRatings().then((data) => {
      device.setRatings(data);
    });

    console.log(rateIs);
  }, [deviceId]);

  return (
    <div>
      <Row className="d-flex ">
        {device.device.map((device) => (
          <DeviceItem
            key={device.id}
            device={device}
            setDeviceId={setDeviceId}
          />
        ))}
      </Row>
    </div>
  );
});

export default DeviceList;
