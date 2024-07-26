import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

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

const CardContainer = styled.div`
  background-color: ${(props) => props.bgColor || "rgb(32, 159, 255)"};
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

const CardContainer1 = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 3%;
  padding: 0px;
  text-align: center;
  display: flex;
  width: 79%;
  padding-left: 4%;
  margin-left: 25%;
  margin-top: 6%;
`;
const Heading = styled.h1`
  margin-top: 2%;
  font-size: 2rem;
  font-weight: 400;
`;
const TableContainer = styled.div`
  margin: 16px;
  margin-left: -3.4%;
`;

const Table = styled.table`
  margin-left: -32%;
  margin-top: 5%;
  width: 165%;
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
  border: none;
  background: none;
  cursor: pointer;
  width: 50%;
`;

const DeleteButton = styled.button`
  color: orangered;
  border: none;
  background: none;
  width: 50%;
  cursor: pointer;
`;

const studentDetails = "http://localhost:3000/Students";

function StudentsDashboard() {
  const [students, setStudents] = useState([]);
  const [progress, setProgress] = useState(0);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);

  const studentshandle = async () => {
    try {
      const response = await fetch(studentDetails);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const studentsData = await response.json();
      if (!Array.isArray(studentsData)) {
        setStudents([studentsData]);
      } else {
        setStudents(studentsData);
      }
    } catch (error) {
      console.error("Fetching error:", error);
    }
  };

  useEffect(() => {
    studentshandle();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(80);
      setProgress1(50);
      setProgress2(76);
      setProgress3(30);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StudentsInfo>
        <FlexContainer>
          <CardContainer bgColor="rgb(32, 159, 255)">
            <CardImage src="/group.png" alt="Profile" />
            <DivContent>
              <CardTitle>TOTAL STUDENTS 3200</CardTitle>
              <CardProgressContainer>
                <CardProgress style={{ width: `${progress}%` }}>
                  {progress}%
                </CardProgress>
              </CardProgressContainer>
              <CardDescription>80% Increase in 20 Days</CardDescription>
            </DivContent>
          </CardContainer>

          <CardContainer bgColor="rgb(255, 203, 32)">
            <CardImage src="/account.png" alt="" />
            <DivContent>
              <CardTitle>NEW STUDENTS 245</CardTitle>
              <CardProgressContainer>
                <CardProgress style={{ width: `${progress1}%` }}>
                  {50}%
                </CardProgress>
              </CardProgressContainer>
              <CardDescription>50% Increase in 20 Days</CardDescription>
            </DivContent>
          </CardContainer>

          <CardContainer bgColor="rgb(40, 25, 255)">
            <CardImage src="/graduation.png" alt="" />
            <DivContent>
              <CardTitle>TOTAL SUBJECTS 15</CardTitle>
              <CardProgressContainer>
                <CardProgress style={{ width: `${progress2}%` }}>
                  {76}%
                </CardProgress>
              </CardProgressContainer>
              <CardDescription>76% Increase in 20 Days</CardDescription>
            </DivContent>
          </CardContainer>

          <CardContainer bgColor="rgb(255, 32, 80)">
            <CardImage src="/dollar.png" alt="" />
            <DivContent>
              <CardTitle>FEES COLLECTION 25160$</CardTitle>
              <CardProgressContainer>
                <CardProgress style={{ width: `${progress3}%` }}>
                  {30}%
                </CardProgress>
              </CardProgressContainer>
              <CardDescription>30% Increase in 30 Days</CardDescription>
            </DivContent>
          </CardContainer>
        </FlexContainer>

        <div>
          <CardContainer1>
            <div>
              <Heading>New Students List</Heading>
            </div>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeader>S.No</TableHeader>
                    <TableHeader>Roll No</TableHeader>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Class</TableHeader>
                    <TableHeader>Section</TableHeader>
                    <TableHeader>Mobile</TableHeader>
                    <TableHeader>Admition Date</TableHeader>
                    <TableHeader>Action</TableHeader>
                  </TableRow>
                </TableHead>
                <tbody>
                  {students.map((student) => (
                    <TableRow key={student.Id}>
                      <TableData>{student.Id}</TableData>
                      <TableData>{student.Roll_No}</TableData>
                      <TableData>{student.Name}</TableData>
                      <TableData>{student.Class}</TableData>
                      <TableData>{student.Section}</TableData>
                      <TableData>{student.Mobile}</TableData>
                      <TableData>{student.Admition_Date}</TableData>
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
          </CardContainer1>
        </div>
      </StudentsInfo>
    </>
  );
}

export default StudentsDashboard;
