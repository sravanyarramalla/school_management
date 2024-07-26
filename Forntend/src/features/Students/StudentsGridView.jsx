import React from "react";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 0%;
  margin-left: 18%;
  margin-right: -26%;
`;

const CardContainer = styled.div`
  background-color: hsl(0, 0%, 100%);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
  padding: 16px;
  max-width: 237px;
  text-align: center;
  margin-left: 8%;
  margin-right: -13%;
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

const NavContainer = styled.nav`
  width: 100%;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  background-color: var(--color-grey-100);
`;

const StyledNavLink = styled(NavLink)`
  margin: 0 8px;
  text-decoration: none;
  color: blue;

  &.active {
    text-decoration: underline;
    color: red;
  }
`;
const CardContainer1 = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 3%;
  padding: 0px;
  text-align: center;
  display: flex;
  padding-left: 4%;
  margin-left: 33%;
  width: 100%;
  margin-top: 40%;
`;
const HeadingContainer = styled.h1`
  margin-top: 2%;
  font-size: 2rem;
  color: blue;
  font-weight: 400;
`;

const Div = styled.div`
  margin-top: 2%;
  margin-left: 59%;
  display: flex;
`;
const Heading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 16px;
  margin-top: 4%;
  color: var(--color-primary);
`;

const AddTeacherLink = styled.a`
  font-size: 1.5rem;
  color: var(--color-brand-500);
  text-decoration: none;
  margin-bottom: 16px;
  margin-top: 4%;
  margin-left: 5%;
  width: 12rem;
  border-radius: 4px;
`;
const FormContainer = styled.form`
  display: flex;
  margin-top: 3%;
  margin-left: 30%;
`;

const ListLink = styled.a`
  font-size: 1.5rem;
  color: var(--color-brand-500);
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 3rem;
  border-radius: 4px;
`;
const GridLink = styled.a`
  font-size: 1.5rem;
  color: var(--color-grey-0);
  background-color: var(--color-brand-500);
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 3rem;
  border-radius: 4px;
`;

function StudentsGridView() {
  return (
    <>
      <div>
        <CardContainer1>
          <HeadingContainer>All Students</HeadingContainer>
          <Div>
            <Heading>Students</Heading>
            <AddTeacherLink href="allstudents">All Students</AddTeacherLink>
          </Div>
        </CardContainer1>
        <FormContainer>
          <ListLink href="allstudents">List View</ListLink>
          <GridLink href="gridview">Grid View</GridLink>
        </FormContainer>
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

          <NavContainer>
            <StyledNavLink to="/studentsprofile">
              <span>About Me</span>
            </StyledNavLink>
          </NavContainer>
        </CardContainer>
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

          <NavContainer>
            <StyledNavLink to="/studentsprofile">
              <span>About Me</span>
            </StyledNavLink>
          </NavContainer>
        </CardContainer>
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

          <NavContainer>
            <StyledNavLink to="/studentsprofile">
              <span>About Me</span>
            </StyledNavLink>
          </NavContainer>
        </CardContainer>
      </FlexContainer>

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

          <NavContainer>
            <StyledNavLink to="/studentsprofile">
              <span>About Me</span>
            </StyledNavLink>
          </NavContainer>
        </CardContainer>
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

          <NavContainer>
            <StyledNavLink to="/studentsprofile">
              <span>About Me</span>
            </StyledNavLink>
          </NavContainer>
        </CardContainer>
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

          <NavContainer>
            <StyledNavLink to="/studentsprofile">
              <span>About Me</span>
            </StyledNavLink>
          </NavContainer>
        </CardContainer>
      </FlexContainer>

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

          <NavContainer>
            <StyledNavLink to="/studentsprofile">
              <span>About Me</span>
            </StyledNavLink>
          </NavContainer>
        </CardContainer>
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

          <NavContainer>
            <StyledNavLink to="/studentsprofile">
              <span>About Me</span>
            </StyledNavLink>
          </NavContainer>
        </CardContainer>
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

          <NavContainer>
            <StyledNavLink to="/studentsprofile">
              <span>About Me</span>
            </StyledNavLink>
          </NavContainer>
        </CardContainer>
      </FlexContainer>
    </>
  );
}

export default StudentsGridView;
