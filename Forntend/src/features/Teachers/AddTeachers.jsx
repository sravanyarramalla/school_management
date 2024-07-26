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
  margin-left: 73%;
  width: 225%;
  margin-top: 95%;
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
  margin-left: 73%;
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
  margin-top: -45px;
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

function AddTeachers() {
  const [Name, setName] = useState("");
  const [Department, setDepartment] = useState("");
  const [Gender, setGender] = useState("");
  const [Education, setEducation] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [Joining_Date, setJoining_Date] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const TeacherssDetails = {
    Name,
    Department,
    Gender,
    Education,
    Mobile,
    Email,
    Joining_Date,
  };
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/teachers/${id}`)
        .then((res) => {
          console.log("editdatain527", res && res.data[0]);
          const editData = res && res.data[0];
          setName(editData.Name);
          setDepartment(editData.Department);
          setGender(editData.Gender);
          setEducation(editData.Education);
          setMobile(editData.Mobile);
          setEmail(editData.Email);
          setJoining_Date(editData.Joining_Date);
        })
        .catch((err) => {
          console.error("editdatain527", err);
        });
      // const data = response.json();
    }
  }, [id]);

  const TeachersHandles = async (e) => {
    e.preventDefault();
    console.log("191TeacherssDetails", TeacherssDetails);
    if (!id) {
      const response = await fetch("http://localhost:3000/teachers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(TeacherssDetails),
      });

      const data = await response.json();
      alert("teachers Created Succefully");
      if (response) {
        navigate("/allteachers");
      }
      console.log(data);
    } else if (id) {
      const response = await fetch(`http://localhost:3000/teachers/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(TeacherssDetails),
      });

      const data = await response.json();
      console.log(data);
      setOpen(true);
      setTimeout(() => {
        navigate("/allteachers");
      }, 1000);
    }
  };

  return (
    <>
      <CardContainer1>
        <HeadingContainer>Add Teachers</HeadingContainer>
        <Div>
          <Heading>Teachers</Heading>
          <AddTeacherLink href="addteachers">Add Teacher</AddTeacherLink>
        </Div>
      </CardContainer1>
      <CardContainer>
        <FormContainer onSubmit={TeachersHandles}>
          <label>Name</label>
          <Input
            type="text"
            value={Name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Department</label>
          <Input
            type="text"
            value={Department}
            placeholder="Department"
            onChange={(e) => setDepartment(e.target.value)}
          />
          <label>Gender</label>
          <Select onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Select>
          <label>Education</label>
          <Input
            type="text"
            value={Education}
            placeholder="Education"
            onChange={(e) => setEducation(e.target.value)}
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

          <label>Email</label>
          <Input
            type="email"
            value={Email}
            placeholder="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Joining Date</label>
          <Input
            type="date"
            value={Joining_Date}
            placeholder="Joining_Date"
            onChange={(e) => setJoining_Date(e.target.value)}
          />
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
        </FormContainer>
      </CardContainer>
    </>
  );
}

export default AddTeachers;
