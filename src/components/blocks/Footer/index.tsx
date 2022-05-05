import React from 'react';
import styled from "styled-components";
import Container from "../../other/Container";
import Typography from "../../other/Typography";
import Flex from "../../other/Flex";
import Box from "../../other/Box";
import instagram from '../../../assets/images/icons/instagram.svg'
import telegram from '../../../assets/images/icons/telegram.svg'
import github from '../../../assets/images/icons/github.svg'
import {Link} from "react-router-dom";

const StyledFooter = styled.div`
  margin-top: 20px;
  background: #fff;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px 30px 0 0;

  .links {
    a:not(:last-child) {
      display: block;
      margin: 0 0 10px 0;
    }
  }

  .icon {
    &:not(:last-child) {
      margin-right: 15px;
    }

    img {
      height: 30px;
    }
  }
`

const Footer: React.FC = () => {
  return (
    <Container>
      <StyledFooter>
        <Flex justify={"space-between"} align="flex-start">
          <Link to='/'>
            <Typography component="h2">
              Apple Store
            </Typography>
          </Link>
          <Box className='links'>
            <Link to='/liked'>
              <Typography component="h4" weight={400}>
                Liked
              </Typography>
            </Link>
            <Link to='/cart'>
              <Typography component="h4" weight={400}>
                Cart
              </Typography>
            </Link>
            <Link to='/contacts'>
              <Typography component="h4" weight={400}>
                Contacts
              </Typography>
            </Link>
          </Box>
          <Box className='links'>
            <Link to='/terms'>
              <Typography component="h4" weight={400}>
                Terms of service
              </Typography>
            </Link>
          </Box>
          <Box>
            <a
              className='icon'
              href={'https://www.instagram.com'}
              target='_blank'>
              <img src={instagram} alt="instagram"/>
            </a>
            <a
              className='icon'
              href={'https://t.me/ur_sense'}
              target='_blank'
            >
              <img src={telegram} alt="instagram"/>
            </a>
            <a
              className='icon'
              href={'https://github.com/M1rov'}
              target='_blank'
            >
              <img src={github} alt="github"/>
            </a>
          </Box>
        </Flex>
      </StyledFooter>
    </Container>
  );
};

export default Footer;