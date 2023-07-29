import React from "react";
import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";

const Visson = () => {
  return (
    <div>
      <MainCard>
        <MainMisson>
          <StyleImage>
            <img
              src="/images/Vison.jpeg"
              alt="mission"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: " center",
                borderRadius: "20px 20px",
              }}
            />
            <AnimatedBorder />
          </StyleImage>
          <StyleCard>
            <Misson>Our Vision</Misson>
            <MissonText>
              ""Transforming Tech, Empowering Growth: Our vision is to redefine
              how technology shapes businesses and individuals. Through
              innovative IT solutions, we empower organizations to maximize
              their potential, embrace a digital-first mindset, and achieve
              streamlined success. Committed to excellence and
              customer-centricity, we aspire to be the global partner driving
              growth towards a brighter digital future."
            </MissonText>
          </StyleCard>
        </MainMisson>
      </MainCard>
    </div>
  );
};

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
  margin-left: 30px;
  align-items: center;
`;

const StyleImage = styled(Grid)`
  width: 400px;
  height: 400px;
  margin-left: 200px;
  margin-top: 50px;
  align-items: center;
  border-radius: 40px 40px;
  border: 20px solid #01a4ff !important;
`;
const AnimatedBorder = styled(Grid)`
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  height: 20px;
  background-color: #01a4ff !important;
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

export default Visson;
