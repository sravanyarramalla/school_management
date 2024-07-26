import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Paper } from "@mui/material";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 16px;
  margin-left: 24%;
  margin-top: 30%;
  width: 82%;
`;
const StudentsInfo = styled.div`
  margin-top: 10%;
`;
const CardContainer1 = styled.div`
  background-color: rgb(28, 58, 250);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
  padding: 16px;
  max-width: 200px;
  text-align: center;
  flex-wrap: nowrap;
`;
const CardContainer2 = styled.div`
  background-color: rgb(255, 203, 32);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
  padding: 16px;
  max-width: 200px;
  text-align: center;
  flex-wrap: nowrap;
`;

const CardContainer3 = styled.div`
  background-color: rgb(40, 25, 255);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
  padding: 16px;
  max-width: 200px;
  text-align: center;
  flex-wrap: nowrap;
`;
const CardContainer4 = styled.div`
  background-color: rgb(255, 32, 80);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
  padding: 16px;
  max-width: 200px;
  text-align: center;
  flex-wrap: nowrap;
`;

const CardImage = styled.img`
  width: 40%;
  border-radius: 8px 8px 0 0;
  margin-right: 10%;
  padding: 10px;
`;

const DivContent = styled.div`
  margin-right: 20%;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 16px 0 8px;
  color: #fff;
  text-align: center;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #fff;
  width: 12rem;
`;

const CardProgressContainer = styled.div`
  background-color: var(--color-grey-500);
  border-radius: 8px;
  overflow: hidden;
  height: 24px;
  width: 100%;
  margin-top: 8px;
`;

const CardProgress = styled.div`
  background-color: var(--color-grey-0);
  height: 100%;
  transition: width 1s ease-in-out;
`;
const CardContainer6 = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  display: flex;
  border-radius: 8px;
  margin: 3% 3% 3% 24%;
  padding: 0px 0px 0px 4%;
  margin-bottom: -2.9%;
  margin-left: 25%;
  width: 79%;
`;
const HeadingContainer = styled.h1`
  margin-top: 2%;
  font-size: 2rem;
  font-weight: 400;
`;
const CardContainer5 = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 3%;
  padding: 0px;
  text-align: center;
  display: flex;
  margin-left: 25%;
  width: 79%;
`;
const TableContainer = styled.div`
  margin: 16px;
  margin-left: -3%;
`;
const Table = styled.table`
  margin-left: 7%;
  width: 113%;
`;
const TableHead = styled.thead`
  background-color: var(--color-grey-100);
  color: black;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 12px;
  border: 1px solid #ddd;
  font-size: 0.9rem;
`;

const TableData = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 1rem;
`;
const EditButton = styled.button`
  color: var(--color-brand-500);
`;
const DeleteButton = styled.button`
  color: orangered;
`;

const teacherDetails = "http://localhost:3000/teachers";

function TeachersDashboard() {
  const [teachers, setTeachers] = useState([]);
  const [progress, setProgress] = useState(0);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);

  const teachershandle = async () => {
    try {
      const response = await fetch(teacherDetails);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const teachersData = await response.json();
      if (!Array.isArray(teachersData)) {
        setTeachers([teachersData]);
      } else {
        setTeachers(teachersData);
      }
    } catch (error) {
      console.error("Fetching error:", error);
    }
  };

  useEffect(() => {
    teachershandle();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(90);
      setProgress1(25);
      setProgress2(70);
      setProgress3(60);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StudentsInfo>
        <FlexContainer>
          <CardContainer1>
            <CardImage src="/group.png" alt="" />
            <DivContent>
              <CardTitle>TOTAL TEACHERS 20</CardTitle>
              <CardProgressContainer>
                <CardProgress style={{ width: progress }}>{90}%</CardProgress>
              </CardProgressContainer>
              <CardDescription>Best Teachers</CardDescription>
            </DivContent>
          </CardContainer1>

          <CardContainer2>
            <CardImage src="/account.png" alt="" />
            <DivContent>
              <CardTitle>NEW TEACHERS 5</CardTitle>
              <CardProgressContainer>
                <CardProgress style={{ width: progress1 }}>{25}%</CardProgress>
              </CardProgressContainer>
              <CardDescription>25% Increase Teachers</CardDescription>
            </DivContent>
          </CardContainer2>

          <CardContainer3>
            <CardImage src="/graduation.png" alt="" />
            <DivContent>
              <CardTitle>TOTAL SUBJECTS 15</CardTitle>
              <CardProgressContainer>
                <CardProgress style={{ width: progress2 }}>{70}%</CardProgress>
              </CardProgressContainer>
              <CardDescription>76% Increase in 20 Days</CardDescription>
            </DivContent>
          </CardContainer3>

          <CardContainer4>
            <CardImage src="/dollar.png" alt="" />
            <DivContent>
              <CardTitle>TOTAL Salary 1,0000$</CardTitle>
              <CardProgressContainer>
                <CardProgress style={{ width: progress3 }}>{60}%</CardProgress>
              </CardProgressContainer>
              <CardDescription>60% Increase in 30 Days</CardDescription>
            </DivContent>
          </CardContainer4>
        </FlexContainer>
        <CardContainer6>
          <HeadingContainer>Teachers List</HeadingContainer>
        </CardContainer6>

        <div>
          <CardContainer5>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableHeader>Id</TableHeader>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Department</TableHeader>
                    <TableHeader>Gender</TableHeader>
                    <TableHeader>Education</TableHeader>
                    <TableHeader>Mobile</TableHeader>
                    <TableHeader>Email</TableHeader>
                    <TableHeader>Joining Date</TableHeader>
                    <TableHeader>Action</TableHeader>
                  </TableRow>
                </TableHead>
                <tbody>
                  {teachers.map((teacher) => (
                    <TableRow key={teacher.Id}>
                      <TableData>{teacher.Id}</TableData>
                      <TableData>{teacher.Name}</TableData>
                      <TableData>{teacher.Department}</TableData>
                      <TableData>{teacher.Gender}</TableData>
                      <TableData>{teacher.Education}</TableData>
                      <TableData>{teacher.Mobile}</TableData>
                      <TableData>{teacher.Email}</TableData>
                      <TableData>{teacher.Joining_Date}</TableData>
                      <TableData>
                        <EditButton>
                          <FontAwesomeIcon icon={faEdit} />
                        </EditButton>
                        <DeleteButton>
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </DeleteButton>
                      </TableData>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </CardContainer5>
        </div>
      </StudentsInfo>
    </>
  );
}

export default TeachersDashboard;
