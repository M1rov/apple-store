import React from 'react';
import Flex from "../../other/Flex";
import Typography from "../../other/Typography";
import Container from "../../other/Container";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Badge from "../../other/Badge";
import likeSvg from '../../../assets/images/like.svg'
import cartSvg from '../../../assets/images/cart.svg'
import Box from "../../other/Box";

const StyledNavbar = styled.header`
  padding: 15px 0;
`

const Navbar: React.FC = () => {
  return (
    <StyledNavbar>
      <Container>
        <Flex justify="space-between" align="center">
          <Typography component="h2" weight={700}>
            <Link to='/'>
              Apple Store
            </Link>
          </Typography>
          <Flex align="center">
            <Box sx={{ marginRight: 40 }}>
              <Link to="/liked">
                <Badge content={3}>
                  <img src={likeSvg} alt="liked supplies"/>
                </Badge>
              </Link>
            </Box>
            <Box>
              <Link to="/liked">
                <Badge content={3}>
                  <img src={cartSvg} alt="cart"/>
                </Badge>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;