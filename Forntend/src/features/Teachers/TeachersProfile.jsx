import React from "react";
import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const CardContainer1 = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 3%;
  padding: 0px;
  text-align: center;
  display: flex;

  padding-left: 4%;
  width: 120%;
  margin-left: 38%;
  margin-top: 50%;
`;

const HeadingContainer = styled.h1`
  width: 16rem;
  margin-top: 1%;
  font-size: 2rem;
  color: blue;
  font-weight: 400;
  margin-left: -3%;
`;

const Div = styled.div`
  margin-top: 2%;
  margin-left: 59%;
  display: flex;
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 16px;
  margin-top: -2%;
`;
const Heading7 = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  margin-top: 4%;
  color: var(--color-brand-600);
`;

const AddTeacherLink = styled.a`
  font-size: 1.5rem;
  color: var(--color-brand-500);
  text-decoration: none;
  margin-bottom: 16px;
  margin-top: -2%;
  margin-left: 5%;
  width: 13rem;
  border-radius: 4px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: -80%;
`;

const CardContainer = styled.div`
  background-color: hsl(0, 0%, 100%);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
  padding: 16px;
  max-width: 300px;
  text-align: center;
  margin-top: 90%;
  margin-left: -15%;
  margin-right: -30%;
  flex: 1;
`;

const Carddiv = styled.div`
  width: 100%;
  background-color: rgb(32, 159, 255);
  border-radius: 8px;
`;

const Image = styled.img`
  width: 30%;
  border-radius: 8px 8px 0 0;
  margin-right: 10%;
  padding: 10px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 16px 0 8px;
  color: #fff;
  text-align: center;
`;

const CardParagraph = styled.p`
  font-size: 1.5rem;
  margin: 16px 0 8px;
  color: #fff;
  text-align: center;
`;
const TableContainer = styled.div`
  margin-top: 16px;
`;

const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    border-bottom: 0.4px solid grey;
  }
`;

const TableHeader = styled.th`
  border-bottom: 0.4px solid grey;
  text-align: justify;
`;

const TableData = styled.td`
  text-align: justify;
  border-bottom: 0.4px solid grey;
  padding-left: 25%;
`;
const CardContainer2 = styled.div`
  background-color: hsl(0, 0%, 100%);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
  padding: 16px;

  text-align: justify;
  margin-top: -41%;
  margin-left: 82%;
  width: 79%;
  flex: 1;
`;
const Heading1 = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: var(--color-brand-500);
  margin-top: -3%;
  padding: 2%;
  margin-left: -3%;
  padding-left: 40%;
  margin-right: -3%;

  color: var(--color-brand-500);
`;
const Paragrap = styled.p`
  width: 54rem;
  margin-top: 6%;
`;
const Heading3 = styled.h1`
  color: var(--color-brand-500);
  margin-top: 8%;
`;
const Buttons = styled.button`
  margin: 10px;
  color: var(--color-brand-600);
`;
const ButtonContainer = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  color: var(--color-grey-400);
  box-shadow: var(--shodow-sm);
  cursor: pointer;
  margin: 4px;
  margin-top: 6px;
  gap: 5;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;
const Headin4 = styled.h1`
  color: var(--color-brand-700);
`;
const TableContainer1 = styled.div`
  margin-top: 16px;
`;

const Table1 = styled.table`
  width: 80%;
  border-collapse: collapse;
`;

const TableRow1 = styled.tr`
  &:nth-child(even) {
    border-bottom: 0.4px solid grey;
  }
`;

const TableHeader1 = styled.th`
  border-bottom: 0.4px solid grey;
  text-align: justify;
`;

const TableData1 = styled.td`
  text-align: justify;
  border-bottom: 0.4px solid grey;
  padding-left: 25%;
`;
const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-400);
  color: var(--color-grey-0);
  box-shadow: var(--shodow-sm);
  margin-top: 5%;
  &:hover {
    background-color: var(--color-brand-700);
  }
`;

const Headin6 = styled.h1`
  color: var(--color-brand-700);
  margin-left: -50%;
  font-size: 2.8rem;
  font-weight: 700;
