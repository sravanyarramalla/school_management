import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

function AddHolidays() {
  const [Holiday_Type, setHoliday_Type] = useState("");
  const [Holiday_Title, setHoliday_Title] = useState("");
  const [Holiday_Start_Date, setHoliday_Start_Date] = useState("");
  const [Holiday_End_Date, setHoliday_End_Date] = useState("");
  const [Holiday_Details, setHoliday_Details] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const HolidaysDetails = {
    Holiday_Type,
    Holiday_Title,
    Holiday_Start_Date,
    Holiday_End_Date,
    Holiday_Details,
  };
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/Holiday/${id}`)
        .then((res) => {
          console.log("editdatain527", res && res.data[0]);
          const editData = res && res.data[0];
          setHoliday_Type(editData.Holiday_Type);
          setHoliday_Title(editData.Holiday_Title);
          setHoliday_Start_Date(editData.Holiday_Start_Date);
          setHoliday_End_Date(editData.Holiday_End_Date);
          setHoliday_Details(editData.Holiday_Details);
        })
        .catch((err) => {
          console.error("editdatain527", err);
        });
    }
  }, [id]);

  const Holidayshandles = async (e) => {
    e.preventDefault();
    console.log(HolidaysDetails);
    if (!id) {
      const response = await fetch("http://localhost:3000/Holiday", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(HolidaysDetails),
      });

      const data = await response.json();
      alert("Holiday Created Succefully");
      if (response) {
        navigate("/allholidays");
      }
      console.log(data);
    } else if (id) {
      const response = await fetch(`http://localhost:3000/Holiday/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(HolidaysDetails),
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
        <HeadingContainer>Add Holidays</HeadingContainer>
        <Div>
          <Heading>Holidays</Heading>
          <AddTeacherLink href="addholidays">Add Holidays</AddTeacherLink>
        </Div>
      </CardContainer1>
      <CardContainer>
        <FormContainer onSubmit={Holidayshandles}>
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
            value={Holiday_Start_Date}
            placeholder="Holiday Start Day"
            onChange={(e) => setHoliday_Start_Date(e.target.value)}
          />
          <label>Holiday End Day</label>
          <Input
            type="date"
            value={Holiday_End_Date}
            placeholder="Holiday End Day"
            onChange={(e) => setHoliday_End_Date(e.target.value)}
          />
          <label>Holiday Details</label>
          <Input
            type="text"
            value={Holiday_Details}
            placeholder="Holiday Details"
            onChange={(e) => setHoliday_Details(e.target.value)}
          />
          <Button2 type="button" onClick={() => console.log("Cancelled")}>
            Cancel
          </Button2>

          <Button1 type="submit">
            Submit
            <ToastContainer />
          </Button1>
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

export default AddHolidays;
