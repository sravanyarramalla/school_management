import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams, useNavigate } from "react-router-dom";

const CardContainer1 = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20%;
  padding: 0px;
  text-align: center;
  display: flex;
  padding-left: 4%;
  margin-left: 82%;
  width: 265%;
  margin-top: 110%;
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

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0%;
  padding: 16px;
  width: 265%;
  margin-top: -7%;
  margin-left: 82%;
`;
const Div1 = styled.div`
  display: flex;
`;

const Button1 = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-500);
  color: var(--color-brand-50);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  margin: 4px;
  margin-top: 15px;
  width: 12%;
  margin-left: 74%;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;
const Button2 = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: rgb(255, 162, 148);
  color: #ff4d00;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  margin: 4px;
  margin-top: 15px;
  width: 12%;

  &:hover {
    background-color: rgb(255, 34, 0);
    color: white;
  }
`;

const Input = styled.input`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-200);
  color: var(--color-white-0);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  margin: 4px;
  margin-top: 6px;

  &:hover {
    background-color: var(--color-grey-100);
  }
`;
const Select = styled.select`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-200);
  color: var(--color-grey-900);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  margin: 4px;
  margin-top: 6px;

  &:hover {
    background-color: var(--color-grey-100);
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

function AddLibrary() {
  const [Student_Name, setStudent_Name] = useState("");
  const [Class, setClass] = useState("");
  const [Title, setTitle] = useState("");
  const [Asset_Type, setAsset_Type] = useState("");
  const [Receive_Date, setReceive_Date] = useState("");
  const [Submit_Date, setSubmit_Date] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const LibraryDetails = {
    Student_Name,
    Class,
    Title,
    Asset_Type,
    Receive_Date,
    Submit_Date,
  };
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/Library/${id}`)
        .then((res) => {
          console.log("editdatain527", res && res.data[0]);
          const editData = res && res.data[0];
          setStudent_Name(editData.Student_Name);
          setClass(editData.Class);
          setTitle(editData.setTitle);
          setAsset_Type(editData.Asset_Type);
          setReceive_Date(editData.Asset_Type);
          setSubmit_Date(editData.setSubmit_Date);
        })
        .catch((err) => {
          console.error("editdatain527", err);
        });
    }
  }, [id]);

  const LibraryHandles = async (e) => {
    e.preventDefault();
    console.log(LibraryDetails);
    if (!id) {
      const response = await fetch("http://localhost:3000/Library", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(LibraryDetails),
      });

      const data = await response.json();
      alert("Library Created Succefully");
      // toast("Holiday Created Succefully");
      if (response) {
        navigate("/alllibrary");
      }
      console.log(data);
    } else if (id) {
      const response = await fetch(`http://localhost:3000/Library/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(LibraryDetails),
      });

      const data = await response.json();
      console.log(data);
      setOpen(true);
      setTimeout(() => {
        navigate("/alllibrary");
      }, 1000);
    }
  };

  return (
    <>
      <CardContainer1>
        <HeadingContainer>Add Library</HeadingContainer>
        <Div>
          <Heading>Library</Heading>
          <AddTeacherLink href="addlibrary">Add Library</AddTeacherLink>
        </Div>
      </CardContainer1>
      <CardContainer>
        <FormContainer onSubmit={LibraryHandles}>
          <label>Student Name</label>
          <Input
            type="text"
            value={Student_Name}
            placeholder="Student Name"
            onChange={(e) => setStudent_Name(e.target.value)}
          />
          <label>Class</label>
          <Input
            type="text"
            value={Class}
            placeholder="Class"
            onChange={(e) => setClass(e.target.value)}
          />
          <label>Title</label>
          <Input
            type="text"
            value={Title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Asset Type</label>
          <Select
            value={Asset_Type}
            onChange={(e) => setAsset_Type(e.target.value)}
          >
            <option value="Male">Asset Type</option>
            <option value="Male">Book</option>
            <option value="Female">News Paper</option>
            <option value="Other">Comic</option>
          </Select>
          <label>Receive Date</label>
          <Input
            type="date"
            value={Receive_Date}
            placeholder="Receive Date"
            onChange={(e) => setReceive_Date(e.target.value)}
          />
          <label>Submit Date</label>
          <Input
            type="date"
            value={Submit_Date}
            placeholder="Submit Date"
            onChange={(e) => setSubmit_Date(e.target.value)}
          />
          <Div1>
            <Button2 type="button" onClick={() => console.log("Cancelled")}>
              Cancel
            </Button2>
            <Button1 type="submit">Submit</Button1>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </Div1>
        </FormContainer>
      </CardContainer>
    </>
  );
}

export default AddLibrary;
