import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Label = styled.label`
  font-size: 1rem;
  margin-left: 13%;
`;

const Input1 = styled.input`
  border: none;
  border-radius: 65px;
  background-color: var(--color-grey-200);
  color: var(--color-grey-900);
  box-shadow: var(--shadow-sm);
  padding: 4% 5%;
  padding-left: 3rem;
  width: 80%;
  margin-left: 11%;
  margin-bottom: 5%;
  font-size: 1rem;
`;

const Div1 = styled.div`
  max-width: 32%;
  margin-left: 35%;
  margin-bottom: -3%;
`;

const Heading1 = styled.h1`
  font-size: 8.1px;
  width: 35rem;
  margin-top: -15%;
  margin-bottom: 35%;
  margin-left: 12%;
`;

const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 32px;
`;

const Button = styled.button`
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
  margin-left: 38%;
  width: 28%;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

function Forgot() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    setTimeout(() => {
      navigate("/teachersdashboard");
    }, 1000);
  };

  return (
    <ModalBox>
      <Div1>
        <img src="/schoolLogo.png" alt="School Logo" />
        <Heading1>Forgot Password</Heading1>
      </Div1>
      <form onSubmit={handleSubmit}>
        <div>
          <Label>Email</Label>
          <Input1 type="email" placeholder="Username" required />
        </div>
        <Button type="submit">SUBMIT</Button>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </form>
    </ModalBox>
  );
}

export default Forgot;
