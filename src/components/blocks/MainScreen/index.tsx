import React from 'react';
import Container from "../../other/Container";
import iPhoneImg from '../../../assets/images/iphone.png'
import Box from "../../other/Box";
import Flex from "../../other/Flex";
import Typography from "../../other/Typography";
import styled from "styled-components";
import Section from "../Section";
import Card from "../Card";
import glassCaseImg from '../../../assets/images/glass_case.jpg'
import siliconCaseImg from '../../../assets/images/silicon_case.jpg'
import leatherCaseImg from '../../../assets/images/leather_case.png'
import Grid from "../../other/Grid";


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
          <Grid columns={3} gap={30} marginTop={20}>
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
          </Grid>
        </Section>
      </Container>
    </StyledMainScreen>
  );
};

export default MainScreen;