`;
const CardContainer6 = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 3%;
  padding: 0px;
  text-align: center;
  flex-direction: column;
  padding-left: 4%;
  width: 37%;
  margin-left: 39%;
  margin-top: -70%;
  flex: 1;
`;
const Paragrap6 = styled.p`
  margin-top: 5%;
`;
const Headin7 = styled.h1`
  color: var(--color-grey-500);
  width: 47rem;
  margin-left: 65%;
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 55%;
`;

function TeachersProfile() {
  const moveBack = useMoveBack();
  return (
    <>
      <div>
        <CardContainer1>
          <HeadingContainer>Teachers Profile</HeadingContainer>
          <Div>
            <Heading>Teachers</Heading>
            <ArrowForwardIosOutlinedIcon />
            <AddTeacherLink href="teachersprofile">
              Teacher Profile
            </AddTeacherLink>
          </Div>
        </CardContainer1>
      </div>
      <FlexContainer>
        <CardContainer>
          <Carddiv>
            <Image src="/Profile.png" alt="" />
            <CardTitle>Sravan Kumar Reddy</CardTitle>
            <CardParagraph>Senior Lecture</CardParagraph>
          </Carddiv>
          <TableContainer>
            <Table>
              <tbody>
                <TableRow>
                  <TableHeader>Gender</TableHeader>
                  <TableData>Male</TableData>
                </TableRow>
                <TableRow>
                  <TableHeader>Education</TableHeader>
                  <TableData>BED</TableData>
                </TableRow>
                <TableRow>
                  <TableHeader>Designation</TableHeader>
                  <TableData>Senior Lecture</TableData>
                </TableRow>
              </tbody>
            </Table>
          </TableContainer>
        </CardContainer>
      </FlexContainer>

      <CardContainer2>
        <Heading1>About Me</Heading1>
        <div>
          <Paragrap>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence was created for the bliss
            of souls like mine.I am so happy, my dear friend,so absorbed in the
            exquisite sense of meretranquil existence, that I neglect my
            talents.
          </Paragrap>
        </div>
        <div>
          <Heading3>Skills</Heading3>
          <Buttons>
            <ButtonContainer>Communication</ButtonContainer>
            <ButtonContainer>Artist</ButtonContainer>
            <ButtonContainer>Computer</ButtonContainer>
            <ButtonContainer>Accounts</ButtonContainer>
            <ButtonContainer>Games</ButtonContainer>
          </Buttons>
        </div>
        <div>
          <Headin4>Language</Headin4>
          <Buttons>Telugu</Buttons>
          <Buttons>English</Buttons>
          <Buttons>Hindi</Buttons>
        </div>
        <div>
          <Heading7>Personal Information</Heading7>
          <TableContainer1>
            <Table1>
              <tbody1>
                <TableRow1>
                  <TableHeader1>Name</TableHeader1>
                  <TableData1>Mitchell C.Shay</TableData1>
                </TableRow1>
                <TableRow1>
                  <TableHeader1>Email</TableHeader1>
                  <TableData1>info@example.com</TableData1>
                </TableRow1>
                <TableRow1>
                  <TableHeader1>Availability</TableHeader1>
                  <TableData1>Full Time (Free Lancer)</TableData1>
                </TableRow1>
                <TableRow1>
                  <TableHeader1>Age</TableHeader1>
                  <TableData1>A27</TableData1>
                </TableRow1>
                <TableRow1>
                  <TableHeader1>Location</TableHeader1>
                  <TableData1>Rosemont Avenue Melbourne, Florida</TableData1>
                </TableRow1>
                <TableRow1>
                  <TableHeader1>Year Experience</TableHeader1>
                  <TableData1>07 Year Experiences</TableData1>
                </TableRow1>
              </tbody1>
            </Table1>
          </TableContainer1>
        </div>
        <div>
          <Button type="button" onClick={moveBack}>
            Go to Back
          </Button>
        </div>
      </CardContainer2>
      <div>
        <CardContainer6>
          <Headin6>Address</Headin6>
          <Paragrap6>
            Demo Address #8901 Marmora Road Chi Minh City, Vietnam
          </Paragrap6>
        </CardContainer6>
      </div>
      <div>
        <Headin7>Copyright © Designed & Developed by Sravan2024</Headin7>
      </div>
    </>
  );
}

export default TeachersProfile;
