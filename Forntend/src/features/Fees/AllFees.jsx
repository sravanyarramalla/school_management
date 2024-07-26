import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 3%;
  padding: 0px;
  text-align: center;
  display: flex;
  width: 95%;
  padding-left: 4%;
  margin-left: 29%;
  margin-top: 40%;
`;

const HeadingContainer = styled.h1`
  margin-top: 2%;
  font-size: 2rem;
  color: blue;
  font-weight: 400;
`;

const Div1 = styled.div`
  margin-top: 2%;
  margin-left: 59%;
  display: flex;
`;
const AddTeacherLink1 = styled.a`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-500);
  color: var(--color-brand-50);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  margin-top: -6px;
  margin-bottom: 9%;
  margin-right: -90%;
  margin-left: 66%;

  &:hover {
    background-color: var(--color-brand-700);
  }
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
  margin-left: 29%;
  margin-top: 10%;
`;
const Heading1 = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 16px;
  margin-top: 2%;
  color: var(--color-primary);
`;
const Div = styled.div`
  margin-top: 2%;
  margin-left: 59%;
  display: flex;
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
  margin-left: 29%;
  margin-top: -2.9%;
`;

const Select = styled.select`
  font-size: 1.4rem;
  border: none;
  border-radius: 5px;
  background-color: var(--color-grey-200);
  color: var(--color-grey-900);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  margin-top: -36px;
  margin-bottom: -42px;
  margin-left: 6%;
  margin-right: 77rem;
`;

const HeadingShow = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 16px;
  margin-top: 2.2%;
  margin-left: -13%;
  margin-right: 76rem;
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
  box-shadow: var(--shadow-sm);
  margin-left: 57rem;
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
const EditNavLink = styled.button`
  color: var(--color-brand-500);
`;
const DeleteButton = styled.button`
  color: orangered;
`;

function AllFees() {
  const [fees_collection, setFees_Collection] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  async function fetchLibrary() {
    const response = await fetch("http://localhost:3000/Fees");
    const data = await response.json();
    setFees_Collection(data);
  }

  useEffect(() => {
    fetchLibrary();
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleEditUser = (id) => {
    navigate(`/editfees/${id}`);
  };

  const handleDeleteUser = async (id) => {
    const response = await fetch(`http://localhost:3000/Fees/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log("Delete response:", data);

    fetchLibrary();
  };

  return (
    <>
      <CardContainer>
        <HeadingContainer>All Fees</HeadingContainer>
        <Div>
          <Heading>Fees</Heading>
          <AddTeacherLink href="allfees">All Fees</AddTeacherLink>
        </Div>
      </CardContainer>
      <div>
        <CardContainer1>
          <Heading1>Fees Collection List</Heading1>
          <Div1>
            <AddTeacherLink1 href="addfees">+ Add New</AddTeacherLink1>
          </Div1>
        </CardContainer1>
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
            <Input type="search" />
          </form>
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableHeader>Roll No</TableHeader>
                    <TableHeader>Student_Name</TableHeader>
                    <TableHeader>Class</TableHeader>
                    <TableHeader>Fees_Type</TableHeader>
                    <TableHeader>Payment_Type</TableHeader>
                    <TableHeader>Status</TableHeader>
                    <TableHeader>Date</TableHeader>
                    <TableHeader>Amount</TableHeader>
                    <TableHeader>Action</TableHeader>
                  </TableRow>
                </TableHead>
                <tbody>
                  {fees_collection.length > 0 &&
                    fees_collection.map((fees) => (
                      <TableRow key={fees.Id}>
                        <TableData>{fees.Id}</TableData>
                        <TableData>{fees.Student_Name}</TableData>
                        <TableData>{fees.Class}</TableData>
                        <TableData>{fees.Fees_Type}</TableData>
                        <TableData>{fees.Payment_Type}</TableData>
                        <TableData>{fees.Status_Type}</TableData>
                        <TableData>{fees.Date}</TableData>
                        <TableData>{fees.Amount}</TableData>
                        <TableData>
                          <EditNavLink>
                            <FontAwesomeIcon
                              icon={faEdit}
                              onClick={() => handleEditUser(fees.Id)}
                            />
                          </EditNavLink>
                          <DeleteButton
                            onClick={() => handleDeleteUser(fees.Id)}
                          >
                            <FontAwesomeIcon icon={faTrashAlt} />
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

export default AllFees;
