import React, { useState } from "react";
import styled from "styled-components";

const CardContainer1 = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 3%;
  padding: 0px;
  text-align: center;
  display: flex;
  width: 280%;
  padding-left: 4%;
  margin-left: 82%;
  margin-top: 125%;
`;

const HeadingContainer = styled.h1`
  margin-top: 2%;
  font-size: 2rem;
  color: blue;
  font-weight: 400;
  width: 12rem;
`;

const Div = styled.div`
  margin-top: 2%;
  margin-left: 74%;
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
  margin-left: 82%;
  width: 280%;
  margin-top: 9%;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
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

const SubmitButton = styled.button`
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
const CancleButton = styled.button`
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

function EditStaff() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [education, setEducation] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [joining_Date, setJoining_Date] = useState("");

  const TeachersDetails = {
    name,
    department,
    gender,
    education,
    mobile,
    email,
    joining_Date,
  };

  const Teachershandles = async (e) => {
    e.preventDefault();
    console.log(TeachersDetails);

    const response = await fetch("http://localhost:3000/teachers", {
      method: "UPDATE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(TeachersDetails),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <div>
        <CardContainer1>
          <HeadingContainer>Edit Staff</HeadingContainer>
          <Div>
            <Heading>Staff</Heading>
            <AddTeacherLink href="editstaff">Edit Staff</AddTeacherLink>
          </Div>
        </CardContainer1>
      </div>
      <CardContainer>
        <FormContainer onSubmit={Teachershandles}>
          <label>Teacher Name</label> <br />
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>Department</label> <br />
          <Input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <br />
          <label>Gender</label> <br />
          <Input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <br />
          <label>Education</label> <br />
          <Input
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
          <br />
          <label>Mobile</label> <br />
          <Input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <br />
          <label>Email</label> <br />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Joining Date</label> <br />
          <Input
            type="date"
            value={joining_Date}
            onChange={(e) => setJoining_Date(e.target.value)}
          />
          <br />
          <SubmitButton type="submit">Submit</SubmitButton>
          <CancleButton type="button" onClick={() => console.log("Cancelled")}>
            Cancel
          </CancleButton>
        </FormContainer>
      </CardContainer>
    </>
  );
}

export default EditStaff;
