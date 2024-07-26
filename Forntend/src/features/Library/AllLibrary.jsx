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
  color: blue;
  font-weight: 400;
`;
const HeadingContainer1 = styled.h1`
  margin-top: 2%;
  font-size: 2rem; 
  font-weight: 400;
`;
const Div = styled.div`
  margin-top: 2%;
  margin-left: 67%;
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
  margin-right: -90%;
  margin-left: 31%;

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
  width: 7%;
`;

const HeadingShow = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 16px;
  margin-top: 2.2%;
  margin-left: -10%;
  margin-right: 76rem;
`;

const Label = styled.h1`
  font-size: 1.2rem;
  margin-bottom: -20px;
  margin-top: 2.3%;
  padding-left: 33%;
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  background-color: var(--color-grey-200);
  color: var(--color-grey-900);
  box-shadow: var(--shodow-sm);
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
const EditButton = styled.button`
  color: var(--color-brand-500);
`;
const DeleteButton = styled.button`
  color: orangered;
`;

function AllLibrary() {
  const [library, setLibrary] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  async function fetchLibrary() {
    const response = await fetch("http://localhost:3000/Library");
    const data = await response.json();
    setLibrary(data);
  }

  useEffect(() => {
    fetchLibrary();
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleEditUser = (id) => {
    navigate(`/editlibrary/${id}`);
  };
  const handleDeleteUser = async (id) => {
    const response = await fetch(`http://localhost:3000/Library/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log("Delete response:", data);
    fetchLibrary();
  };
  return (
    <>
      <div>
        <CardContainer1>
          <HeadingContainer>All Library</HeadingContainer>
          <Div>
            <Heading>Library</Heading>
            <AddTeacherLink href="alllibrary">All Library</AddTeacherLink>
          </Div>
        </CardContainer1>
      </div>
      <div>
        <CardContainer2>
          <HeadingContainer1>Library List</HeadingContainer1>
          <Div>
            <AddTeacherLink1 href="addlibrary">+ Add New</AddTeacherLink1>
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
            <Input type="search" value="" />
          </form>
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableHeader>S.No</TableHeader>
                    <TableHeader>Student Name</TableHeader>
                    <TableHeader>Class</TableHeader>
                    <TableHeader>Title</TableHeader>
                    <TableHeader>Asset Type</TableHeader>
                    <TableHeader>Receive Date</TableHeader>
                    <TableHeader>Submit Date</TableHeader>
                    <TableHeader>Action</TableHeader>
                  </TableRow>
                </TableHead>
                <tbody>
                  {library.length > 0 &&
                    library.map((Library) => (
                      <TableRow key={Library.Id}>
                        <TableData>{Library.Id}</TableData>
                        <TableData>{Library.Student_Name}</TableData>
                        <TableData>{Library.Class}</TableData>
                        <TableData>{Library.Title}</TableData>
                        <TableData>{Library.Asset_Type}</TableData>
                        <TableData>{Library.Receive_Date}</TableData>
                        <TableData>{Library.Submit_Date}</TableData>
                        <TableData>
                          <EditButton>
                            <FontAwesomeIcon
                              icon={faEdit}
                              onClick={() => handleEditUser(Library.Id)}
                            />
                          </EditButton>
                          <DeleteButton>
                            <FontAwesomeIcon
                              icon={faTrashAlt}
                              onClick={() => handleDeleteUser(Library.Id)}
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

export default AllLibrary;
