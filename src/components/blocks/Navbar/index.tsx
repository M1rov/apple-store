import React from 'react';
import Flex from "../../other/Flex";
import Typography from "../../other/Typography";
import Container from "../../other/Container";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Badge from "../../other/Badge";
import {ReactComponent as LikeSvg} from '../../../assets/images/icons/favourite.svg'
import cartSvg from '../../../assets/images/icons/cart.svg'
import Box from "../../other/Box";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

const StyledNavbar = styled.header`
  padding: 15px 0;
`

const Navbar: React.FC = () => {
  const favouriteLength = useSelector((state: RootState) => state.product.favourite.length)

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
            <Box sx={{marginRight: 40}}>
              <Link to="/liked">
                {favouriteLength ?
                  <Badge content={favouriteLength}>
                    <LikeSvg/>
                  </Badge>
                  :
                  <LikeSvg/>
                }
              </Link>
            </Box>
            <Box>
              <Link to="/cart">
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