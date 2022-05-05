import React from 'react';
import Container from "../../other/Container";
import iPhoneImg from '../../../assets/images/other/iphone.png'
import Box from "../../other/Box";
import Flex from "../../other/Flex";
import Typography from "../../other/Typography";
import styled from "styled-components";
import Section from "../Section";
import Card from "../Card";
import glassCaseImg from '../../../assets/images/cases/glass_case.jpg'
import siliconCaseImg from '../../../assets/images/cases/silicon_case.jpg'
import leatherCaseImg from '../../../assets/images/cases/leather_case.png'
import Grid from "../../other/Grid";
import {Link} from "react-router-dom";
import iPhone from '../../../assets/images/devices/iphone.jpg'
import mac from '../../../assets/images/devices/mac.jpg'
import iPad from '../../../assets/images/devices/ipad.jpg'
import watch from '../../../assets/images/devices/watch.jpg'
import airpods from '../../../assets/images/devices/airpods.jpg'
import airtag from '../../../assets/images/devices/airtag.jpg'


const StyledMainScreen = styled.div`
  padding: 20px 0;
`

const MainScreen: React.FC = () => {
  return (
    <StyledMainScreen>
      <Container>
        <Box
          sx={{
            background: 'black',
            borderRadius: 30,
            padding: '10px 30px 0',
            userSelect: 'none',
            marginBottom: 45,
          }}
        >
          <Flex align="center" justify="space-around">
            <Box sx={{width: 250}}>
              <Typography component="h1" color="white">
                Apple Accessories
              </Typography>
            </Box>
            <img src={iPhoneImg} alt="banner" height={200}/>
          </Flex>
        </Box>

        <Section title="Cases">
          <Grid columns={3} gap={50} marginTop={20}>
            <Link to='/'>
              <Card>
                <Flex align="center" direction="column">
                  <Box sx={{marginBottom: 20}}>
                    <img src={glassCaseImg} alt="glass case"/>
                  </Box>
                  <Typography component="h4">
                    Glass
                  </Typography>
                </Flex>
              </Card>
            </Link>
            <Link to='/'>
              <Card>
                <Flex align="center" direction="column">
                  <Box sx={{marginBottom: 20}}>
                    <img src={siliconCaseImg} alt="silicon case"/>
                  </Box>
                  <Typography component="h4">
                    Silicon
                  </Typography>
                </Flex>
              </Card>
            </Link>
            <Link to='/'>
              <Card>
                <Flex align="center" direction="column">
                  <Box sx={{marginBottom: 20}}>
                    <img src={leatherCaseImg} alt="leather case"/>
                  </Box>
                  <Typography component="h4">
                    Leather
                  </Typography>
                </Flex>
              </Card>
            </Link>
          </Grid>
        </Section>

        <Section title='Devices' marginTop={30}>
          <Grid columns={3} gap={50} marginTop={30}>
            <Link to={'/buy/iphone'}>
              <Card>
                <Flex align="center" direction="column">
                  <Box sx={{marginBottom: 20}}>
                    <img src={iPhone} alt="iPhone"/>
                  </Box>
                  <Typography component="h4">
                    IPhone
                  </Typography>
                </Flex>
              </Card>
            </Link>
            <Link to={'/buy/mac'}>
              <Card>
                <Flex align="center" justify={"flex-end"} direction="column">
                  <Box sx={{marginBottom: 20}}>
                    <img src={mac} alt="Mac"/>
                  </Box>
                  <Typography component="h4">
                    Mac
                  </Typography>
                </Flex>
              </Card>
            </Link>
            <Link to={'/buy/ipad'}>
              <Card>
                <Flex align="center" direction="column">
                  <Box sx={{marginBottom: 20}}>
                    <img src={iPad} alt="iPad"/>
                  </Box>
                  <Typography component="h4">
                    iPad
                  </Typography>
                </Flex>
              </Card>
            </Link>
          </Grid>
        </Section>

        <Section title='Accessories' marginTop={30}>
          <Grid columns={3} gap={50} marginTop={30}>
            <Link to={'/buy/watch'}>
              <Card>
                <Flex align="center" direction="column">
                  <Box sx={{marginBottom: 20}}>
                    <img src={watch} alt="watch"/>
                  </Box>
                  <Typography component="h4">
                    Apple Watch
                  </Typography>
                </Flex>
              </Card>
            </Link>
            <Link to={'/buy/airpods'}>
              <Card>
                <Flex align="center" direction="column">
                  <Box sx={{marginBottom: 20}}>
                    <img src={airpods} alt="airpods"/>
                  </Box>
                  <Typography component="h4">
                    AirPods
                  </Typography>
                </Flex>
              </Card>
            </Link>
            <Link to={'/buy/airtag'}>
              <Card>
                <Flex align="center" direction="column">
                  <Box sx={{marginBottom: 20}}>
                    <img src={airtag} alt="airtag"/>
                  </Box>
                  <Typography component="h4">
                    AirTag
                  </Typography>
                </Flex>
              </Card>
            </Link>
          </Grid>
        </Section>
      </Container>
    </StyledMainScreen>
  );
};

export default MainScreen;