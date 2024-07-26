import React, { useState } from "react";
import styled from "styled-components";

const CardContainer1 = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20%;
  padding: 0px;
  text-align: center;
  display: flex;
  padding-left: 4%;
  margin-left: 100%;
  width: 290%;
  margin-top: 130%;
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
  width: 290%;
  margin-top: -7%;
  margin-left: 100%;
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
  margin-top: 6px;

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
  margin-top: 6px;

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

function EditFees() {
  const [Student_Name, setStudent_Name] = useState("");
  const [Class, setClass] = useState("");
  const [Fees_Type, setFees_Type] = useState("");
  const [Payment_Type, setPayment_Type] = useState("");
  const [Status_Type, setStatus_Type] = useState("");
  const [Date, setDate] = useState("");
  const [Amount, setAmount] = useState("");

  const FeesDetails = {
    Student_Name,
    Class,
    Fees_Type,
    Payment_Type,
    Status_Type,
    Date,
    Amount,
  };

  const Feeshandles = async (e) => {
    e.preventDefault();
    console.log(FeesDetails);

    const response = await fetch("http://localhost:3000/Fees", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Feeshandles),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <CardContainer1>
        <HeadingContainer>Edit Fees</HeadingContainer>
        <Div>
          <Heading>Fees</Heading>
          <AddTeacherLink href="editfees">Edit Fees</AddTeacherLink>
        </Div>
      </CardContainer1>
      <CardContainer>
        <FormContainer onSubmit={Feeshandles}>
          <label>Student Name</label>
          <Input
            type="text"
            value={Student_Name}
            placeholder="Student_Name"
            onChange={(e) => setStudent_Name(e.target.value)}
          />
          <label>Class</label>
          <Input
            type="text"
            value={Class}
            placeholder="Class"
            onChange={(e) => setClass(e.target.value)}
          />
          <label>Fees_Type</label>
          <Input
            type="text"
            value={Fees_Type}
            placeholder="TitFees Typele"
            onChange={(e) => setFees_Type(e.target.value)}
          />
          <label>Payment_Type</label>
          <Input
            type="text"
            value={Payment_Type}
            placeholder="Payment_Type"
            onChange={(e) => setPayment_Type(e.target.value)}
          />
          <label>Status Type</label>
          <Input
            type="date"
            value={Status_Type}
            placeholder="Status Type"
            onChange={(e) => setStatus_Type(e.target.value)}
          />
          <label> Date</label>
          <Input
            type="date"
            value={Date}
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
          />
          <label> Amount</label>
          <Input
            type="int"
            value={Amount}
            placeholder="Amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button1 type="submit">Submit</Button1>
          <Button2 type="button" onClick={() => console.log("Cancelled")}>
            Cancel
          </Button2>
        </FormContainer>
      </CardContainer>
    </>
  );
}

export default EditFees;
