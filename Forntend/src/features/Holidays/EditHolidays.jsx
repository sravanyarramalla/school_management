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
  margin-left: 77%;
  width: 225%;
  margin-top: 100%;
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
  margin-left: 77%;
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

function EditHolidays() {
  const [Holiday_Title, setHoliday_Title] = useState("");
  const [Holiday_Type, setHoliday_Type] = useState("");
  const [Holiday_Start_Date, setHoliday_Start_Date] = useState("");
  const [Holiday_End_Date, setHoliday_End_Date] = useState("");
  const [Holiday_Details, setHoliday_Details] = useState("");

  const TeachersDetails = {
    Holiday_Title,
    Holiday_Type,
    Holiday_Start_Date,
    Holiday_End_Date,
    Holiday_Details,
  };

  const TeachersHandles = async (e) => {
    e.preventDefault();
    console.log(TeachersDetails);

    const response = await fetch("http://localhost:3000/teachers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(TeachersDetails),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <CardContainer1>
        <HeadingContainer>Edit Holidays</HeadingContainer>
        <Div>
          <Heading>Holidays</Heading>
          <AddTeacherLink href="editholidays">Edit Holidays</AddTeacherLink>
        </Div>
      </CardContainer1>
      <CardContainer>
        <FormContainer onSubmit={TeachersHandles}>
          <label>Title</label>
          <Input
            type="text"
            value={Holiday_Title}
            placeholder="Holiday Title"
            onChange={(e) => setHoliday_Title(e.target.value)}
          />
          <label>Holiday Type</label>
          <Input
            type="text"
            value={Holiday_Type}
            placeholder="Holiday Type"
            onChange={(e) => setHoliday_Type(e.target.value)}
          />
          <label>Holiday Start Day</label>
          <Input
            type="date"
            value={Date}
            placeholder="Holiday Start Day"
            onChange={(e) => setHoliday_Start_Date(e.target.value)}
          />
          <label>Holiday End Date</label>
          <Input
            type="date"
            value={Date}
            placeholder="Holiday End Date"
            onChange={(e) => setHoliday_End_Date(e.target.value)}
          />
          <label>Holiday Details</label>
          <Input
            type="text"
            value={Text}
            placeholder="Holiday Details"
            onChange={(e) => setHoliday_Details(e.target.value)}
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

export default EditHolidays;
