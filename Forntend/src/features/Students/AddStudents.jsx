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
  margin-left: 76%;
  width: 225%;

  margin-top: 98%;
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
  margin-top: -7%;
  width: 225%;
  margin-left: 76%;
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
  margin-left: 87%;
  margin-top: 15px;
  width: 12%;

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
  margin-top: -6%;
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

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

function AddStudents() {
  const [Roll_No, setRoll_No] = useState("");
  const [Name, setName] = useState("");
  const [Class, setClass] = useState("");
  const [Section, setSection] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Addmition_Date, setAddmition_Date] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const StudentsDetails = {
    Roll_No,
    Name,
    Class,
    Section,
    Mobile,
    Addmition_Date,
  };
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/students/${id}`)
        .then((res) => {
          console.log("editdatain527", res && res.data[0]);
          const editData = res && res.data[0];
          setRoll_No(editData.Roll_No);
          setName(editData.Name);
          setClass(editData.Class);
          setSection(editData.Section);
          setMobile(editData.Mobile);
          setAddmition_Date(editData.Addmition_Date);
        })
        .catch((err) => {
          console.error("editdatain527", err);
        });
    }
  }, [id]);

  const StudentsHandles = async (e) => {
    e.preventDefault();
    console.log(StudentsDetails);
    if (!id) {
      const response = await fetch("http://localhost:3000/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(StudentsDetails),
      });

      const data = await response.json();
      alert("Students Created Succefully");
      if (response) {
        navigate("/allstudents");
      }
      console.log(data);
    } else if (id) {
      const response = await fetch(`http://localhost:3000/students/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(StudentsDetails),
      });

      const data = await response.json();
      console.log(data);
      setOpen(true);
      setTimeout(() => {
        navigate("/allstudents");
      }, 1000);
    }
  };

  return (
    <>
      <CardContainer1>
        <HeadingContainer>Add Students</HeadingContainer>
        <Div>
          <Heading>Students</Heading>
          <AddTeacherLink href="addstudents">Add Students</AddTeacherLink>
        </Div>
      </CardContainer1>
      <CardContainer>
        <FormContainer onSubmit={StudentsHandles}>
          <label>Roll No</label>
          <Input
            type="text"
            value={Roll_No}
            placeholder="Roll No"
            onChange={(e) => setRoll_No(e.target.value)}
          />
          <label>Name</label>
          <Input
            type="text"
            value={Name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Class</label>
          <Input
            type="text"
            value={Class}
            placeholder="Class"
            onChange={(e) => setClass(e.target.value)}
          />
          <label>Section</label>
          <Input
            type="text"
            value={Section}
            placeholder="Section"
            onChange={(e) => setSection(e.target.value)}
          />
          <label>Mobile</label>
          <Input
            type="text"
            value={Mobile}
            placeholder="Mobile"
            maxLength="10"
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit mobile number"
            onChange={(e) => setMobile(e.target.value)}
          />
          <label>Admition Date</label>
          <Input
            type="date"
            value={Addmition_Date}
            placeholder="Admition_Date"
            onChange={(e) => setAddmition_Date(e.target.value)}
          />
          <Button1 type="submit">Submit</Button1>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Button2 type="button" onClick={() => console.log("Cancelled")}>
            Cancel
          </Button2>
        </FormContainer>
      </CardContainer>
    </>
  );
}

export default AddStudents;
