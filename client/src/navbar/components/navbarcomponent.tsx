/** @format */

import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { NavBody, NavFooter } from "@/navbar/common/assets/navbarcomponent";
import LogoEmelent from "../elements/logo.element";
import SearchElement from "../elements/search.element";
import CartElement from "../elements/cart.element";
import UserMenuElement from "../elements/usermenu.element";

const NavbarComponent = () => {
  return (
    <AppBar position='static'>
      <Container>
        <Toolbar sx={{ display: "flex", gap: "2rem" }}>
          <Box display={"flex"} alignItems={"center"}>
            <LogoEmelent />
          </Box>
          <NavBody>
            <SearchElement />
            <CartElement />
          </NavBody>
          <NavFooter>
            <UserMenuElement />
          </NavFooter>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavbarComponent;
