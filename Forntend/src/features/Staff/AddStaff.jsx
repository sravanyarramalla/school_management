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
  margin-left: 95%;
  width: 300%;
  margin-top: 135%;
`;
const HeadingContainer = styled.h1`
  margin-top: 2%;
  font-size: 2rem;
  color: blue;
  font-weight: 400;
`;

const Div = styled.div`
  margin-top: 2%;
  margin-left: 72%;
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
  margin-left: 95%;
  width: 300%;
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
  margin-left: 88%;
  margin-top: -6%;
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

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

function AddStaff() {
  const [Name, setName] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Address, setAddress] = useState("");
  const [Joining_Date, setJoining_Date] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const StaffDetails = {
    Name,
    Designation,
    Mobile,
    Email,
    Address,
    Joining_Date,
  };
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/staff/${id}`)
        .then((res) => {
          console.log("editdatain527", res && res.data[0]);
          const editData = res && res.data[0];
          setName(editData.Name);
          setDesignation(editData.Designation);
          setMobile(editData.Mobile);
          setEmail(editData.Email);
          setAddress(editData.Address);
          setJoining_Date(editData.Joining_Date);
        })
        .catch((err) => {
          console.error("editdatain527", err);
        });
    }
  }, [id]);

  const StaffHandles = async (e) => {
    e.preventDefault();
    console.log(StaffDetails);
    if (!id) {
      const response = await fetch("http://localhost:3000/staff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(StaffDetails),
      });

      const data = await response.json();
      alert("Staff Created Succefully");
      if (response) {
        navigate("/allstaff");
      }
      console.log(data);
    } else if (id) {
      const response = await fetch(`http://localhost:3000/staff/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(StaffDetails),
      });

      const data = await response.json();
      console.log(data);
      setOpen(true);
      setTimeout(() => {
        navigate("/allstaff");
      }, 1000);
    }
  };

  return (
    <>
      <CardContainer1>
        <HeadingContainer>Add Staff</HeadingContainer>
        <Div>
          <Heading>Staff</Heading>
          <AddTeacherLink href="#">Add Staff</AddTeacherLink>
        </Div>
      </CardContainer1>
      <CardContainer>
        <FormContainer onSubmit={StaffHandles}>
          <label>Name</label>
          <Input
            type="text"
            value={Name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Designation</label>
          <Input
            type="text"
            value={Designation}
            placeholder="Designation"
            onChange={(e) => setDesignation(e.target.value)}
          />

          <label>Mobile</label>
          <Input
            type="int"
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
          <label>Address</label>
          <Input
            type="string"
            value={Address}
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <label>Joining Date</label>
          <Input
            type="Date"
            value={Joining_Date}
            placeholder="Joining Date"
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

export default AddStaff;
