import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import React from "react";
import { useContext } from "react";
import { Context } from "..";
import { NavLink, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, SHOP_ROUTE, ADMIN_ROUTE } from "../utils/constans";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const navigate = useNavigate();
  const { user } = useContext(Context);

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.setItem("token", "");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="navbar-brand" to={SHOP_ROUTE}>
          Buy Divice!
        </NavLink>
        {user.isAuth ? (
          <Nav className="al-auto">
            <Button
              className="me-2"
              variant="outline-light"
              href="#features"
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Admin panel
            </Button>
            <Button
              className="me-2"
              variant="outline-light"
              href="#pricing"
              onClick={() => logOut()}
            >
              Exit
            </Button>
          </Nav>
        ) : (
          <Nav className="al-auto">
            <Button
              onClick={() => navigate(LOGIN_ROUTE)}
              variant="outline-light"
            >
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
