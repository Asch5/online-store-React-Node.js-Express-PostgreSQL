import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';
import Form from 'react-bootstrap/Form';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/constans';
import Col from 'react-bootstrap/esm/Col';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
  const { user } = useContext(Context);

  const navigate = useNavigate();
  const location = useLocation();

  const isLogin = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.massage);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Input your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="on"
          />
          <Form.Control
            className="mt-3"
            placeholder="Input your password"
            type="password"
            value={password}
            autoComplete="on"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Col className="d-flex justify-content-between align-items-center mt-4 ">
            {isLogin ? (
              <div>
                Don't have an account?
                <NavLink className="p-2" to={REGISTRATION_ROUTE}>
                  Registration
                </NavLink>
              </div>
            ) : (
              <div>
                Do have the account?
                <NavLink className="p-2" to={LOGIN_ROUTE}>
                  Enter
                </NavLink>
              </div>
            )}

            <Button onClick={click} variant="outline-success">
              {isLogin ? 'Enter' : 'Registration'}
            </Button>
          </Col>
        </Form>
      </Card>
    </Container>
  );
});
export default Auth;
