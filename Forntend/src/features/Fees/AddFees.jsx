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
  margin: 20%;
  padding: 0px;
  text-align: center;
  display: flex;
  padding-left: 4%;
  margin-left: 95%;
  width: 300%;
  margin-top: 125%;
`;
const HeadingContainer = styled.h1`
  margin-top: 2%;
  font-size: 2rem;
  color: blue;
  font-weight: 400;
  margin-left: 1%;
`;

const Div = styled.div`
  margin-top: 2%;
  margin-left: 71%;
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
  width: 300%;
  margin-top: -7%;
  margin-left: 95%;
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

function AddFees() {
  const [Student_Name, setStudent_Name] = useState("");
  const [Class, setClass] = useState("");
  const [Fees_Type, setFees_Type] = useState("");
  const [Payment_Type, setPayment_Type] = useState("");
  const [Status_Type, setStatus_Type] = useState("");
  const [Date, setDate] = useState("");
  const [Amount, setAmount] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const TeachersDetails = {
    Student_Name,
    Class,
    Fees_Type,
    Payment_Type,
    Status_Type,
    Date,
    Amount,
  };
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/Fees/${id}`)
        .then((res) => {
          console.log("editdatain527", res && res.data[0]);
          const editData = res && res.data[0];
          setStudent_Name(editData.Student_Name);
          setClass(editData.Class);
          setFees_Type(editData.Fees_Type);
          setPayment_Type(editData.Payment_Type);
          setAmount(editData.Amount);
          setStatus_Type(editData.Status_Type);
          setDate(editData.Date);
        })
        .catch((err) => {
          console.error("editdatain527", err);
        });
    }
  }, [id]);

  const FeesHandles = async (e) => {
    e.preventDefault();
    console.log(TeachersDetails);
    if (!id) {
      const response = await fetch("http://localhost:3000/Fees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(TeachersDetails),
      });

      const data = await response.json();
      if (response) {
        navigate("/allfees");
      }
      console.log(data);
    } else if (id) {
      const response = await fetch(`http://localhost:3000/Fees/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(TeachersDetails),
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
        <HeadingContainer>Add Fees</HeadingContainer>
        <Div>
          <Heading>Fees</Heading>
          <AddTeacherLink href="addteachers">Add Fees</AddTeacherLink>
        </Div>
      </CardContainer1>
      <CardContainer>
        <FormContainer onSubmit={FeesHandles}>
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
          <label>Fees Type</label>
          <Input
            type="text"
            value={Fees_Type}
            placeholder="Fees Type"
            onChange={(e) => setFees_Type(e.target.value)}
          />
          <label>Payment Type</label>
          <Input
            type="text"
            value={Payment_Type}
            placeholder="Payment Type"
            onChange={(e) => setPayment_Type(e.target.value)}
          />
          <label>Status Type</label>
          <Input
            type="text"
            value={Status_Type}
            placeholder="Status Type"
            onChange={(e) => setStatus_Type(e.target.value)}
          />

          <label>Date</label>
          <Input
            type="Date"
            value={Date}
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Amount</label>
          <Input
            type="int"
            value={Amount}
            placeholder="Amount"
            onChange={(e) => setAmount(e.target.value)}
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

export default AddFees;
