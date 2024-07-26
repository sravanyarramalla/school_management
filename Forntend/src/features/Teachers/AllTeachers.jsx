import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CardContainer1 = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 3%;
  padding: 0px;
  text-align: center;
  display: flex;
  width: 96%;
  margin-left: 30%;
  margin-top: 40%;
`;

const HeadingContainer = styled.h1`
  margin-top: 2%;
  font-size: 2rem;
  color: var(--color-brand-500);
  font-weight: 400;
  margin-left: 2%;
`;
const HeadingContainer1 = styled.h1`
  margin-top: 2%;
  font-size: 2rem;
  font-weight: 400;
  margin-left: -2%;
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
  margin-top: 0;
  margin-left: 9%;
`;

const ListLink = styled.a`
  font-size: 1.5rem;
  color: var(--color-grey-0);
  background-color: var(--color-brand-500);
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-left: 24%;

  &:hover {
    background-color: var(--color-brand-500);
    color: var(--color-white);
  }
`;

const GridLink = styled.a`
  font-size: 1.5rem;
  color: var(--color-brand-500);
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 3rem;
  border-radius: 4px;
`;

const CardContainer2 = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 3%;
  padding: 0px;
  text-align: center;
  display: flex;
  width: 96%;
  padding-left: 4%;
  margin-left: 30%;
`;

const AddTeacherLink1 = styled.a`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-500);
  color: var(--color-brand-50);
  box-shadow: var(--shodow-sm);
  cursor: pointer;
  margin-top: -6px;
  margin-bottom: 9%;
  margin-right: -90%;
  margin-left: 90%;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

const CardContainer3 = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 3%;
  padding: 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 96%;
  padding-left: 4%;
  margin-left: 30%;
  margin-top: -2.9%;
`;

const Select = styled.select`
  font-size: 1.4rem;
  border: none;
  border-radius: 5px;
  background-color: var(--color-grey-200);
  color: var(--color-grey-900);
  box-shadow: var(--shodow-sm);
  cursor: pointer;
  margin-top: -36px;
  margin-bottom: -42px;
  margin-left: 5%;
  margin-right: 74rem;
`;

const HeadingShow = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 16px;
  margin-top: 2.2%;
  margin-left: -10%;
  margin-right: 74rem;
`;

const Label = styled.h1`
  font-size: 1.2rem;
  margin-bottom: -20px;
  margin-top: 2.3%;
  padding-left: 32%;
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  background-color: var(--color-grey-200);
  color: var(--color-grey-900);
  box-shadow: var(--shodow-sm);
  margin-left: 59rem;
  margin-top: -8.4px;
  padding: 1%;
`;

const TableContainer = styled.div`
  margin: 16px;
  margin-left: -3.4%;
`;
const Table = styled.table`
  margin-left: 3%;
  width: 97%;
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

function AllTeachers() {
  const [teachers, setteachers] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  async function fetchTeachers() {
    const response = await fetch("http://localhost:3000/teachers");
    const data = await response.json();
    setteachers(data);
  }

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleEditUser = (id) => {
    navigate(`/editteachers/${id}`);
  };
  const handleDeleteUser = async (id) => {
    const response = await fetch(`http://localhost:3000/teachers/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log("Delete response:", data);
    fetchTeachers();
  };
  return (
    <>
      <div>
        <CardContainer1>
          <HeadingContainer>All Teachers</HeadingContainer>
          <Div>
            <Heading>Teachers</Heading>
            <AddTeacherLink href="allteachers">All Teacher</AddTeacherLink>
          </Div>
        </CardContainer1>
        <FormContainer>
          <ListLink href="allteachers">List View</ListLink>
          <GridLink href="gridview">Grid View</GridLink>
        </FormContainer>
      </div>
      <div>
        <CardContainer2>
          <HeadingContainer1>Teachers List</HeadingContainer1>
          <Div>
            <AddTeacherLink1 href="addteachers">+ Add New</AddTeacherLink1>
          </Div>
        </CardContainer2>
      </div>
      <div>
        <CardContainer3>
          <HeadingShow>Show</HeadingShow>
          <Select>
            <option>5</option>
            <option>10</option>
            <option>15</option>
          </Select>
          <form>
            <Label>Search:</Label>
            <Input type="search" value="data" />
          </form>
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableHeader>S.No</TableHeader>
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
                  {teachers.length > 0 &&
                    teachers.map((teachers) => (
                      <TableRow key={teachers.Id}>
                        <TableData>{teachers.Id}</TableData>
                        <TableData>{teachers.Name}</TableData>
                        <TableData>{teachers.Department}</TableData>
                        <TableData>{teachers.Gender}</TableData>
                        <TableData>{teachers.Education}</TableData>
                        <TableData>{teachers.Mobile}</TableData>
                        <TableData>{teachers.Email}</TableData>
                        <TableData>{teachers.Joining_Date}</TableData>
                        <TableData>
                          <EditButton>
                            <FontAwesomeIcon
                              icon={faEdit}
                              onClick={() => handleEditUser(teachers.Id)}
                            />
                          </EditButton>
                          <DeleteButton>
                            <FontAwesomeIcon
                              icon={faTrashAlt}
                              onClick={() => handleDeleteUser(teachers.Id)}
                            />
                          </DeleteButton>
                        </TableData>
                      </TableRow>
                    ))}
                </tbody>
              </Table>
            </TableContainer>
          </div>
          <div>
            <Stack style={{ textAlign: "center" }} spacing={2}>
              <Typography>Page: {page}</Typography>
              <Pagination count={10} page={page} onChange={handleChange} />
            </Stack>
          </div>
        </CardContainer3>
      </div>
    </>
  );
}

export default AllTeachers;
