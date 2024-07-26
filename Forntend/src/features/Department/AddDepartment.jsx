import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams, useNavigate } from "react-router-dom";

const CardContainer1 = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 3%;
  padding: 0px;
  text-align: center;
  display: flex;
  padding-left: 4%;
  margin-left: 61%;
  width: 195%;
  margin-top: 80%;
`;
const HeadingContainer = styled.h1`
  margin-top: 2%;
  font-size: 2rem;
  color: blue;
  margin-left: 0%;
  font-weight: 400;
  margin-right: -6%;
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
`;

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0%;
  padding: 16px;
  margin-top: -7%;
  width: 195%;
  margin-left: 61%;
  margin-top: 10%;
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
  margin-top: -6%;
  width: 12%;
  margin-left: 88%;

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

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

function AddDepartment() {
  const [Department, setDepartment] = useState("");
  const [Head_of_Dep, setHead_of_Dep] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Starting_Year, setStarting_Year] = useState("");
  const [Stu_Capacity, setStu_Capacity] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const DepartmentDetails = {
    Department,
    Head_of_Dep,
    Mobile,
    Email,
    Starting_Year,
    Stu_Capacity,
  };
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/Department/${id}`)
        .then((res) => {
          console.log("editdatain527", res && res.data[0]);
          const editData = res && res.data[0];
          setDepartment(editData.Department);
          setHead_of_Dep(editData.Head_of_Dep);
          setMobile(editData.Mobile);
          setEmail(editData.Email);
          setStarting_Year(editData.Starting_Year);
          setStu_Capacity(editData.Stu_Capacity);
        })
        .catch((err) => {
          console.error("editdatain527", err);
        });
    }
  }, [id]);

  const DepartmentHandles = async (e) => {
    e.preventDefault();
    console.log(DepartmentDetails);
    if (!id) {
      const response = await fetch("http://localhost:3000/Department", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(DepartmentDetails),
      });

      const data = await response.json();
      alert("Department Created Succefully");
      // toast("Holiday Created Succefully");
      if (response) {
        navigate("/alldepartment");
      }
      console.log(data);
    } else if (id) {
      const response = await fetch(`http://localhost:3000/Department/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(DepartmentDetails),
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
        <HeadingContainer>Add Department </HeadingContainer>
        <Div>
          <Heading>Department</Heading>
          <AddTeacherLink href="adddepartment">Add Department</AddTeacherLink>
        </Div>
      </CardContainer1>
      <CardContainer>
        <FormContainer onSubmit={DepartmentHandles}>
          <label>Department</label>
          <Input
            type="text"
            value={Department}
            placeholder="Department"
            onChange={(e) => setDepartment(e.target.value)}
          />
          <label>Head Of Dep</label>
          <Input
            type="text"
            value={Head_of_Dep}
            placeholder="Head Of Dep"
            onChange={(e) => setHead_of_Dep(e.target.value)}
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
            type="text"
            value={Email}
            placeholder="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Starting Year</label>
          <Input
            type="date"
            value={Starting_Year}
            placeholder="Starting Year"
            onChange={(e) => setStarting_Year(e.target.value)}
          />
          <label>Stu Cpacity</label>
          <Input
            type="text"
            value={Stu_Capacity}
            placeholder="Stu  Cpacity"
            onChange={(e) => setStu_Capacity(e.target.value)}
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

export default AddDepartment;
