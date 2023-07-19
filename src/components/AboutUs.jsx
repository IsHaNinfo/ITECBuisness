import React from "react";
import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <div>
      <MainCard>
        <Grid>
          <Title>About Us</Title>
        </Grid>
        <MainMisson>
          <StyleCard>
            <Misson>Our Mission</Misson>
            <MissonText>
              "Our mission is to empower businesses through innovative
              technology solutions, delivering exceptional value and
              transforming the way they operate. We strive to provide
              cutting-edge IT services and support, helping our clients achieve
              their goals, enhance productivity, and stay ahead in today's
              rapidly evolving digital landscape."
            </MissonText>
          </StyleCard>
          <StyleImage>
            <img
              src="/images/Misson.jpg"
              alt="mission"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: " center",
              }}
            />
            <AnimatedBorder />
          </StyleImage>
        </MainMisson>
      </MainCard>
    </div>
  );
};

const Title = styled(Typography)`
  font-size: 60px;
  margin-left: 30px;
`;

const Misson = styled(Typography)`
  font-size: 30px;
  position: relative;
  left: 200px;
  top: 20px;
`;

const MissonText = styled(Typography)`
  font-size: 20px;
  position: relative;
  top: 50px;
  text-align: justify;
  left: 100px;
`;

const StyleCard = styled(Grid)`
  width: 400px;
  height: 400px;
  margin-top: 35px;
  margin-left: 30px;
  align-items: center;
`;

const StyleImage = styled(Grid)`
  width: 400px;
  height: 400px;
  margin-left: 250px;
  margin-top: 50px;
  align-items: center;
  border-radius: 13px 20px 35px;
  border: 20px solid #f71971 !important;
`;
const AnimatedBorder = styled(Grid)`
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  height: 20px;
  background-color: #f71971;
  animation: animateBorder 2s infinite linear;
  border-radius: 13px 20px 35px;
`;
const MainMisson = styled(Grid)`
  margin-top: 35px;
  margin-left: 30px;
  align-items: center;
  display: flex;
`;

const MainCard = styled(Grid)`
  margin-top: 95px;
  margin-left: 30px;
  margin-bottom: 125px;
`;

export default AboutUs;
