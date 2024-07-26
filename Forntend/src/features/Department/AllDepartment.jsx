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
  width: 95%;
  padding-left: 4%;
  margin-left: 30%;
  margin-top: 40%;
`;

const HeadingContainer = styled.h1`
  margin-top: 2%;
  font-size: 2rem;
  /* color: blue; */
  margin-left: -2%;
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
  margin-left: -13%;
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
  margin-left: 8%;
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
  width: 95%;
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
  margin-right: -147%;
  margin-left: 75%;

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
  width: 95%;
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
  margin-left: 6%;
  margin-right: 75rem;
`;

const HeadingShow = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 16px;
  margin-top: 2.2%;
  margin-right: 76rem;
  margin-left: -10%;
`;

const Label = styled.h1`
  font-size: 1.2rem;
  margin-bottom: -20px;
  margin-top: 2.3%;
  padding-left: 35%;
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
  width: 100%;
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

// const Pagination = styled.p`
//   align-items: center;
// `;

function AllDepartment() {
  const [department, setDepartment] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  async function fetchDepartment() {
    const response = await fetch("http://localhost:3000/Department");
    const data = await response.json();
    setDepartment(data);
  }

  useEffect(() => {
    // Fetch the teachers data from the API
    fetchDepartment();
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleEditUser = (id) => {
    navigate(`/editdepartment/${id}`);
  };
  const handleDeleteUser = async (id) => {
    const response = await fetch(`http://localhost:3000/Department/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log("Delete response:", data);
    fetchDepartment();
  };
  return (
    <>
      <CardContainer1>
        <HeadingContainer>All Department</HeadingContainer>
        <Div>
          <Heading>Department</Heading>
          <AddTeacherLink href="alldepartment">All Department</AddTeacherLink>
        </Div>
      </CardContainer1>
      <FormContainer>
        <ListLink href="allstaff">List View</ListLink>
        <GridLink href="gridview">Grid View</GridLink>
      </FormContainer>
      <CardContainer2>
        <HeadingContainer>Department List</HeadingContainer>
        <Div>
          <AddTeacherLink1 href="adddepartment">+ Add New</AddTeacherLink1>
        </Div>
      </CardContainer2>
      <CardContainer3>
        <HeadingShow>Show</HeadingShow>
        <Select>
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </Select>
        <form>
          <Label>Search:</Label>
          <Input type="search" value="" />
        </form>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableHeader>S.No</TableHeader>
                <TableHeader>Department</TableHeader>
                <TableHeader>Head_of_Dep</TableHeader>
                <TableHeader>Mobile</TableHeader>
                <TableHeader>Email</TableHeader>
                <TableHeader>Starting_Year</TableHeader>
                <TableHeader>Stu_Capacity</TableHeader>
                <TableHeader>Action</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              {department.length > 0 &&
                department.map((Department) => (
                  <TableRow key={Department.Id}>
                    <TableData>{Department.Id}</TableData>
                    <TableData>{Department.Department}</TableData>
                    <TableData>{Department.Head_of_Dep}</TableData>
                    <TableData>{Department.Mobile}</TableData>
                    <TableData>{Department.Email}</TableData>
                    <TableData>{Department.Starting_Year}</TableData>
                    <TableData>{Department.Stu_Capacity}</TableData>
                    <TableData>
                      <EditButton>
                        <FontAwesomeIcon
                          icon={faEdit}
                          onClick={() => handleEditUser(Department.Id)}
                        />
                      </EditButton>
                      <DeleteButton>
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          onClick={() => handleDeleteUser(Department.Id)}
                        />
                      </DeleteButton>
                    </TableData>
                  </TableRow>
                ))}
            </tbody>
          </Table>
        </TableContainer>
        <div>
          <Stack style={{ textAlign: "center" }} spacing={2}>
            <Typography>Page: {page}</Typography>
            <Pagination count={10} page={page} onChange={handleChange} />
          </Stack>
        </div>
      </CardContainer3>
    </>
  );
}

export default AllDepartment;
